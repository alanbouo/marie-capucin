import BookCoverSlideshow from "@/components/BookCoverSlideshow";

export default function LeCostumeDeSoiPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-serif text-center mb-12">Le Costume de Soi</h1>
      
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2">
          <BookCoverSlideshow
            frontCover="/images/le-costume-de-soi-cover.jpg"
            backCover="/images/le-costume-de-soi-back.jpg"
            alt="Le Costume de Soi - Marie Capucin"
          />
        </div>
        
        <div className="md:w-1/2 space-y-6 text-gray-700">
          <p>
            <em>Le Costume de Soi</em> est mon premier roman. Il s&apos;agit d&apos;un roman 
            d&apos;aventure publié en 2022.
          </p>
          
          <p>
            Il est disponible sur commande dans toutes les librairies et vous pouvez 
            également le commander sur le site des Éditions Cerises d&apos;Hiver.
          </p>
          
          <a 
            href="https://cerises-hiver.com/publications/le-costume-de-soi" 
            className="inline-block bg-emerald-400 text-white px-6 py-3 rounded-md hover:bg-emerald-500 transition-colors"
          >
            Commander Le Costume de Soi
          </a>
        </div>
      </div>
    </div>
  );
}
