import Link from "next/link";

const homes = [
  { slug: "maitama-court", title: "Maitama Court", price: "₦420,000,000", area: "Maitama", beds: 5 },
  { slug: "jabi-shore", title: "Jabi Shore", price: "₦185,000,000", area: "Jabi", beds: 4 },
  { slug: "asokoro-house", title: "Asokoro House", price: "₦610,000,000", area: "Asokoro", beds: 6 },
];

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-16">
      <section className="grid items-center gap-10 py-16 md:grid-cols-2">
        <div>
          <p className="text-sm tracking-widest text-[var(--green)]">ABUJA</p>
          <h1 className="mt-3 text-5xl text-[var(--green)]">Aso Grove</h1>
          <p className="mt-4 max-w-md text-xl text-[var(--muted)]">
            Homes across Maitama, Asokoro, Jabi, Wuse, and Gwarinpa.
          </p>
          <Link
            href="/listings"
            className="mt-8 inline-block bg-[var(--green)] px-5 py-3 text-sm text-[#f7f4ee]"
          >
            Explore properties
          </Link>
        </div>
        <div className="h-80 rounded-md bg-[var(--stone)]" />
      </section>

      <section>
        <h2 className="text-2xl text-[var(--green)]">Featured homes</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {homes.map((home) => (
            <Link key={home.slug} href={`/listings/${home.slug}`} className="border border-[var(--stone)] p-4">
              <div className="mb-4 h-40 bg-[var(--stone)]" />
              <h3 className="text-xl">{home.title}</h3>
              <p className="mt-2 text-[var(--green)]">{home.price}</p>
              <p className="text-sm text-[var(--muted)]">
                {home.beds} beds · {home.area}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}