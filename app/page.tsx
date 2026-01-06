import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image - 最高品質のファーストビュー */}
        <div className="absolute inset-0 overflow-hidden">
          {/* 背景画像 - 透過処理で美しさを最大限に活かす */}
          <img
            src="/images/hero-background.png"
            alt="電気工事の作業現場"
            className="w-full h-full object-cover"
            style={{
              // 画像の美しさを保ちつつ、テキストの可読性を確保
              opacity: 0.85,
            }}
          />
          {/* テキストエリアの可読性を向上させるための暗いオーバーレイ */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
          {/* 中央部分のテキストエリアをさらに暗くしてコントラストを向上 */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/40 to-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto text-center md:text-left">
            {/* Main Heading */}
            <div className="mb-8 animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
                <span
                  className="block"
                  style={{
                    textShadow:
                      '0 4px 30px rgba(0, 0, 0, 1), 0 2px 10px rgba(0, 0, 0, 0.9), 2px 2px 6px rgba(0, 0, 0, 1)',
                  }}
                >
                  FAの明日を、
                </span>
                <span
                  className="block mt-2"
                  style={{
                    textShadow:
                      '0 4px 30px rgba(0, 0, 0, 1), 0 2px 10px rgba(0, 0, 0, 0.9), 2px 2px 6px rgba(0, 0, 0, 1)',
                  }}
                >
                  確かな技術で照らす
                </span>
              </h1>
              <p
                className="text-xl md:text-2xl lg:text-3xl mb-8 text-white font-light leading-relaxed"
                style={{
                  textShadow:
                    '0 3px 20px rgba(0, 0, 0, 1), 0 1px 5px rgba(0, 0, 0, 0.9)',
                }}
              >
                愛知県稲沢市を拠点に、三菱系FA機器・工作機械の
                <br className="hidden md:block" />
                電気工事に特化した専門企業です
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-10 max-w-4xl animate-fade-in-up animation-delay-200">
              <div className="bg-black/50 backdrop-blur-md p-4 rounded-lg border border-white/20 hover:bg-black/60 transition-all duration-300 shadow-2xl">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  <span className="coming-soon-badge text-xs">Coming soon</span>
                </div>
                <p
                  className="text-white text-sm font-medium"
                  style={{
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.9)',
                  }}
                >
                  施工実績数
                </p>
              </div>
              <div className="bg-black/50 backdrop-blur-md p-4 rounded-lg border border-white/20 hover:bg-black/60 transition-all duration-300 shadow-2xl">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  <span className="coming-soon-badge text-xs">Coming soon</span>
                </div>
                <p
                  className="text-white text-sm font-medium"
                  style={{
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.9)',
                  }}
                >
                  創業年数
                </p>
              </div>
              <div className="bg-black/50 backdrop-blur-md p-4 rounded-lg border border-white/20 hover:bg-black/60 transition-all duration-300 shadow-2xl">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  <span className="coming-soon-badge text-xs">Coming soon</span>
                </div>
                <p
                  className="text-white text-sm font-medium"
                  style={{
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.9)',
                  }}
                >
                  有資格者数
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8 animate-fade-in-up animation-delay-300">
              <Link
                href="/contact"
                className="group bg-yellow-400 text-gray-900/90 px-10 py-5 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all duration-300 text-center shadow-2xl hover:shadow-yellow-400/70 transform hover:-translate-y-1 hover:scale-105"
              >
                <span className="flex items-center justify-center gap-2">
                  お問い合わせ
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <Link
                href="/services"
                className="group bg-white/15 backdrop-blur-md text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-white/25 transition-all duration-300 text-center border-2 border-white/60 hover:border-white transform hover:-translate-y-1 hover:scale-105 shadow-2xl"
              >
                <span className="flex items-center justify-center gap-2">
                  サービス詳細
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Key Points */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start animate-fade-in-up animation-delay-400">
              <div className="flex items-center gap-2 text-white bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 hover:bg-black/60 transition-all shadow-lg">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  style={{
                    filter: 'drop-shadow(0 2px 6px rgba(0, 0, 0, 0.9))',
                  }}
                >
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span
                  className="text-sm md:text-base font-medium"
                  style={{
                    textShadow: '0 2px 8px rgba(0, 0, 0, 0.9)',
                  }}
                >
                  三菱電機認定施工業者
                </span>
              </div>
              <div className="flex items-center gap-2 text-white bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 hover:bg-black/60 transition-all shadow-lg">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  style={{
                    filter: 'drop-shadow(0 2px 6px rgba(0, 0, 0, 0.9))',
                  }}
                >
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span
                  className="text-sm md:text-base font-medium"
                  style={{
                    textShadow: '0 2px 8px rgba(0, 0, 0, 0.9)',
                  }}
                >
                  無料見積もり
                </span>
              </div>
            </div>
          </div>
        </div>


      </section>

      {/* Company Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900/90 mb-4">
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
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900/90 mb-12">
            当社の強み
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Strength 1 */}
            <div className="bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200 group">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-5 text-gray-900/90 group-hover:text-primary-700 transition-colors">
                  三菱系機器に特化
                </h3>
                <div className="w-16 h-1 bg-primary-600 mx-auto mb-6 rounded-full"></div>
                <p className="text-gray-600 leading-relaxed">
                  三菱系FA機器・工作機械の電気工事に特化し、豊富な経験と専門知識を保有しています。
                </p>
              </div>
            </div>

            {/* Strength 2 */}
            <div className="bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200 group">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-5 text-gray-900/90 group-hover:text-primary-700 transition-colors">
                  確かな技術力
                </h3>
                <div className="w-16 h-1 bg-primary-600 mx-auto mb-6 rounded-full"></div>
                <p className="text-gray-600 leading-relaxed">
                  <span className="coming-soon-badge mb-2 inline-block">Coming soon</span><br />
                  技術力の詳細、資格保有者情報、技術者数などを掲載予定
                </p>
              </div>
            </div>

            {/* Strength 3 */}
            <div className="bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200 group">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-5 text-gray-900/90 group-hover:text-primary-700 transition-colors">
                  迅速な対応
                </h3>
                <div className="w-16 h-1 bg-primary-600 mx-auto mb-6 rounded-full"></div>
                <p className="text-gray-600 leading-relaxed">
                  <span className="coming-soon-badge mb-2 inline-block">Coming soon</span><br />
                  対応エリア、対応時間、緊急対応の可否などを掲載予定
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900/90 mb-12">
            主要サービス
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Service 1 */}
            <div className="border-2 border-primary-200 p-8 rounded-lg hover:border-primary-500 transition">
              <h3 className="text-2xl font-bold mb-4 text-gray-900/90/90">
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
              <h3 className="text-2xl font-bold mb-4 text-gray-900/90/90">
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
              <h3 className="text-2xl font-bold mb-4 text-gray-900/90/90">
                制御盤の設計・製作
              </h3>
              <p className="text-gray-600 mb-4">
                <span className="coming-soon-badge mb-2 inline-block">Coming soon</span><br />
                制御盤の設計・製作サービスの詳細を掲載予定
              </p>
            </div>

            {/* Service 4 */}
            <div className="border-2 border-primary-200 p-8 rounded-lg hover:border-primary-500 transition">
              <h3 className="text-2xl font-bold mb-4 text-gray-900/90/90">
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
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900/90 mb-12">
            施工事例
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
            {/* Preview 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-48 overflow-hidden bg-gray-200">
                <img
                  src="/images/case-study_01.png"
                  alt="制御盤の配線作業"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 text-gray-900/90/90">FA制御盤配線</h3>
                <p className="text-sm text-gray-600">
                  制御盤配線作業の施工事例
                </p>
              </div>
            </div>

            {/* Preview 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-48 overflow-hidden bg-gray-200">
                <img
                  src="/images/case-study_02.png"
                  alt="稼働中のFAラインにおけるセンサー配線またはモーター配線点検"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 text-gray-900/90/90">FAライン点検</h3>
                <p className="text-sm text-gray-600">
                  モーター配線点検の施工事例
                </p>
              </div>
            </div>

            {/* Preview 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-48 overflow-hidden bg-gray-200">
                <img
                  src="/images/case-study_03.png"
                  alt="大規模工場における電力幹線および配電設備の敷設工事"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 text-gray-900/90/90">電力幹線敷設工事</h3>
                <p className="text-sm text-gray-600">
                  配電設備敷設の施工事例
                </p>
              </div>
            </div>
          </div>

          <div className="placeholder-section max-w-4xl mx-auto mb-8">
            <p className="text-center text-gray-700">
              <span className="coming-soon-badge mb-2 inline-block">Coming soon</span><br />
              <strong>実際の施工事例の詳細情報</strong><br />
              <span className="text-sm text-gray-600">
                クライアント様との商談後に、プロジェクト名、施工内容、成果などの詳細情報を追加いたします。
              </span>
            </p>
          </div>

          <div className="text-center">
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
