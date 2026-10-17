import Link from "next/link";
export default function NotFound() {
  return (
    <main className="shell notfound">
      <p className="eyebrow">404 · PAGE NOT FOUND</p>
      <h1>
        This page went <em>off-script.</em>
      </h1>
      <p>We could not find that article.</p>
      <Link className="button" href="/blog">
        Back to the blog ↗
      </Link>
    </main>
  );
}
