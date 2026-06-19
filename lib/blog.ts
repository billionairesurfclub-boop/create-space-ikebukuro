import fs from "fs";
import path from "path";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  lang: "ja" | "en";
  category: string;
  contentHtml: string;
};

const postsDir = path.join(process.cwd(), "content/blog");

export function getAllPosts(): Omit<Post, "contentHtml">[] {
  if (!fs.existsSync(postsDir)) return [];
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".json"));
  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(postsDir, file), "utf-8");
      const data = JSON.parse(raw);
      return {
        slug: data.slug,
        title: data.title,
        excerpt: data.excerpt,
        date: data.date,
        lang: data.lang,
        category: data.category,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(postsDir, `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as Post;
}
