import { useEffect, useMemo, useState } from "react";
import { MessageCircle, Search, X } from "lucide-react";
import { categories, WHATSAPP_URL, type Category } from "../data";
import { useReveal, useBodyScrollLock } from "../hooks/useReveal";

function orderLink(productName: string, price: number) {
  const msg = encodeURIComponent(
    `Hello Street Bar! I'd like to order: ${productName} (${price} MAD).`
  );

  return `${WHATSAPP_URL}?text=${msg}`;
}

function ProductCard({
  name,
  price,
  image,
}: {
  name: string;
  price: number;
  image: string;
}) {
  return (
    <div className="sb-card sb-surface group overflow-hidden rounded-2xl border sb-border">
      <div className="sb-img-zoom relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          width={400}
          height={300}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />

        <div className="absolute bottom-3 left-3 rounded-full sb-glass px-3 py-1 text-xs font-semibold text-gold-200">
          {price} MAD
        </div>
      </div>

      <div className="p-4">
        <h4 className="font-display text-base font-semibold leading-snug">
          {name}
        </h4>

        <a
          href={orderLink(name, price)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex items-center justify-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/5 py-2.5 text-xs font-semibold tracking-wide text-gold-200 transition-all hover:bg-gold-400/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
        >
          <MessageCircle className="h-4 w-4" />
          Order
        </a>
      </div>
    </div>
  );
}

export default function Menu() {
  const { ref, visible } = useReveal();

  const [active, setActive] = useState("all");
  const [query, setQuery] = useState("");
  const [openCategory, setOpenCategory] = useState<Category | null>(null);

  useBodyScrollLock(openCategory !== null);

  useEffect(() => {
    if (openCategory === null) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenCategory(null);
      }
    };

    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, [openCategory]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return categories
      .filter((category) => active === "all" || category.id === active)
      .map((category) => ({
        ...category,
        products: category.products.filter((product) =>
          product.name.toLowerCase().includes(q)
        ),
      }))
      .filter((category) => category.products.length > 0);
  }, [active, query]);

  return (
    <section id="menu" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div
          ref={ref}
          className={`sb-reveal ${visible ? "sb-in" : ""} text-center`}
        >
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-medium tracking-[0.3em] text-gold-300">
            <span className="h-px w-8 bg-gold-400" />
            OUR MENU
            <span className="h-px w-8 bg-gold-400" />
          </div>

          <h2 className="font-display text-4xl font-bold sm:text-5xl">
            Explore our <span className="sb-text-gold">delights</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl sb-muted">
            Browse by category or search for your favourite treat. Tap a
            category to see every product and order straight to WhatsApp.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-md">
          <div className="sb-glass flex items-center gap-3 rounded-full px-5 py-3.5">
            <Search className="h-5 w-5 sb-muted" />

            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search crêpes, milkshakes, mojitos…"
              aria-label="Search menu items"
              className="w-full bg-transparent text-sm outline-none placeholder:text-ink-400"
            />

            {query && (
              <button
                onClick={() => setQuery("")}
                aria-label="Clear search"
              >
                <X className="h-4 w-4 sb-muted hover:text-gold-300" />
              </button>
            )}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2.5">
          <button
            onClick={() => setActive("all")}
            className={`rounded-full border px-5 py-2 text-sm font-medium transition-all ${
              active === "all"
                ? "border-gold-400 bg-gold-400/15 text-gold-200"
                : "border-white/10 sb-muted hover:border-gold-400/40 hover:text-gold-200"
            }`}
          >
            All
          </button>

          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActive(category.id)}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition-all ${
                active === category.id
                  ? "border-gold-400 bg-gold-400/15 text-gold-200"
                  : "border-white/10 sb-muted hover:border-gold-400/40 hover:text-gold-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((category) => (
            <button
              key={category.id}
              onClick={() => setOpenCategory(category)}
              aria-label={`View ${category.name} products`}
              className="sb-card sb-surface group relative overflow-hidden rounded-2xl border sb-border text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
            >
              <div className="sb-img-zoom relative aspect-[16/10] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  loading="lazy"
                  width={640}
                  height={400}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/30 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-display text-xl font-bold text-white">
                  {category.name}
                </h3>

                <p className="mt-1 text-xs sb-muted">
                  {category.tagline}
                </p>

                <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-gold-200">
                  View {category.products.length} items
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-16 text-center sb-muted">
            No products found. Try a different search.
          </p>
        )}
      </div>

      {openCategory && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-ink-950/80 p-4 backdrop-blur-sm sb-fade-in"
          onClick={() => setOpenCategory(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${openCategory.name} products`}
        >
          <div
            className="sb-scale-in sb-surface relative max-h-[85vh] w-full max-w-4xl overflow-y-auto rounded-3xl border sb-border p-6 sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={() => setOpenCategory(null)}
              className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full border sb-border sb-muted hover:text-gold-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <h3 className="font-display text-3xl font-bold sb-text-gold">
              {openCategory.name}
            </h3>

            <p className="mt-1 text-sm sb-muted">
              {openCategory.tagline}
            </p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {openCategory.products.map((product) => (
                <ProductCard
                  key={product.name}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}