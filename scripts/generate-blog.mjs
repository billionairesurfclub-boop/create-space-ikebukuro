/**
 * ブログ記事自動生成スクリプト（クリエイトスペース池袋）
 * 使い方: node scripts/generate-blog.mjs
 */

import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const templates = [
  {
    type: "en-family",
    lang: "en",
    category: "Family Travel",
    prompt: `Write a helpful blog article in English for families or groups visiting Tokyo who want to stay near Ikebukuro area.
Property: Create Space Ikebukuro
Location: 10 min walk from Ikebukuro station (JR, Tokyo Metro, Tobu, Seibu lines)
Key features: 6 rooms total, max 4 guests per room, high-speed internet, Netflix, air conditioning
Price: from ¥20,000/night
Booking: https://beds24.com/booking.php?propid=276774&referer=BookingLink

Write an engaging article (600-800 words) with:
- A catchy title about family/group travel in Ikebukuro Tokyo
- Why Ikebukuro is a great base for Tokyo sightseeing
- How the property features benefit families and groups
- Nearby attractions in Ikebukuro/Toshima area
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
    prompt: `池袋エリアへのファミリー・グループ旅行を計画している方向けのブログ記事を書いてください。

物件情報：
- 名称：クリエイトスペース池袋
- 場所：池袋駅（JR・東京メトロ・東武・西武）徒歩10分
- 設備：全6室・最大4名・高速インターネット・Netflix・エアコン完備
- 料金：¥20,000〜/泊
- 予約：https://beds24.com/booking.php?propid=276774&referer=BookingLink

600〜800字の記事を書いてください。構成：
- 池袋エリアが東京観光の拠点として優れている理由
- クリエイトスペース池袋の設備紹介
- 池袋・豊島区エリアの観光スポット
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
    prompt: `池袋・豊島区エリアの観光情報をまとめたブログ記事を書いてください。

記事の最後に以下の物件を自然な流れで紹介してください：
- クリエイトスペース池袋（池袋駅 徒歩10分・全6室・最大4名）
- 予約：https://beds24.com/booking.php?propid=276774&referer=BookingLink

600〜800字の記事。構成：
- 池袋・豊島区エリアの魅力
- おすすめ観光スポット5〜7か所（サンシャインシティ、東池袋、雑司が谷など）
- グルメ・ショッピング情報
- クリエイトスペース池袋でゆったり滞在の紹介

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
  return post;
}

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
