import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import Logo from "./Logo";
import { WHATSAPP_URL } from "../data";
import { useScrollSpy } from "../hooks/useReveal";

const links = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const sectionIds = ["home", "menu", "about", "gallery", "contact"];

type Props = {
  dark: boolean;
  onToggleTheme: () => void;
};

export default function Navbar({ dark, onToggleTheme }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const active = useScrollSpy(sectionIds);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "sb-glass border-b border-white/5 py-3 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]"
          : "border-b border-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#home" aria-label="Street Bar home">
          <Logo />
        </a>

        <div className="hidden items-center gap-9 lg:flex">
          {links.map((link) => {
            const isActive = active === link.href.slice(1);

            return (
              <a
                key={link.href}
                href={link.href}
                className={`sb-link text-sm font-medium tracking-wide transition-colors ${
                  isActive
                    ? "text-gold-300"
                    : "sb-muted hover:text-gold-300"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onToggleTheme}
            aria-label="Toggle dark mode"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 sb-muted transition-colors hover:border-gold-400/50 hover:text-gold-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
          >
            {dark ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="sb-btn-gold hidden rounded-full px-6 py-2.5 text-sm font-semibold sm:inline-block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
          >
            Order Now
          </a>

          <button
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 sb-muted lg:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
          >
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-500 lg:hidden ${
          open
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-5 mt-3 rounded-2xl sb-glass p-5">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium tracking-wide sb-muted transition-colors hover:text-gold-300"
              >
                {link.label}
              </a>
            ))}

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="sb-btn-gold mt-2 rounded-full px-6 py-3 text-center text-sm font-semibold"
            >
              Order Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}