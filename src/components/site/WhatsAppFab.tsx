import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/250731211105"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full flex items-center justify-center
                 bg-gradient-to-br from-[#D4AF37] to-[#C9A96E] text-charcoal
                 shadow-[0_10px_30px_-8px_rgba(212,175,55,0.7)]
                 hover:scale-110 transition-transform duration-300"
    >
      <MessageCircle size={24} strokeWidth={2.2} />
      <span className="absolute inline-flex h-full w-full rounded-full bg-gold/40 animate-ping opacity-60" />
    </a>
  );
}
