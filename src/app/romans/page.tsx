import Image from "next/image";
import Link from "next/link";

const romans = [
  {
    slug: "je-te-hais",
    title: "Je te hais",
    cover: "/images/je-te-hais-cover.jpg",
  },
  {
    slug: "tu-ne-seras-pas",
    title: "Tu ne seras pas",
    cover: "/images/tu-ne-seras-pas-cover.jpg",
  },
  {
    slug: "le-costume-de-soi",
    title: "Le Costume de Soi",
    cover: "/images/le-costume-de-soi-cover.jpg",
  },
];

export default function RomansPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-serif text-center mb-12">Romans</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {romans.map((roman) => (
          <Link key={roman.slug} href={`/romans/${roman.slug}`} className="group">
            <div className="relative aspect-[2/3] mb-4 overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow bg-gray-100">
              <Image
                src={roman.cover}
                alt={roman.title}
                fill
                className="object-contain"
              />
            </div>
            <h2 className="font-serif text-lg text-center">{roman.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
