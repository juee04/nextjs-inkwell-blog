import Link from "next/link";
export const dynamic = "force-dynamic";
export default function DashboardPage() {
  const generatedAt = new Intl.DateTimeFormat("en-IN", {
    dateStyle: "full",
    timeStyle: "medium",
    timeZone: "Asia/Kolkata",
  }).format(new Date());
  return (
    <main className="shell">
      <nav>
        <Link className="brand" href="/">
          inkwell<span>.</span>
        </Link>
        <div>
          <Link href="/blog">Blog</Link>
          <Link className="pill" href="/">
            Home ↗
          </Link>
        </div>
      </nav>
      <header className="heading">
        <p className="eyebrow">SERVER RENDERED · SSR</p>
        <h1>
          Your <em>dashboard.</em>
        </h1>
        <p>
          This demonstration page is rendered dynamically on the server for each
          request.
        </p>
      </header>
      <section className="metrics">
        <article>
          <small>ARTICLES PUBLISHED</small>
          <strong>03</strong>
          <p>Sample articles in local data</p>
        </article>
        <article>
          <small>RENDER MODE</small>
          <strong>SSR</strong>
          <p>Forced dynamic rendering</p>
        </article>
        <article>
          <small>SERVER TIME</small>
          <strong className="time">{generatedAt}</strong>
          <p>Generated when this request was handled</p>
        </article>
      </section>
      <aside>
        <b>Rendering strategy:</b> Server-Side Rendering (SSR), enabled by{" "}
        <code>dynamic = "force-dynamic"</code>. Classroom demo only; not an
        authenticated dashboard.
      </aside>
      <footer>
        INKWELL JOURNAL <Link href="/blog">Read the blog ↑</Link>
      </footer>
    </main>
  );
}
