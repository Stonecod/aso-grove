export type Home = {
  slug: string;
  title: string;
  price: string;
  area: string;
  beds: number;
  baths: number;
  summary: string;
};

export const homes: Home[] = [
  {
    slug: "maitama-court",
    title: "Maitama Court",
    price: "₦420,000,000",
    area: "Maitama",
    beds: 5,
    baths: 5,
    summary: "A quiet court house in Maitama, with a walled garden and staff quarters.",
  },
  {
    slug: "jabi-shore",
    title: "Jabi Shore",
    price: "₦185,000,000",
    area: "Jabi",
    beds: 4,
    baths: 4,
    summary: "A lake-facing terrace in Jabi, close to the mall and the expressway.",
  },
  {
    slug: "asokoro-house",
    title: "Asokoro House",
    price: "₦610,000,000",
    area: "Asokoro",
    beds: 6,
    baths: 6,
    summary: "A formal Asokoro residence on a large plot, set back from the road.",
  },
  {
    slug: "wuse-flat",
    title: "Wuse Flat",
    price: "₦95,000,000",
    area: "Wuse 2",
    beds: 3,
    baths: 3,
    summary: "A serviced flat in Wuse 2, suited to a small household.",
  },
  {
    slug: "gwarinpa-close",
    title: "Gwarinpa Close",
    price: "₦140,000,000",
    area: "Gwarinpa",
    beds: 4,
    baths: 4,
    summary: "A family close house in Gwarinpa, with parking for two cars.",
  },
];