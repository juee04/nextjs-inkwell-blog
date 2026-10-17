export type Post = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
};

const posts: Post[] = [
  {
    slug: "nextjs-rendering",
    title: "Understanding Rendering in Next.js",
    category: "Web Development",
    date: "October 10, 2026",
    readTime: "4 min read",
    excerpt:
      "A practical introduction to static, dynamic, and revalidated pages in a modern web application.",
    content: [
      "Rendering turns application code and data into the page a visitor sees. Different strategies decide when that work happens.",
      "Static Site Generation creates HTML ahead of a request. It is useful for content that does not need to change on every visit, such as a blog index.",
      "Server-Side Rendering creates a page on the server for each request. It is useful when a response needs request-time information.",
      "Incremental Static Regeneration allows a static page to be refreshed after a configured interval.",
    ],
  },
  {
    slug: "react-server-components",
    title: "React Server Components",
    category: "React",
    date: "October 11, 2026",
    readTime: "3 min read",
    excerpt:
      "Learn how server components can load data on the server and reduce unnecessary client-side work.",
    content: [
      "React Server Components allow parts of a React application to render on the server. In the Next.js App Router, pages and layouts are Server Components by default.",
      "A Server Component can read data without sending that data-fetching logic to the browser. This is useful for content-heavy pages.",
      "Client Components remain useful for state, click handlers, and browser-only APIs. A practical application often uses both.",
    ],
  },
  {
    slug: "website-performance",
    title: "Measuring Website Performance with TTFB",
    category: "Performance",
    date: "October 12, 2026",
    readTime: "3 min read",
    excerpt:
      "Use Time to First Byte as one signal when comparing server rendering approaches.",
    content: [
      "Time to First Byte (TTFB) measures the time from starting a request until the first byte of the response arrives.",
      "TTFB is affected by server work, network conditions, caching, and the test environment. One result is not enough for a strong conclusion.",
      "For a fair comparison, measure the same routes repeatedly in a production build and report actual values and test conditions.",
    ],
  },
];
export async function getPosts(): Promise<Post[]> {
  return posts;
}
export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  return posts.find((post) => post.slug === slug);
}
