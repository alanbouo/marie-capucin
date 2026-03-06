import BookCoverSlideshow from "@/components/BookCoverSlideshow";

export default function TuNeSerasPasPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-serif text-center mb-12">Tu ne seras pas</h1>
      
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2">
          <BookCoverSlideshow
            frontCover="/images/tu-ne-seras-pas-cover.jpg"
            backCover="/images/tu-ne-seras-pas-back.jpg"
            alt="Tu ne seras pas - Marie Capucin"
          />
        </div>
        
        <div className="md:w-1/2 space-y-6 text-gray-700">
          <p>
            Alicia semble tout avoir : une famille aimante, une carrière prometteuse et des 
            projets arrêtés. Peut-elle obtenir plus ? Peut-elle rêver plus grand ? Que dit ce 
            mal de tête qui la terrasse sans préavis et lui intime l&apos;ordre de ralentir ?
          </p>
          
          <p>
            Au travers du défi inattendu de la maladie, la façade lisse et brillante de son 
            quotidien huilé se fissure et laisse entrevoir les ombres du passé et les peurs 
            les plus vives.
          </p>
          
          <p>
            Emportée par un maelstrom d&apos;émotions, de découvertes déroutantes et de décisions 
            cruciales, Alicia, pourtant mue par des forces insoupçonnées, s&apos;interroge et peu 
            à peu se perd dans un mensonge emprisonnant.
          </p>
          
          <p>
            Mentir est-il une issue acceptable pour protéger ceux que nous aimons ? Peut-on 
            échapper à ce que la vie semble avoir prévu pour nous ?
          </p>
          
          <p>
            <em>« Tu ne seras pas »</em> est une immersion intime dans la transformation d&apos;une 
            femme ordinaire, un voyage introspectif qui sonde le lecteur sur sa propre quête 
            d&apos;authenticité. Alicia incarne les espoirs et les doutes qui, sans cesse, nous 
            habitent. Qui seriez-vous si le monde dont vous pensiez maîtriser les règles 
            s&apos;effondrait ?
          </p>
          
          <p>
            Plongez dans cette exploration fascinante du soi, des limites que nous nous 
            imposons et du chemin que nous empruntons pour cerner notre véritable essence.
          </p>
          
          <a 
            href="https://cerises-hiver.com/publications/tu-ne-seras-pas" 
            className="inline-block bg-emerald-400 text-white px-6 py-3 rounded-md hover:bg-emerald-500 transition-colors"
          >
            Commander Tu ne seras pas
          </a>
        </div>
      </div>
      {/* YouTube Video Embed */}
      <div className="mt-12">
        <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/btGYnlenFso"
            title="Tu ne seras pas - Lecture"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
