import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aso Grove",
  description: "Homes across Abuja.",
};

const links = [
  { href: "/listings", label: "Listings" },
  { href: "/agents", label: "Agents" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <Link href="/" className="text-lg tracking-wide text-[var(--green)]">
            Aso Grove
          </Link>
          <nav className="flex gap-6 text-sm">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="text-[var(--ink)]">
                {link.label}
              </Link>
            ))}
          </nav>
        </header>
        {children}
        <footer className="mx-auto max-w-6xl px-6 py-10 text-sm text-[var(--muted)]">
          Aso Grove · Abuja
        </footer>
      </body>
    </html>
  );
}