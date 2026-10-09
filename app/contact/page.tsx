export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-16">
      <h1 className="py-10 text-4xl text-[var(--green)]">Contact</h1>
      <p className="text-lg">Enquire about a house, or ask for an agent.</p>
      <form className="mt-8 grid gap-4">
        <input
          name="name"
          placeholder="Name"
          className="border border-[var(--stone)] bg-transparent px-4 py-3"
        />
        <input
          name="phone"
          placeholder="Phone"
          className="border border-[var(--stone)] bg-transparent px-4 py-3"
        />
        <textarea
          name="message"
          placeholder="Which house, and when can you view?"
          rows={5}
          className="border border-[var(--stone)] bg-transparent px-4 py-3"
        />
        <button
          type="button"
          className="w-fit bg-[var(--green)] px-5 py-3 text-sm text-[#f7f4ee]"
        >
          Send enquiry
        </button>
      </form>
      <p className="mt-8 text-sm text-[var(--muted)]">
        Aso Grove desk · Maitama, Abuja · +234 803 000 1100
      </p>
    </main>
  );
}