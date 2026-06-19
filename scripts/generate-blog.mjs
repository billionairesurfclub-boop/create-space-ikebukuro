/**
 * ブログ記事自動生成スクリプト
 * 使い方: node scripts/generate-blog.mjs
 */

import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// 記事テンプレート一覧
const templates = [
  {
    type: "en-family",
    lang: "en",
    category: "Family Travel",
    prompt: `Write a helpful blog article in English for families visiting Tokyo who want to stay near Akihabara or Kanda area.
Hotel: Hotel Prime Inn Kanda
Location: 3 min walk from Awajicho station, 13 min from Akihabara
Key features: iMac, Nintendo Switch 2, Netflix, Disney+, Pocket Wi-Fi, drum washing machine, glass shower, Emma Premium beds
Price: from ¥30,000/night
Booking: https://beds24.com/booking.php?propid=274118&referer=BookingLink

Write an engaging article (600-800 words) with:
- A catchy title about family travel in Tokyo/Akihabara area
- Practical tips for families
- How the hotel features benefit families
- Nearby attractions suitable for families
- A call to action to book directly

Return as JSON:
{
  "title": "...",
  "excerpt": "One sentence summary (max 120 chars)",
  "category": "Family Travel",
  "contentHtml": "<p>...</p><h2>...</h2>..."
}`,
  },
  {
    type: "ja-family",
    lang: "ja",
    category: "ファミリー旅行",
    prompt: `神田・秋葉原エリアへのファミリー旅行を計画している日本人家族向けのブログ記事を書いてください。

ホテル情報：
- 名称：ホテルプライムイン神田
- 場所：淡路町駅・小川町駅 徒歩3分、秋葉原駅 徒歩13分
- 設備：iMac・Nintendo Switch 2・Nintendo Switch・Netflix・Disney+・ポケットWi-Fi・ドラム式洗濯機・ガラス張りシャワー・Emma Premiumベッド・独立トイレ
- 料金：¥30,000〜/泊
- 予約：https://beds24.com/booking.php?propid=274118&referer=BookingLink

600〜800字の記事を書いてください。構成：
- 家族旅行に神田・秋葉原が最適な理由
- 子どもが喜ぶホテルの設備紹介
- 周辺のファミリー向けスポット
- 予約への誘導

JSON形式で返してください：
{
  "title": "...",
  "excerpt": "1文の要約（120文字以内）",
  "category": "ファミリー旅行",
  "contentHtml": "<p>...</p><h2>...</h2>..."
}`,
  },
  {
    type: "ja-sightseeing",
    lang: "ja",
    category: "観光情報",
    prompt: `神田・秋葉原エリアの観光情報をまとめたブログ記事を書いてください。

記事の最後に以下のホテルを自然な流れで紹介してください：
- ホテルプライムイン神田（淡路町駅 徒歩3分）
- 予約：https://beds24.com/booking.php?propid=274118&referer=BookingLink

600〜800字の記事。構成：
- 神田・秋葉原エリアの魅力
- おすすめ観光スポット5〜7か所（具体的な場所名）
- グルメ・ショッピング情報
- アクセスの良さとホテルの紹介

JSON形式で返してください：
{
  "title": "...",
  "excerpt": "1文の要約（120文字以内）",
  "category": "観光情報",
  "contentHtml": "<p>...</p><h2>...</h2>..."
}`,
  },
];

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9ぁ-んァ-ン一-龥]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);
}

async function generatePost(template) {
  console.log(`\n記事を生成中: ${template.type} ...`);

  const message = await client.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 2000,
    messages: [{ role: "user", content: template.prompt }],
  });

  const text = message.content[0].text;

  // JSONを抽出
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) throw new Error("JSONが見つかりませんでした");

  const data = JSON.parse(match[0]);
  const date = new Date().toISOString().split("T")[0];
  const slug = `${date}-${template.type}-${slugify(data.title)}`.slice(0, 80);

  const post = {
    slug,
    title: data.title,
    excerpt: data.excerpt,
    date,
    lang: template.lang,
    category: data.category,
    contentHtml: data.contentHtml,
  };

  const outDir = path.join(__dirname, "../content/blog");
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, `${slug}.json`), JSON.stringify(post, null, 2), "utf-8");

  console.log(`✅ 完成: ${data.title}`);
  console.log(`   ファイル: content/blog/${slug}.json`);
  return post;
}

// 実行
const type = process.argv[2];
const targets = type ? templates.filter((t) => t.type === type) : templates;

if (targets.length === 0) {
  console.log("使い方: node scripts/generate-blog.mjs [type]");
  console.log("type: en-family / ja-family / ja-sightseeing（省略すると全種類生成）");
  process.exit(1);
}

for (const t of targets) {
  await generatePost(t);
}

console.log("\n✅ 全記事の生成が完了しました！");
console.log("次のコマンドでGitHubに送ってください:");
console.log("  git add content/ && git commit -m \"ブログ記事追加\" && git push");
