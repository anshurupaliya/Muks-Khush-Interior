import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "span" | "li";
}

export function Reveal({ children, delay = 0, className = "", as: Tag = "div" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const style: CSSProperties = {
    transitionDelay: `${delay}ms`,
  };

  return (
    <Tag
      ref={ref as never}
      style={style}
      className={`transition-all duration-[1100ms] ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
