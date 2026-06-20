import { getPostBySlug, getAllPosts } from "@/lib/blog";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | ぷらっとハウス白金台`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <Link href="/blog" className="text-sm text-gray-400 hover:text-gray-700 mb-8 block">
        ← ブログ一覧へ
      </Link>
      <span className="text-xs text-gray-400">{post.lang === "en" ? "🇬🇧 English" : "🇯🇵 日本語"} · {post.category}</span>
      <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-4">{post.title}</h1>
      <p className="text-xs text-gray-300 mb-10">{post.date}</p>
      <div
        className="prose prose-gray max-w-none text-gray-700 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
      <div className="mt-16 bg-gray-900 text-white rounded-2xl p-8 text-center">
        <p className="font-bold text-lg mb-2">ぷらっとハウス白金台</p>
        <p className="text-gray-400 text-sm mb-6">白金台駅 徒歩2分・一棟貸し切り・最大11名</p>
        <a
          href="https://beds24.com/booking.php?propid=305756&referer=BookingLink"
          className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition"
        >
          空室を確認して予約する
        </a>
      </div>
    </div>
  );
}
