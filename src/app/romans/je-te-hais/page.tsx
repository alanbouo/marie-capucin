import BookCoverSlideshow from "@/components/BookCoverSlideshow";

export default function JeTeHaisPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-serif text-center mb-12">Je te hais</h1>
      
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2">
          <BookCoverSlideshow
            frontCover="/images/je-te-hais-cover.jpg"
            backCover="/images/je-te-hais-back.jpg"
            alt="Je te hais - Marie Capucin"
          />
        </div>
        
        <div className="md:w-1/2 space-y-6 text-gray-700">
          <p className="font-semibold text-lg">
            Quand un homme meurt, emporte-t-il ses secrets avec lui ?
          </p>
          
          <p>
            Lorsque Iris assiste, sans émotion, aux funérailles de son père, elle pense 
            tourner définitivement la page d&apos;une relation brisée. Il faudra qu&apos;une femme au 
            regard trouble s&apos;évanouisse pour que s&apos;ouvrent à nouveau les blessures du passé.
          </p>
          
          <p>
            Au fil de révélations aussi bouleversantes qu&apos;inattendues, Iris devra 
            réinterroger toute son histoire familiale, ainsi que les liens douloureux qui 
            l&apos;unissaient à son père. Manipulations, trahisons, amour interdit : à Comté-les-
            Cabrons, tout le monde semble avoir quelque chose à se reprocher.
          </p>
          
          <p>
            <em>Je te hais</em> est un thriller émotionnel implacable, dans lequel chaque page 
            soulève de nouvelles interrogations. Que serez-vous prêts à accepter pour 
            découvrir toute la vérité ?
          </p>
          
          <p>
            Un roman noir et sensible, rythmé par les secrets de famille et les quêtes de 
            rédemption, qui fera naître chez vous l&apos;envie de tout dire... et de tout savoir.
          </p>
          
          <a 
            href="https://cerises-hiver.com/publications/je-te-hais" 
            className="inline-block bg-emerald-400 text-white px-6 py-3 rounded-md hover:bg-emerald-500 transition-colors"
          >
            Commander Je te hais
          </a>
        </div>
      </div>
      
      {/* YouTube Video Embed */}
      <div className="mt-12">
        <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/BKCw8Zpkwd0"
            title="Je te hais - Lecture"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
