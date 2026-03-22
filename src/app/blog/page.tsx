import { posts } from "@/lib/blog";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CBD Blog | AquaCBD — Water Soluble CBD UK",
  description:
    "Expert guides on water soluble CBD, bioavailability, Colorado sourcing, and how to get the most from your CBD. Written by AquaCBD.",
};

const categoryColours: Record<string, string> = {
  Education: "bg-blue-50 text-blue-700",
  Sourcing: "bg-green-50 text-green-700",
  Science: "bg-purple-50 text-purple-700",
  Guide: "bg-orange-50 text-orange-700",
};

export default function BlogPage() {
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
            <Link href="/blog" className="text-gray-900 font-semibold">Blog</Link>
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

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4" style={{ color: "#1b4332" }}>CBD Blog</h1>
          <p className="text-gray-500 text-lg">
            Everything you need to know about water soluble CBD, bioavailability, and getting the most from your CBD.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group border border-gray-200 rounded-2xl p-6 hover:border-gray-300 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColours[post.category] || "bg-gray-100 text-gray-600"}`}>
                  {post.category}
                </span>
                <span className="text-xs text-gray-400">{post.readTime}</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1b4332] transition-colors leading-snug">
                {post.title}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{post.description}</p>
              <span className="text-sm font-semibold" style={{ color: "#1b4332" }}>
                Read article →
              </span>
            </Link>
          ))}
        </div>
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
