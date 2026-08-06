import { site } from '@/lib/site';
import { IconWhatsApp } from './Icons';

// WhatsApp number lives in site.ts (whatsapp).
export default function WhatsAppFloat() {
  const href = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hi UniHunt, I'd like to know more about studying/working abroad."
  )}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with UniHunt on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition hover:scale-105 focus-visible:outline-none"
    >
      <IconWhatsApp width={28} height={28} />
    </a>
  );
}
