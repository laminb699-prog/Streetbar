import { Clock, MapPin, Phone, MessageCircle } from "lucide-react";
import { ADDRESS, PHONE, WHATSAPP_URL } from "../data";
import { useReveal } from "../hooks/useReveal";

const hours = [
  { day: "Monday – Thursday", time: "10:00 AM – 12:00 AM" },
  { day: "Friday – Saturday", time: "10:00 AM – 2:00 AM" },
  { day: "Sunday", time: "12:00 PM – 12:00 AM" },
];

export default function Contact() {
  const { ref, visible } = useReveal();

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div ref={ref} className={`sb-reveal ${visible ? "sb-in" : ""}`}>
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 text-xs font-medium tracking-[0.3em] text-gold-300">
              <span className="h-px w-8 bg-gold-400" />
              CONTACT
              <span className="h-px w-8 bg-gold-400" />
            </div>

            <h2 className="font-display text-4xl font-bold sm:text-5xl">
              Come <span className="sb-text-gold">visit us</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="flex flex-col gap-5">
              <div className="sb-card sb-surface flex items-start gap-4 rounded-2xl border sb-border p-6">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold-400/10 text-gold-300">
                  <MapPin className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-display text-lg font-semibold">
                    Our Location
                  </h3>

                  <p className="mt-1 text-sm sb-muted">{ADDRESS}</p>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <a
                  href={`tel:+${PHONE}`}
                  className="sb-card sb-surface flex items-start gap-4 rounded-2xl border sb-border p-6"
                >
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold-400/10 text-gold-300">
                    <Phone className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-display text-base font-semibold">
                      Phone
                    </h3>

                    <p className="mt-1 text-sm sb-muted">
                      +212 713 809 797
                    </p>
                  </div>
                </a>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sb-card sb-surface flex items-start gap-4 rounded-2xl border sb-border p-6"
                >
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#25D366]/10 text-[#25D366]">
                    <MessageCircle className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-display text-base font-semibold">
                      WhatsApp
                    </h3>

                    <p className="mt-1 text-sm sb-muted">
                      +212 713 809 797
                    </p>
                  </div>
                </a>
              </div>

              <div className="sb-card sb-surface rounded-2xl border sb-border p-6">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold-400/10 text-gold-300">
                    <Clock className="h-5 w-5" />
                  </div>

                  <h3 className="font-display text-lg font-semibold">
                    Opening Hours
                  </h3>
                </div>

                <div className="mt-4 space-y-3">
                  {hours.map((hour) => (
                    <div
                      key={hour.day}
                      className="flex items-center justify-between border-b border-white/5 pb-3 text-sm last:border-0 last:pb-0"
                    >
                      <span className="sb-muted">{hour.day}</span>

                      <span className="font-medium text-gold-200">
                        {hour.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="sb-card overflow-hidden rounded-2xl border sb-border">
              <iframe
                title="Street Bar location on Google Maps"
                src="https://www.google.com/maps?q=Boulevard+Al+Masjid+Dakhla+Morocco&output=embed"
                className="h-full min-h-[400px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{
                  border: 0,
                  filter: "grayscale(0.3) contrast(1.1)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}