import Link from 'next/link';

export default function CaseStudies() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">施工事例</h1>
          <p className="text-xl text-primary-100">Case Studies</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-600">
              三菱系FA機器・工作機械の電気工事における、<br />
              株式会社ケーイーシーの豊富な施工実績をご紹介いたします。
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Case Study Placeholder 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 overflow-hidden bg-gray-200">
                <img
                  src="/images/case-study-1-manual.jpg"
                  alt="FA機器の配線作業"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900/90/90">施工事例 #1</h3>
                <p className="text-sm text-gray-600 mb-4">
                  プロジェクト名、業種、施工内容の概要を掲載予定
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start">
                    <span className="text-gray-500 w-20">業種:</span>
                    <span className="coming-soon-badge text-xs">Coming soon</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gray-500 w-20">施工期間:</span>
                    <span className="coming-soon-badge text-xs">Coming soon</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gray-500 w-20">施工内容:</span>
                    <span className="coming-soon-badge text-xs">Coming soon</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study Placeholder 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 overflow-hidden bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=800&q=80"
                  alt="産業用ロボットの設置・配線"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900/90/90">施工事例 #2</h3>
                <p className="text-sm text-gray-600 mb-4">
                  プロジェクト名、業種、施工内容の概要を掲載予定
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start">
                    <span className="text-gray-500 w-20">業種:</span>
                    <span className="coming-soon-badge text-xs">Coming soon</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gray-500 w-20">施工期間:</span>
                    <span className="coming-soon-badge text-xs">Coming soon</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gray-500 w-20">施工内容:</span>
                    <span className="coming-soon-badge text-xs">Coming soon</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study Placeholder 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 overflow-hidden bg-gray-200">
                <img
                  src="/images/CaseStudy_03.png"
                  alt="工作機械の電気保守点検"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900/90/90">施工事例 #3</h3>
                <p className="text-sm text-gray-600 mb-4">
                  プロジェクト名、業種、施工内容の概要を掲載予定
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start">
                    <span className="text-gray-500 w-20">業種:</span>
                    <span className="coming-soon-badge text-xs">Coming soon</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gray-500 w-20">施工期間:</span>
                    <span className="coming-soon-badge text-xs">Coming soon</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gray-500 w-20">施工内容:</span>
                    <span className="coming-soon-badge text-xs">Coming soon</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study Placeholder 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 overflow-hidden bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1621905251189-08b9ebd84f69?auto=format&fit=crop&w=800&q=80"
                  alt="制御盤内の配線作業"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900/90/90">施工事例 #4</h3>
                <p className="text-sm text-gray-600 mb-4">
                  プロジェクト名、業種、施工内容の概要を掲載予定
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start">
                    <span className="text-gray-500 w-20">業種:</span>
                    <span className="coming-soon-badge text-xs">Coming soon</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gray-500 w-20">施工期間:</span>
                    <span className="coming-soon-badge text-xs">Coming soon</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gray-500 w-20">施工内容:</span>
                    <span className="coming-soon-badge text-xs">Coming soon</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study Placeholder 5 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 overflow-hidden bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80"
                  alt="生産ラインの点検作業"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900/90/90">施工事例 #5</h3>
                <p className="text-sm text-gray-600 mb-4">
                  プロジェクト名、業種、施工内容の概要を掲載予定
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start">
                    <span className="text-gray-500 w-20">業種:</span>
                    <span className="coming-soon-badge text-xs">Coming soon</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gray-500 w-20">施工期間:</span>
                    <span className="coming-soon-badge text-xs">Coming soon</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gray-500 w-20">施工内容:</span>
                    <span className="coming-soon-badge text-xs">Coming soon</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study Placeholder 6 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 overflow-hidden bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c54be3855091?auto=format&fit=crop&w=800&q=80"
                  alt="工場設備の電気工事"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900/90/90">施工事例 #6</h3>
                <p className="text-sm text-gray-600 mb-4">
                  プロジェクト名、業種、施工内容の概要を掲載予定
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start">
                    <span className="text-gray-500 w-20">業種:</span>
                    <span className="coming-soon-badge text-xs">Coming soon</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gray-500 w-20">施工期間:</span>
                    <span className="coming-soon-badge text-xs">Coming soon</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gray-500 w-20">施工内容:</span>
                    <span className="coming-soon-badge text-xs">Coming soon</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Information for Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="placeholder-section">
              <h2 className="text-2xl font-bold mb-6 text-center text-gray-900/90/90">
                施工事例に掲載する情報
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">基本情報</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>プロジェクト名</li>
                    <li>お客様の業種</li>
                    <li>施工場所（都道府県・市町村）</li>
                    <li>施工期間</li>
                    <li>施工内容の概要</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">詳細情報</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>施工前の課題</li>
                    <li>提案内容・解決策</li>
                    <li>使用した機器・部材</li>
                    <li>施工のポイント</li>
                    <li>施工後の効果・成果</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">ビジュアル要素</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>施工前の写真</li>
                  <li>施工中の写真</li>
                  <li>施工後の写真</li>
                  <li>図面やイラスト（あれば）</li>
                  <li>お客様の声（掲載可能な場合）</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900/90 mb-12">
            施工事例カテゴリー（予定）
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900/90/90">FA機器</h3>
              <p className="text-sm text-gray-600 mt-2">
                <span className="coming-soon-badge text-xs">Coming soon</span>
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900/90/90">工作機械</h3>
              <p className="text-sm text-gray-600 mt-2">
                <span className="coming-soon-badge text-xs">Coming soon</span>
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900/90/90">制御盤</h3>
              <p className="text-sm text-gray-600 mt-2">
                <span className="coming-soon-badge text-xs">Coming soon</span>
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900/90/90">メンテナンス</h3>
              <p className="text-sm text-gray-600 mt-2">
                <span className="coming-soon-badge text-xs">Coming soon</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            お客様のプロジェクトもお任せください
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            施工事例に関するご質問や、新規プロジェクトのご相談はお気軽にお問い合わせください
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-primary-700 px-10 py-5 rounded-lg font-bold text-xl hover:bg-primary-50 transition"
            >
              お問い合わせ
            </Link>
            <Link
              href="/services"
              className="inline-block bg-primary-600 text-white px-10 py-5 rounded-lg font-bold text-xl hover:bg-primary-500 transition border-2 border-white"
            >
              サービス詳細
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
