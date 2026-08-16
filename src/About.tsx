import { useReveal } from "../hooks/useReveal";

const items = [
  { name: "Premium Crêpes", icon: "🥞" },
  { name: "Bubble Waffles", icon: "🧇" },
  { name: "Milkshakes", icon: "🥤" },
  { name: "Fresh Juices", icon: "🍹" },
  { name: "Virgin Mojitos", icon: "🍸" },
  { name: "Coffee", icon: "☕" },
  { name: "Desserts", icon: "🍰" },
  { name: "Ice Cream", icon: "🍨" },
  { name: "Pancakes", icon: "🥞" },
];

export default function About() {
  const { ref, visible } = useReveal();

  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div
          ref={ref}
          className={`sb-reveal ${visible ? "sb-in" : ""}`}
        >
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="relative">
              <div className="sb-img-zoom relative overflow-hidden rounded-[2rem] shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/6463660/pexels-photo-6463660.jpeg?auto=compress&cs=tinysrgb&w=1000"
                  alt="Assorted milkshakes with toppings"
                  className="aspect-[4/5] w-full object-cover"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
              </div>

              <div className="sb-float absolute -bottom-6 -right-4 sb-glass rounded-2xl px-6 py-5 shadow-xl sm:-right-8">
                <div className="font-display text-3xl font-bold sb-text-gold">
                  100%
                </div>

                <div className="mt-1 text-xs tracking-wide sb-muted">
                  Fresh Daily
                </div>
              </div>

              <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2.5rem] bg-gold-500/5 blur-2xl" />
            </div>

            <div>
              <div className="mb-4 inline-flex items-center gap-2 text-xs font-medium tracking-[0.3em] text-gold-300">
                <span className="h-px w-8 bg-gold-400" />
                OUR STORY
              </div>

              <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
                A taste of{" "}
                <span className="sb-text-gold">luxury</span> in every bite
              </h2>

              <p className="mt-6 text-base leading-relaxed sb-muted sm:text-lg">
                At Street Bar, we believe dessert is an experience. From silky
                premium crêpes and crisp bubble waffles to thick milkshakes,
                fresh juices, virgin mojitos, rich coffee, and indulgent ice
                cream — everything is prepared fresh every day using only
                quality ingredients.
              </p>

              <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {items.map((item) => (
                  <div
                    key={item.name}
                    className="sb-card sb-surface flex items-center gap-3 rounded-xl border sb-border px-4 py-3"
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-sm font-medium">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}