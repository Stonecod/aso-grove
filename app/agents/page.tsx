import Link from "next/link";

const agents = [
  {
    name: "Amina Yusuf",
    area: "Maitama and Asokoro",
    phone: "+234 803 000 1101",
  },
  {
    name: "Tunde Okeke",
    area: "Jabi and Wuse 2",
    phone: "+234 803 000 1102",
  },
  {
    name: "Hauwa Bello",
    area: "Gwarinpa",
    phone: "+234 803 000 1103",
  },
];

export default function AgentsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-16">
      <h1 className="py-10 text-4xl text-[var(--green)]">Agents</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {agents.map((agent) => (
          <article key={agent.name} className="border border-[var(--stone)] p-5">
            <div className="mb-4 h-16 w-16 rounded-full bg-[var(--stone)]" />
            <h2 className="text-xl">{agent.name}</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">{agent.area}</p>
            <p className="mt-4">{agent.phone}</p>
            <Link href="/contact" className="mt-4 inline-block text-sm text-[var(--green)]">
              Request this agent
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}