export default function About() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">会社概要</h1>
          <p className="text-xl text-primary-100">Company Profile</p>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">企業情報</h2>

            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 pr-8 text-gray-700 font-semibold w-1/3">
                      会社名
                    </th>
                    <td className="py-4 text-gray-900">
                      株式会社ケーイーシー
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 pr-8 text-gray-700 font-semibold">
                      法人番号
                    </th>
                    <td className="py-4 text-gray-900">
                      8180001085783
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 pr-8 text-gray-700 font-semibold">
                      所在地
                    </th>
                    <td className="py-4 text-gray-900">
                      〒492-8143<br />
                      愛知県稲沢市朝府町12番2号
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 pr-8 text-gray-700 font-semibold">
                      設立
                    </th>
                    <td className="py-4">
                      <span className="coming-soon-badge">Coming soon</span>
                      <p className="text-sm text-gray-600 mt-1">設立年月日を掲載予定</p>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 pr-8 text-gray-700 font-semibold">
                      資本金
                    </th>
                    <td className="py-4">
                      <span className="coming-soon-badge">Coming soon</span>
                      <p className="text-sm text-gray-600 mt-1">資本金を掲載予定</p>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 pr-8 text-gray-700 font-semibold">
                      代表者
                    </th>
                    <td className="py-4">
                      <span className="coming-soon-badge">Coming soon</span>
                      <p className="text-sm text-gray-600 mt-1">代表者名を掲載予定</p>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 pr-8 text-gray-700 font-semibold">
                      従業員数
                    </th>
                    <td className="py-4">
                      <span className="coming-soon-badge">Coming soon</span>
                      <p className="text-sm text-gray-600 mt-1">従業員数を掲載予定</p>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 pr-8 text-gray-700 font-semibold">
                      事業内容
                    </th>
                    <td className="py-4 text-gray-900">
                      <ul className="list-disc list-inside space-y-2">
                        <li>三菱系FA機器の電気工事</li>
                        <li>三菱系工作機械の電気工事</li>
                        <li>制御盤の設計・製作</li>
                        <li>設備メンテナンス・保守</li>
                      </ul>
                      <div className="mt-4 placeholder-section">
                        <p className="text-sm">
                          <span className="coming-soon-badge mb-1 inline-block">Coming soon</span><br />
                          その他の事業内容詳細を掲載予定
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 pr-8 text-gray-700 font-semibold">
                      TEL
                    </th>
                    <td className="py-4">
                      <span className="coming-soon-badge">Coming soon</span>
                      <p className="text-sm text-gray-600 mt-1">電話番号を掲載予定</p>
                    </td>
                  </tr>
                  <tr>
                    <th className="text-left py-4 pr-8 text-gray-700 font-semibold">
                      FAX
                    </th>
                    <td className="py-4">
                      <span className="coming-soon-badge">Coming soon</span>
                      <p className="text-sm text-gray-600 mt-1">FAX番号を掲載予定</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Company Philosophy */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">企業理念</h2>

            <div className="placeholder-section">
              <div className="text-center mb-6">
                <svg className="w-16 h-16 mx-auto mb-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="coming-soon-badge mb-2 inline-block">Coming soon</span>
              </div>
              <p className="text-gray-700 text-center">
                <strong>企業理念・ビジョン・ミッション</strong><br />
                企業の理念、ビジョン、ミッション、行動指針などを掲載予定です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Message from President */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">代表メッセージ</h2>

            <div className="placeholder-section">
              <div className="text-center mb-6">
                <svg className="w-16 h-16 mx-auto mb-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="coming-soon-badge mb-2 inline-block">Coming soon</span>
              </div>
              <p className="text-gray-700 text-center mb-4">
                <strong>代表取締役からのメッセージ</strong>
              </p>
              <p className="text-gray-600 text-center">
                代表者の写真、メッセージ、経歴などを掲載予定です。<br />
                企業の想い、お客様へのメッセージなどを伝えます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">沿革</h2>

            <div className="placeholder-section">
              <div className="text-center mb-6">
                <svg className="w-16 h-16 mx-auto mb-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="coming-soon-badge mb-2 inline-block">Coming soon</span>
              </div>
              <p className="text-gray-700 text-center mb-4">
                <strong>会社の歴史・沿革</strong>
              </p>
              <p className="text-gray-600 text-center">
                設立からこれまでの主要な出来事、マイルストーン、<br />
                事業拡大の歴史などを年表形式で掲載予定です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">保有資格・認証</h2>

            <div className="placeholder-section">
              <div className="text-center mb-6">
                <svg className="w-16 h-16 mx-auto mb-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <span className="coming-soon-badge mb-2 inline-block">Coming soon</span>
              </div>
              <p className="text-gray-700 text-center mb-4">
                <strong>保有資格・認証情報</strong>
              </p>
              <p className="text-gray-600 text-center">
                電気工事士資格、その他の専門資格、<br />
                ISO認証などの情報を掲載予定です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Access */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">アクセス</h2>

            <div className="bg-white p-8 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900">株式会社ケーイーシー</h3>
              <p className="text-gray-700 mb-4">
                〒492-8143<br />
                愛知県稲沢市朝府町12番2号
              </p>
            </div>

            <div className="placeholder-section">
              <div className="text-center mb-6">
                <svg className="w-16 h-16 mx-auto mb-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <span className="coming-soon-badge mb-2 inline-block">Coming soon</span>
              </div>
              <p className="text-gray-700 text-center mb-4">
                <strong>地図・アクセス情報</strong>
              </p>
              <p className="text-gray-600 text-center">
                Google マップの埋め込み、最寄り駅からのアクセス、<br />
                駐車場情報などを掲載予定です。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
