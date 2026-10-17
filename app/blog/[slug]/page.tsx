import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getPosts } from "@/lib/posts";
export const revalidate = 60;
export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((p) => ({ slug: p.slug }));
}
export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();
  return (
    <main className="shell">
      <nav>
        <Link className="brand" href="/">
          inkwell<span>.</span>
        </Link>
        <div>
          <Link href="/blog">All articles</Link>
          <Link className="pill" href="/dashboard">
            Dashboard ↗
          </Link>
        </div>
      </nav>
      <article className="article">
        <Link className="muted" href="/blog">
          ← Back to all articles
        </Link>
        <p className="eyebrow">{post.category} · ISR</p>
        <h1>{post.title}</h1>
        <p className="intro">{post.excerpt}</p>
        <div className="meta">
          {post.date} · {post.readTime}
        </div>
        {post.content.map((para, i) => (
          <p className="body-copy" key={i}>
            {para}
          </p>
        ))}
        <aside>
          <b>Rendering strategy:</b> Incremental Static Regeneration (ISR). This
          route revalidates after 60 seconds.
        </aside>
      </article>
      <footer>
        INKWELL JOURNAL <Link href="/blog">More articles ↑</Link>
      </footer>
    </main>
  );
}
