import Link from "next/link";
import { getPosts } from "@/lib/posts";
export const dynamic = "force-static";
export default async function BlogPage() {
  const posts = await getPosts();
  return (
    <main className="shell">
      <nav>
        <Link className="brand" href="/">
          inkwell<span>.</span>
        </Link>
        <div>
          <Link href="/">Home</Link>
          <Link className="pill" href="/dashboard">
            Demo dashboard ↗
          </Link>
        </div>
      </nav>
      <header className="heading">
        <p className="eyebrow">THE JOURNAL · SSG</p>
        <h1>
          Latest <em>thinking.</em>
        </h1>
        <p>All articles in this listing are rendered as a static page.</p>
      </header>
      <section className="cards">
        {posts.map((p, i) => (
          <article className="card" key={p.slug}>
            <small>
              {p.category} <span>0{i + 1}</span>
            </small>
            <h2>
              <Link href={`/blog/${p.slug}`}>{p.title}</Link>
            </h2>
            <p>{p.excerpt}</p>
            <div className="meta">
              {p.date} · {p.readTime}
            </div>
            <Link className="read" href={`/blog/${p.slug}`}>
              Read article ↗
            </Link>
          </article>
        ))}
      </section>
      <aside>
        <b>Rendering strategy:</b> Static Site Generation (SSG), configured with{" "}
        <code>dynamic = "force-static"</code>.
      </aside>
      <footer>
        INKWELL JOURNAL <Link href="/">Back home ↑</Link>
      </footer>
    </main>
  );
}
