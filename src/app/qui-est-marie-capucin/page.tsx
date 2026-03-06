import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-serif text-center mb-12">Qui est Marie Capucin ?</h1>
      
      <div className="flex justify-center mb-8">
        <div className="w-48 h-48 rounded-full overflow-hidden">
          <Image
            src="/images/marie-capucin.jpg"
            alt="Marie Capucin"
            width={192}
            height={192}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      
      <div className="prose prose-lg mx-auto text-gray-700 space-y-4">
        <p>
          <strong>Marie Capucin</strong> est née en 1988. Après des études littéraires et une formation à 
          l&apos;École Supérieure de Journalisme de Lille, elle choisit de faire des mots son métier.
        </p>
        
        <p>
          C&apos;est en 2019, à la suite d&apos;un événement de santé marquant, qu&apos;elle ose enfin 
          partager ses textes avec le grand public.
        </p>
        
        <p>
          Son premier roman, <em>Le Costume de Soi</em>, publié en 2022, posait déjà les bases 
          d&apos;une écriture à la fois sensible et profonde, marquée par une quête d&apos;identité.
        </p>
        
        <p>
          Romancière, épouse et mère de trois enfants, elle connaît les tensions intimes 
          et sociales que vivent les femmes d&apos;aujourd&apos;hui, sujet qu&apos;elle explore dans son 
          deuxième roman <em>Tu ne seras pas</em>.
        </p>
        
        <p>
          Avec son troisième roman, <em>Je te hais</em>, elle plonge dans les zones d&apos;ombre de la 
          mémoire et des secrets familiaux, en mêlant émotion et tension psychologique.
        </p>
        
        <p>
          Chaque livre de Marie Capucin est une plongée dans l&apos;intime, une exploration 
          lucide de ce qui blesse, ce qui libère, et ce qui lie les êtres.
        </p>
      </div>
    </div>
  );
}
