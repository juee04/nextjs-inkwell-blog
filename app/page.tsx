import Link from "next/link";
export default function HomePage() {
  return (
    <main className="shell">
      <nav>
        <Link className="brand" href="/">
          inkwell<span>.</span>
        </Link>
        <div>
          <Link href="/blog">Read the blog</Link>
          <Link className="pill" href="/dashboard">
            Demo dashboard ↗
          </Link>
        </div>
      </nav>
      <section className="hero">
        <p className="eyebrow">A NEXT.JS RENDERING LAB</p>
        <h1>
          Ideas worth
          <br />
          <em>thinking about.</em>
        </h1>
        <p className="intro">
          A small editorial blog built to explore how modern web pages are
          rendered, refreshed, and delivered to the browser.
        </p>
        <Link className="button" href="/blog">
          Explore articles ↗
        </Link>
        <p className="muted">Built with the Next.js App Router</p>
      </section>
      <section className="features">
        <article>
          <small>01</small>
          <h2>Static by default</h2>
          <p>Serve content quickly with pre-rendered pages.</p>
        </article>
        <article>
          <small>02</small>
          <h2>Fresh when needed</h2>
          <p>Refresh selected pages with incremental regeneration.</p>
        </article>
        <article>
          <small>03</small>
          <h2>Dynamic on demand</h2>
          <p>Render request-specific content on the server.</p>
        </article>
      </section>
      <footer>
        INKWELL JOURNAL <span>Learning the web, one page at a time.</span>
      </footer>
    </main>
  );
}
