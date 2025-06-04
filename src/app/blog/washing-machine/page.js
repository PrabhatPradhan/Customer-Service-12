"use client";
import Link from "next/link";
import Image from "next/image";

export default function WashingMachineCards() {
  const cards = [
    {
      title: "Front Load Washing Machine Maintenance",
      slug: "front-load-maintenance",
      image:
        "https://images.unsplash.com/photo-1604882351565-34c3e6c4f935?auto=format&fit=crop&w=800&q=80",
      description:
        "Discover essential maintenance tips for front-load washing machines. Learn how to prevent mold, improve washing efficiency, and keep your appliance running longer with proper care routines.",
    },
    {
      title: "Top 5 Washing Machine Issues and Fixes",
      slug: "top-issues-and-fixes",
      image:
        "https://images.unsplash.com/photo-1622630794787-7ae1227d7720?auto=format&fit=crop&w=800&q=80",
      description:
        "From drainage problems to spinning failures, this guide helps you identify and fix the most common washing machine issues without needing a technician.",
    },
    {
      title: "Energy-Efficient Washing Machines in 2025",
      slug: "energy-efficient-washers-2025",
      image:
        "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?auto=format&fit=crop&w=800&q=80",
      description:
        "Explore the most energy-efficient washing machines of 2025. We cover features, pros, cons, and tips to save electricity and water with smart laundry choices.",
    },
    {
      title: "Washing Machine Buying Guide",
      slug: "washing-machine-buying-guide",
      image:
        "https://images.unsplash.com/photo-1629391880949-6dbca3cc0d46?auto=format&fit=crop&w=800&q=80",
      description:
        "Not sure which washing machine to buy? This detailed guide compares top brands, types (top-load vs front-load), capacities, and features to help you make the right choice.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-10">Washing Machine Guides</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {cards.map((card) => (
          <Link
            href={`/blog/washing-machine/${card.slug}`}
            key={card.slug}
            className="block"
          >
            <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer">
              <div className="relative w-full h-56">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-2xl font-semibold mb-3">{card.title}</h2>
                  <p className="text-gray-700 mb-4">{card.description}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
