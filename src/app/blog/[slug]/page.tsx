import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article non trouvé" };
  return {
    title: `${post.title} - Marie Capucin`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Link href="/blog" className="text-emerald-500 hover:text-emerald-600 mb-8 inline-block">
        ← Retour au blog
      </Link>
      
      <article>
        <h1 className="text-4xl font-serif mb-4">{post.title}</h1>
        <p className="text-gray-500 mb-8">
          {post.date && format(new Date(post.date), "dd MMMM yyyy", { locale: fr })}
        </p>
        
        {post.audioUrl && (
          <div className="mb-8 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">🎧 Écouter l&apos;épisode :</p>
            <audio controls className="w-full">
              <source src={post.audioUrl} type="audio/mpeg" />
              Votre navigateur ne supporte pas l&apos;élément audio.
            </audio>
          </div>
        )}
        
        <div className="prose prose-lg max-w-none">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </div>
  );
}
