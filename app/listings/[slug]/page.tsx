import Link from "next/link";
import { notFound } from "next/navigation";
import { client } from "@/lib/sanity";

type Listing = {
  title: string;
  price: string;
  area: string;
  beds: number;
  baths: number;
  summary: string;
};

export default async function HomeDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const home = await client.fetch<Listing | null>(
    `*[_type == "listing" && slug.current == $slug][0] {
      title,
      price,
      area,
      beds,
      baths,
      summary
    }`,
    { slug }
  );

  if (!home) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-6 pb-16">
      <Link href="/listings" className="mt-8 inline-block text-sm text-[var(--muted)]">
        Back to listings
      </Link>
      <div className="mt-6 h-72 bg-[var(--stone)]" />
      <h1 className="mt-8 text-4xl text-[var(--green)]">{home.title}</h1>
      <p className="mt-3 text-2xl">{home.price}</p>
      <p className="mt-2 text-[var(--muted)]">
        {home.beds} beds · {home.baths} baths · {home.area}, Abuja
      </p>
      <p className="mt-6 text-lg">{home.summary}</p>
      <Link
        href="/contact"
        className="mt-8 inline-block bg-[var(--green)] px-5 py-3 text-sm text-[#f7f4ee]"
      >
        Enquire
      </Link>
    </main>
  );
}