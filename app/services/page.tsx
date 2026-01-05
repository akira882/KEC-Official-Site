import Link from 'next/link';

export default function Services() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">サービス・強み</h1>
          <p className="text-xl text-primary-100">Services & Strengths</p>
        </div>
      </section>

      {/* Our Strengths */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900/90 mb-4">
            当社の強み
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            三菱系FA機器・工作機械の電気工事において、長年培った経験と専門知識で<br />
            お客様の生産現場をトータルサポートいたします
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Strength 1 */}
            <div className="bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-300 group">
              <h3 className="text-2xl font-bold mb-5 text-gray-900/90 group-hover:text-primary-700 transition-colors">
                三菱系機器に特化した専門性
              </h3>
              <div className="w-20 h-1 bg-primary-600 mb-6 rounded-full"></div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                三菱電機製FA機器・工作機械に特化し、豊富な施工実績と深い製品知識を保有しています。
              </p>
              <div className="placeholder-section">
                <p className="text-sm">
                  <span className="coming-soon-badge mb-1 inline-block">Coming soon</span><br />
                  対応可能な具体的な機器リスト、施工実績数などを掲載予定
                </p>
              </div>
            </div>

            {/* Strength 2 */}
            <div className="bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-300 group">
              <h3 className="text-2xl font-bold mb-5 text-gray-900/90 group-hover:text-primary-700 transition-colors">
                確かな技術力
              </h3>
              <div className="w-20 h-1 bg-primary-600 mb-6 rounded-full"></div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                <span className="coming-soon-badge mb-2 inline-block">Coming soon</span>
              </p>
              <div className="placeholder-section">
                <p className="text-sm">
                  有資格者の人数、保有資格の種類、技術力を示す具体的なデータなどを掲載予定
                </p>
              </div>
            </div>

            {/* Strength 3 */}
            <div className="bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-300 group">
              <h3 className="text-2xl font-bold mb-5 text-gray-900/90 group-hover:text-primary-700 transition-colors">
                迅速な対応
              </h3>
              <div className="w-20 h-1 bg-primary-600 mb-6 rounded-full"></div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                <span className="coming-soon-badge mb-2 inline-block">Coming soon</span>
              </p>
              <div className="placeholder-section">
                <p className="text-sm">
                  対応可能エリア、対応時間、緊急対応の可否、平均対応時間などを掲載予定
                </p>
              </div>
            </div>

            {/* Strength 4 */}
            <div className="bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-300 group">
              <h3 className="text-2xl font-bold mb-5 text-gray-900/90 group-hover:text-primary-700 transition-colors">
                経験豊富なスタッフ
              </h3>
              <div className="w-20 h-1 bg-primary-600 mb-6 rounded-full"></div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                <span className="coming-soon-badge mb-2 inline-block">Coming soon</span>
              </p>
              <div className="placeholder-section">
                <p className="text-sm">
                  スタッフの平均経験年数、専門分野、チーム構成などを掲載予定
                </p>
              </div>
            </div>

            {/* Strength 5 */}
            <div className="bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-300 group">
              <h3 className="text-2xl font-bold mb-5 text-gray-900/90 group-hover:text-primary-700 transition-colors">
                充実のアフターサポート
              </h3>
              <div className="w-20 h-1 bg-primary-600 mb-6 rounded-full"></div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                <span className="coming-soon-badge mb-2 inline-block">Coming soon</span>
              </p>
              <div className="placeholder-section">
                <p className="text-sm">
                  保守・メンテナンスサービス、サポート体制、保証内容などを掲載予定
                </p>
              </div>
            </div>

            {/* Strength 6 */}
            <div className="bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-300 group">
              <h3 className="text-2xl font-bold mb-5 text-gray-900/90 group-hover:text-primary-700 transition-colors">
                適正価格での提供
              </h3>
              <div className="w-20 h-1 bg-primary-600 mb-6 rounded-full"></div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                <span className="coming-soon-badge mb-2 inline-block">Coming soon</span>
              </p>
              <div className="placeholder-section">
                <p className="text-sm">
                  価格設定の考え方、見積もりの透明性、コストパフォーマンスなどを掲載予定
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900/90 mb-12">
            主要サービス
          </h2>

          <div className="max-w-5xl mx-auto space-y-8">
            {/* Service 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-primary-700 p-8 flex items-center justify-center">
                  <div className="text-center text-white">
                    <svg className="w-20 h-20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                    <h3 className="text-2xl font-bold">FA機器の電気工事</h3>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <h4 className="text-xl font-bold mb-4 text-gray-900/90/90">三菱系FA機器の設置・配線・メンテナンス</h4>
                  <p className="text-gray-600 mb-4">
                    工場の自動化を実現する三菱電機製FA機器の電気工事を専門に行っています。<br />
                    設置から配線、試運転、メンテナンスまでトータルでサポートいたします。
                  </p>
                  <div className="placeholder-section">
                    <p className="text-sm text-gray-700 mb-2">
                      <span className="coming-soon-badge mb-1 inline-block">Coming soon</span>
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      <li>対応可能なFA機器の詳細リスト</li>
                      <li>具体的な作業内容と工程</li>
                      <li>使用する部材・工具</li>
                      <li>標準的な工期と価格帯</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex md:flex-row-reverse">
                <div className="md:w-1/3 bg-primary-700 p-8 flex items-center justify-center">
                  <div className="text-center text-white">
                    <svg className="w-20 h-20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <h3 className="text-2xl font-bold">工作機械の電気工事</h3>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <h4 className="text-xl font-bold mb-4 text-gray-900/90/90">工作機械の電気設備工事</h4>
                  <p className="text-gray-600 mb-4">
                    三菱系工作機械の電気設備工事、制御システムの構築を行います。<br />
                    精密な配線技術で、機械の性能を最大限に引き出します。
                  </p>
                  <div className="placeholder-section">
                    <p className="text-sm text-gray-700 mb-2">
                      <span className="coming-soon-badge mb-1 inline-block">Coming soon</span>
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      <li>対応可能な工作機械の種類</li>
                      <li>具体的な作業内容と工程</li>
                      <li>制御システムの構築実績</li>
                      <li>標準的な工期と価格帯</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-primary-700 p-8 flex items-center justify-center">
                  <div className="text-center text-white">
                    <svg className="w-20 h-20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                    <h3 className="text-2xl font-bold">制御盤の設計・製作</h3>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <h4 className="text-xl font-bold mb-4 text-gray-900/90/90">カスタム制御盤の設計・製作</h4>
                  <p className="text-gray-600 mb-4">
                    <span className="coming-soon-badge mb-2 inline-block">Coming soon</span>
                  </p>
                  <div className="placeholder-section">
                    <p className="text-sm text-gray-700 mb-2">
                      制御盤の設計・製作サービスの詳細情報を掲載予定
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      <li>設計から製作までの流れ</li>
                      <li>対応可能な仕様・規格</li>
                      <li>使用する部品・機器</li>
                      <li>納期と価格帯</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex md:flex-row-reverse">
                <div className="md:w-1/3 bg-primary-700 p-8 flex items-center justify-center">
                  <div className="text-center text-white">
                    <svg className="w-20 h-20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <h3 className="text-2xl font-bold">メンテナンス・保守</h3>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <h4 className="text-xl font-bold mb-4 text-gray-900/90/90">定期メンテナンス・緊急対応</h4>
                  <p className="text-gray-600 mb-4">
                    <span className="coming-soon-badge mb-2 inline-block">Coming soon</span>
                  </p>
                  <div className="placeholder-section">
                    <p className="text-sm text-gray-700 mb-2">
                      メンテナンス・保守サービスの詳細情報を掲載予定
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      <li>定期メンテナンスの内容と頻度</li>
                      <li>緊急対応の可否と対応時間</li>
                      <li>保守契約の種類と内容</li>
                      <li>料金体系</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900/90 mb-12">
            当社が選ばれる理由
          </h2>

          <div className="placeholder-section max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <svg className="w-16 h-16 mx-auto mb-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <span className="coming-soon-badge mb-2 inline-block">Coming soon</span>
            </div>
            <p className="text-gray-700 text-center mb-4">
              <strong>お客様の声・選ばれる理由</strong>
            </p>
            <p className="text-gray-600 text-center">
              実際のお客様の声、導入事例、顧客満足度、<br />
              他社との差別化ポイントなどを掲載予定です。
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            サービスに関するご相談はお気軽に
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            お客様のニーズに合わせた最適なソリューションをご提案いたします
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-primary-700 px-10 py-5 rounded-lg font-bold text-xl hover:bg-primary-50 transition"
            >
              お問い合わせ
            </Link>
            <Link
              href="/case-studies"
              className="inline-block bg-primary-600 text-white px-10 py-5 rounded-lg font-bold text-xl hover:bg-primary-500 transition border-2 border-white"
            >
              施工事例を見る
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
