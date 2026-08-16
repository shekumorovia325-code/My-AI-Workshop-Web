import { MessageCircle } from "lucide-react";
import { SITE } from "./site";

const WHATSAPP_TEXT = "Hello Sheku, I would like to learn more about the Weyone AI workshop.";

export function WhatsAppButton() {
  return (
    <a
      href={SITE.whatsappLink}
      onClick={(e) => {
        e.preventDefault();
        // Use the WhatsApp protocol handler where available (mobile / desktop app)
        const native = `whatsapp://send?phone=23280969174&text=${encodeURIComponent(WHATSAPP_TEXT)}`;
        window.location.href = native;
        // Fallback to the web link if the app doesn't open after a short delay
        setTimeout(() => {
          window.open(SITE.whatsappLink, "_blank", "noopener,noreferrer");
        }, 600);
      }}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Sheku on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[oklch(0.62_0.17_150)] px-4 py-3 text-sm font-semibold text-white shadow-lift transition-transform hover:-translate-y-0.5"
    >
      <MessageCircle className="size-5" aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
