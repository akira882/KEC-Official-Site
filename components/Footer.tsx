import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">株式会社ケーイーシー</h3>
            <p className="text-gray-400 mb-2">
              三菱系FA機器・工作機械の<br />
              電気工事専門企業
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">メニュー</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition">
                  ホーム
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition">
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition">
                  事業内容
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-400 hover:text-white transition">
                  施工事例
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">お問い合わせ</h3>
            <address className="not-italic text-gray-400 space-y-2">
              <p>〒492-8143</p>
              <p>愛知県稲沢市朝府町12番2号</p>
              <p className="mt-4">
                <span className="coming-soon-badge">Coming soon</span>
                <br />
                <span className="text-sm">電話番号</span>
              </p>
              <p>
                <span className="coming-soon-badge">Coming soon</span>
                <br />
                <span className="text-sm">メールアドレス</span>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 株式会社ケーイーシー All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
