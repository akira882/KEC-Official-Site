import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-700 to-primary-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              三菱系FA機器・工作機械の<br />
              電気工事なら、お任せください
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              愛知県稲沢市を拠点に、工場の自動化・生産設備の電気工事を専門に行っています
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-white text-primary-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-50 transition text-center"
              >
                お問い合わせ
              </Link>
              <Link
                href="/services"
                className="bg-primary-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-500 transition text-center border-2 border-white"
              >
                サービス詳細
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              株式会社ケーイーシーについて
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              私たちは三菱系FA機器・工作機械の電気工事に特化した専門企業です。<br />
              長年の経験と確かな技術力で、お客様の生産現場をサポートいたします。
            </p>
          </div>

          <div className="placeholder-section max-w-4xl mx-auto">
            <p className="text-center text-gray-700">
              <span className="coming-soon-badge mb-2 inline-block">Coming soon</span>
              <br />
              <strong>企業紹介文</strong><br />
              ここに企業の歴史、ビジョン、ミッション、代表メッセージなどを掲載予定
            </p>
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            当社の強み
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Strength 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-gray-900">
                三菱系機器に特化
              </h3>
              <p className="text-gray-600 text-center">
                三菱系FA機器・工作機械の電気工事に特化し、豊富な経験と専門知識を保有しています。
              </p>
            </div>

            {/* Strength 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-gray-900">
                確かな技術力
              </h3>
              <p className="text-gray-600 text-center">
                <span className="coming-soon-badge mb-2 inline-block">Coming soon</span><br />
                技術力の詳細、資格保有者情報、技術者数などを掲載予定
              </p>
            </div>

            {/* Strength 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-gray-900">
                迅速な対応
              </h3>
              <p className="text-gray-600 text-center">
                <span className="coming-soon-badge mb-2 inline-block">Coming soon</span><br />
                対応エリア、対応時間、緊急対応の可否などを掲載予定
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            主要サービス
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Service 1 */}
            <div className="border-2 border-primary-200 p-8 rounded-lg hover:border-primary-500 transition">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                FA機器の電気工事
              </h3>
              <p className="text-gray-600 mb-4">
                三菱系FA機器の設置、配線、メンテナンスまで、トータルでサポートいたします。
              </p>
              <div className="placeholder-section">
                <p className="text-sm text-gray-700">
                  <span className="coming-soon-badge mb-1 inline-block">Coming soon</span><br />
                  対応可能なFA機器の種類、具体的な作業内容を掲載予定
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="border-2 border-primary-200 p-8 rounded-lg hover:border-primary-500 transition">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                工作機械の電気工事
              </h3>
              <p className="text-gray-600 mb-4">
                工作機械の電気設備工事、制御盤の設計・製作を行います。
              </p>
              <div className="placeholder-section">
                <p className="text-sm text-gray-700">
                  <span className="coming-soon-badge mb-1 inline-block">Coming soon</span><br />
                  対応可能な工作機械の種類、具体的な作業内容を掲載予定
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="border-2 border-primary-200 p-8 rounded-lg hover:border-primary-500 transition">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                制御盤の設計・製作
              </h3>
              <p className="text-gray-600 mb-4">
                <span className="coming-soon-badge mb-2 inline-block">Coming soon</span><br />
                制御盤の設計・製作サービスの詳細を掲載予定
              </p>
            </div>

            {/* Service 4 */}
            <div className="border-2 border-primary-200 p-8 rounded-lg hover:border-primary-500 transition">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                メンテナンス・保守
              </h3>
              <p className="text-gray-600 mb-4">
                <span className="coming-soon-badge mb-2 inline-block">Coming soon</span><br />
                定期メンテナンス、緊急対応などのサービス詳細を掲載予定
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-700 transition"
            >
              サービス詳細を見る
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            施工事例
          </h2>

          <div className="placeholder-section max-w-4xl mx-auto">
            <div className="text-center">
              <svg className="w-24 h-24 mx-auto mb-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-gray-700 mb-4">
                <span className="coming-soon-badge mb-2 inline-block">Coming soon</span><br />
                <strong>施工事例の写真と詳細</strong>
              </p>
              <p className="text-gray-600">
                実際の施工事例（写真、プロジェクト名、施工内容、成果など）を掲載予定です。<br />
                クライアント様との商談後に、具体的な事例を追加いたします。
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/case-studies"
              className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-700 transition"
            >
              施工事例一覧を見る
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            お気軽にお問い合わせください
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            三菱系FA機器・工作機械の電気工事に関するご相談は、株式会社ケーイーシーまで
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary-700 px-10 py-5 rounded-lg font-bold text-xl hover:bg-primary-50 transition"
          >
            お問い合わせフォームへ
          </Link>
        </div>
      </section>
    </div>
  );
}
