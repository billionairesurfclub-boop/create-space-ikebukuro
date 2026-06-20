import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "ブログ | ぷらっとハウス白金台",
  description: "白金台・港区エリアの観光情報、ファミリー旅行のヒント、グループ旅行情報など。",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">ブログ</h1>
      <p className="text-gray-500 mb-12">白金台・港区エリアの観光情報・旅行ガイド</p>

      {posts.length === 0 ? (
        <p className="text-gray-400">記事はまだありません。</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <div className="border border-gray-100 rounded-2xl p-6 hover:shadow-md transition cursor-pointer">
                <span className="text-xs text-gray-400 mb-2 block">
                  {post.lang === "en" ? "🇬🇧 English" : "🇯🇵 日本語"} · {post.category}
                </span>
                <h2 className="font-bold text-gray-900 mb-2">{post.title}</h2>
                <p className="text-sm text-gray-500 line-clamp-2">{post.excerpt}</p>
                <p className="text-xs text-gray-300 mt-4">{post.date}</p>
              </div>
            </Link>
          ))}
        </div>
      )}

      <div className="mt-16 text-center">
        <Link href="/" className="text-sm text-gray-500 hover:text-gray-900">
          ← ホテルトップページへ
        </Link>
      </div>
    </div>
  );
}
