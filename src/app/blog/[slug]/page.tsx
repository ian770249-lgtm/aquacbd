import { posts, getPost, getAllSlugs } from "@/lib/blog";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | AquaCBD Blog`,
    description: post.description,
    alternates: {
      canonical: `https://www.watersolublecbd.co.uk/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://www.watersolublecbd.co.uk/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
    },
  };
}

function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={key++} className="text-2xl font-bold mt-10 mb-4" style={{ color: "#1b4332" }}>
          {line.replace("## ", "")}
        </h2>
      );
    } else if (line.startsWith("**") && line.endsWith("**") && !line.slice(2, -2).includes("**")) {
      elements.push(
        <p key={key++} className="font-semibold text-gray-800 mt-4 mb-2">
          {line.slice(2, -2)}
        </p>
      );
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={key++} className="ml-6 text-gray-600 leading-relaxed list-disc">
          {renderInline(line.replace("- ", ""))}
        </li>
      );
    } else {
      elements.push(
        <p key={key++} className="text-gray-600 leading-relaxed mb-4">
          {renderInline(line)}
        </p>
      );
    }
  }
  return elements;
}

function renderInline(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="font-semibold text-gray-800">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const otherPosts = posts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1">
            <span className="text-2xl font-bold" style={{ color: "#1b4332" }}>Aqua</span>
            <span className="text-2xl font-bold" style={{ color: "#48cae4" }}>CBD</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <Link href="/#why-water-soluble" className="hover:text-gray-900 transition-colors">Why Water Soluble</Link>
            <Link href="/#colorado" className="hover:text-gray-900 transition-colors">Our Source</Link>
            <Link href="/blog" className="hover:text-gray-900 transition-colors">Blog</Link>
            <Link href="/#faq" className="hover:text-gray-900 transition-colors">FAQ</Link>
          </nav>
          <Link
            href="/#waitlist"
            className="text-sm font-semibold px-4 py-2 rounded-full text-white"
            style={{ backgroundColor: "#1b4332" }}
          >
            Join Waitlist
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-gray-600">Blog</Link>
          <span>/</span>
          <span className="text-gray-600">{post.category}</span>
        </div>

        {/* Article header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-green-50 text-green-700">
              {post.category}
            </span>
            <span className="text-xs text-gray-400">{post.readTime}</span>
            <span className="text-xs text-gray-400">
              {new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4" style={{ color: "#1b4332" }}>
            {post.title}
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed">{post.description}</p>
        </div>

        <hr className="border-gray-200 mb-10" />

        {/* Article content */}
        <article className="prose-custom">
          {renderContent(post.content)}
        </article>

        {/* CTA */}
        <div className="mt-16 p-8 rounded-2xl text-center text-white" style={{ backgroundColor: "#1b4332" }}>
          <h3 className="text-2xl font-bold mb-3">Ready to Try Water Soluble CBD?</h3>
          <p className="text-white/70 mb-6">
            AquaCBD is launching soon. Join the waitlist for early access and launch pricing.
          </p>
          <Link
            href="/#waitlist"
            className="inline-block font-semibold px-6 py-3 rounded-full transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#48cae4", color: "#1b4332" }}
          >
            Join the Waitlist
          </Link>
        </div>

        {/* Related posts */}
        {otherPosts.length > 0 && (
          <div className="mt-16">
            <h3 className="text-xl font-bold mb-6 text-gray-900">More Articles</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {otherPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="border border-gray-200 rounded-xl p-5 hover:border-gray-300 hover:shadow-sm transition-all group"
                >
                  <p className="text-xs text-gray-400 mb-2">{p.category} · {p.readTime}</p>
                  <h4 className="font-semibold text-gray-900 group-hover:text-[#1b4332] transition-colors leading-snug">
                    {p.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer style={{ backgroundColor: "#1b4332" }} className="text-white mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="text-xl font-bold mb-1">
              <span>Aqua</span><span style={{ color: "#48cae4" }}>CBD</span>
            </div>
            <p className="text-white/50 text-sm">Premium water soluble CBD. Coming soon to the UK.</p>
          </div>
          <p className="text-white/40 text-sm">© {new Date().getFullYear()} AquaCBD. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
