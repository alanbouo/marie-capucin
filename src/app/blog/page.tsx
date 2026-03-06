import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-serif text-center mb-12">Blog</h1>
      
      {posts.length === 0 ? (
        <p className="text-center text-gray-600">
          Aucun article pour le moment. Revenez bientôt !
        </p>
      ) : (
        <div className="space-y-12">
          {posts.map((post) => (
            <article key={post.slug} className="border-b pb-8">
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-xl font-semibold hover:text-emerald-500 transition-colors">
                  {post.title}
                </h2>
              </Link>
              <p className="text-sm text-gray-500 mt-1">
                {post.date && format(new Date(post.date), "dd/MM/yyyy", { locale: fr })}
              </p>
              <p className="text-gray-700 mt-4">{post.excerpt}</p>
              {post.audioUrl && (
                <div className="mt-4">
                  <audio controls className="w-full">
                    <source src={post.audioUrl} type="audio/mpeg" />
                    Votre navigateur ne supporte pas l&apos;élément audio.
                  </audio>
                </div>
              )}
              <Link 
                href={`/blog/${post.slug}`}
                className="inline-block mt-4 text-emerald-500 hover:text-emerald-600"
              >
                Lire la suite →
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
