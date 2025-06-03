"use client";

import Link from "next/link";

export default function CardsPage() {
  const cards = [
    {
      title: "Refrigerator Repair Guide",
      slug: "refrigerator-repair-guide",
      
      image:
        "https://5.imimg.com/data5/SELLER/Default/2022/2/GE/JW/SY/25289616/front-loading-washing-machine-repair-service.png",
      description:
        "A comprehensive guide to fixing common fridge issues efficiently.",
    },
    {
      title: "Air Conditioner Maintenance Tips",
      slug: "air-conditioner-maintenancec-tips",
      image:
        "https://i.ytimg.com/vi/XRYjFJa6HEI/hq720.jpg",
      description:
        "Learn to keep your AC running smoothly with expert tips.",
    },
    {
      title: "Washing Machine Troubleshooting",
      slug: "washing-machine-troubleshooting",
      image:
        "https://automaticlaundry.com/wp-content/uploads/sites/2/2019/09/machine.jpg",
      description:
        "Fix your washing machine issues step-by-step at home.",
    },
    {
      title: "Microwave Oven Safety Practices",
      slug: "microwave-oven-safety-practices",
      image:
        "https://www.glotechrepairs.co.uk/news/wp-content/uploads/2018/09/1.jpg",
      description:
        "Use your microwave safely and avoid common hazards.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-10">Our Repair Guides</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {cards.map((card, index) => (
          <Link href={`/blog/blogdetels/${card.slug}/`} key={index}>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-3">{card.title}</h2>
                <p className="text-gray-700">{card.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
