import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-12 mb-16">
        <div className="md:w-1/2">
          <div className="relative aspect-[2/3] w-full max-w-sm mx-auto rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/images/je-te-hais-cover.jpg"
              alt="Je te hais - Marie Capucin"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
        
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-gray-500 mb-2 uppercase tracking-wider text-sm">Nouveau roman</p>
          <h1 className="text-5xl font-serif text-emerald-400 mb-4">Je te hais</h1>
          <p className="text-xl text-gray-600 mb-6">de Marie Capucin</p>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Quand un homme meurt, emporte-t-il ses secrets avec lui ? 
            Un thriller émotionnel implacable où chaque page soulève de nouvelles interrogations.
          </p>
          <Link 
            href="/romans/je-te-hais"
            className="inline-block bg-emerald-400 text-white px-8 py-4 rounded-md hover:bg-emerald-500 transition-colors text-lg font-medium shadow-lg hover:shadow-xl"
          >
            Découvrir le roman
          </Link>
        </div>
      </section>

      {/* Author Message */}
      <section className="flex flex-col md:flex-row items-start gap-8 mb-16">
        <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src="/images/marie-capucin.jpg"
            alt="Marie Capucin"
            width={128}
            height={128}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="text-gray-700">
          <p className="mb-4">Chers lecteurs,</p>
          <p className="mb-4">
            Dans ce roman, il est question de ce qui nous lie, de ce qui nous blesse, 
            et de ce que l&apos;on tait souvent trop longtemps.
          </p>
          <p className="mb-4">
            Oubliez l&apos;amour tel que vous le connaissez et regardez le autrement, 
            là où il se fissure.
          </p>
          <p className="font-semibold text-right">MARIE CAPUCIN</p>
        </div>
      </section>

      {/* Books Preview */}
      <section className="text-center">
        <h2 className="text-3xl font-serif mb-8">Mes Romans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href="/romans/je-te-hais" className="group">
            <div className="relative w-full aspect-[2/3] mb-4 overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow bg-gray-100">
              <Image
                src="/images/je-te-hais-cover.jpg"
                alt="Je te hais"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="font-serif text-lg">Je te hais</h3>
          </Link>
          
          <Link href="/romans/tu-ne-seras-pas" className="group">
            <div className="relative w-full aspect-[2/3] mb-4 overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow bg-gray-100">
              <Image
                src="/images/tu-ne-seras-pas-cover.jpg"
                alt="Tu ne seras pas"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="font-serif text-lg">Tu ne seras pas</h3>
          </Link>
          
          <Link href="/romans/le-costume-de-soi" className="group">
            <div className="relative w-full aspect-[2/3] mb-4 overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow bg-gray-100">
              <Image
                src="/images/le-costume-de-soi-cover.jpg"
                alt="Le Costume de Soi"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="font-serif text-lg">Le Costume de Soi</h3>
          </Link>
        </div>
      </section>
    </div>
  );
}
