import Link from "next/link";
import { homes } from "@/lib/homes";

export default function ListingsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-16">
      <h1 className="py-10 text-4xl text-[var(--green)]">Listings</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {homes.map((home) => (
          <Link
            key={home.slug}
            href={`/listings/${home.slug}`}
            className="border border-[var(--stone)] p-4"
          >
            <div className="mb-4 h-40 bg-[var(--stone)]" />
            <h2 className="text-xl">{home.title}</h2>
            <p className="mt-2 text-[var(--green)]">{home.price}</p>
            <p className="text-sm text-[var(--muted)]">
              {home.beds} beds · {home.area}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}