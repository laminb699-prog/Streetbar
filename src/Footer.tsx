import { Globe, MapPin, Phone, Share2 } from "lucide-react";
import Logo from "./Logo";
import { ADDRESS, PHONE, WHATSAPP_URL } from "../data";

export default function Footer() {
  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: "Street Bar — Dakhla",
        text: "Street Bar — Food • Drinks • Sweet",
        url: window.location.origin,
      });
    } else {
      await navigator.clipboard.writeText(window.location.origin);
      alert("Website link copied!");
    }
  };

  return (
    <footer className="relative border-t border-white/5 sb-surface pt-16">
      <div className="mx-auto max-w-7xl px-6 pb-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Logo />

            <p className="mt-5 max-w-xs text-sm leading-relaxed sb-muted">
              Fresh drinks, delicious crêpes, pancakes, waffles and premium
              desserts — crafted with love in Dakhla, Morocco.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold tracking-[0.2em] text-gold-300">
              CONTACT
            </h3>

            <ul className="mt-5 space-y-4 text-sm sb-muted">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span>{ADDRESS}</span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold-400" />

                <a
                  href={`tel:+${PHONE}`}
                  className="transition-colors hover:text-gold-200"
                >
                  +212 713 809 797
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold tracking-[0.2em] text-gold-300">
              FOLLOW US
            </h3>

            <div className="mt-5 flex gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="grid h-11 w-11 place-items-center rounded-full border sb-border sb-muted transition-all hover:border-gold-400/50 hover:text-gold-300"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.6-.8-2.7-1.5-3.8-3.4-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.3 5.2 4.6 2.9 1.2 2.9.8 3.5.8.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3z" />
                </svg>
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="grid h-11 w-11 place-items-center rounded-full border sb-border sb-muted transition-all hover:border-gold-400/50 hover:text-gold-300"
              >
                <Globe className="h-5 w-5" />
              </a>

              <button
                type="button"
                onClick={handleShare}
                aria-label="Share Street Bar website"
                className="grid h-11 w-11 place-items-center rounded-full border sb-border sb-muted transition-all hover:border-gold-400/50 hover:text-gold-300"
              >
                <Share2 className="h-5 w-5" />
              </button>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="sb-btn-gold mt-5 inline-block rounded-full px-6 py-2.5 text-sm font-semibold"
            >
              Order Now
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-7 text-center text-xs sb-muted sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} Street Bar. All rights reserved.
          </p>

          <p>streetbar.store • Dakhla, Morocco</p>
        </div>
      </div>
    </footer>
  );
}