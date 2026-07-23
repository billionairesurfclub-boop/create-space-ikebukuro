import Link from "next/link";
import { hotel } from "@/data/hotel";

export const metadata = {
  title: `プライバシーポリシー | ${hotel.name.ja}`,
  description: `${hotel.name.ja}におけるお客様の個人情報の取り扱いについて`,
};

export default function PrivacyPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <Link href="/" className="text-sm text-gray-400 hover:text-gray-700 mb-8 block">
        ← トップページへ
      </Link>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">プライバシーポリシー</h1>

      <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-6">
        <p>
          合同会社プランプラン（以下「当社」）は、{hotel.name.ja}（以下「当施設」）のご予約・ご利用にあたりお客様からお預かりする個人情報を、以下の方針に基づき適切に取り扱います。
        </p>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">1. 事業者情報</h2>
          <p>
            合同会社プランプラン<br />
            運営施設：{hotel.name.ja}<br />
            所在地：{hotel.address.ja}<br />
            電話番号：{hotel.phone}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">2. 取得する情報</h2>
          <p>ご予約・お問い合わせの際に、以下の情報を取得する場合があります。</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>氏名、住所、電話番号、メールアドレス</li>
            <li>パスポート番号等の本人確認情報（住宅宿泊事業法に基づく宿泊者名簿の作成のため）</li>
            <li>ご予約内容、お支払い情報（決済は予約プラットフォームまたは決済代行会社を通じて処理され、当社がカード番号等を直接保持することはありません）</li>
            <li>本サイトの閲覧履歴・アクセスログ（Cookie、Google Analytics等の解析ツールを使用）</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">3. 利用目的</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>ご予約の管理・確認連絡・チェックイン案内のため</li>
            <li>法令（住宅宿泊事業法・旅館業法等）に基づく宿泊者名簿の作成・保管のため</li>
            <li>お問い合わせへの対応のため</li>
            <li>サービス向上・サイト改善のための統計的分析（個人を特定しない形で利用）</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">4. 第三者提供</h2>
          <p>
            当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。予約管理システム（Beds24等）や決済代行会社など、業務委託の範囲内で必要な情報を共有する場合がありますが、これらの委託先には適切な管理を求めています。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">5. Cookie・アクセス解析</h2>
          <p>
            当サイトでは、サイト改善のためGoogle Analytics等のアクセス解析ツールを利用しており、Cookieを使用する場合があります。これにより個人を特定する情報は取得されません。ブラウザの設定によりCookieを無効にすることも可能です。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">6. 開示・訂正・削除等のご請求</h2>
          <p>
            お客様ご自身の個人情報の開示・訂正・削除等をご希望の場合は、下記お問い合わせ先までご連絡ください。合理的な範囲で速やかに対応いたします。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">7. お問い合わせ窓口</h2>
          <p>
            合同会社プランプラン<br />
            電話番号：{hotel.phone}
          </p>
        </section>

        <p className="text-sm text-gray-400 mt-10">本ポリシーの内容は、必要に応じて予告なく変更する場合があります。</p>

        <hr className="my-10 border-gray-200" />

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Privacy Policy (English Summary)</h2>
          <p>
            PLAN PLAN LLC ("we") collects guest information (name, contact details, ID information as required by Japanese lodging law, and booking details) solely to manage reservations, comply with legal record-keeping requirements, and respond to inquiries. We do not share personal data with third parties except as required by law or through service providers (such as our booking/payment platforms) strictly for operational purposes. Our site uses analytics cookies (e.g. Google Analytics) that do not identify you personally. For any request to access, correct, or delete your data, please contact us at {hotel.phone}.
          </p>
        </section>
      </div>
    </div>
  );
}
