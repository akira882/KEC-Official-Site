'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    companyName: '',
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // フォーム送信処理は後で実装
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">お問い合わせ</h1>
          <p className="text-xl text-primary-100">Contact Us</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-600">
              三菱系FA機器・工作機械の電気工事に関するご相談は、お気軽にお問い合わせください。<br />
              専門スタッフが丁寧に対応いたします。
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-lg shadow-md mb-6">
                <h2 className="text-2xl font-bold mb-6 text-gray-900/90/90">会社情報</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      会社名
                    </h3>
                    <p className="text-gray-600 pl-7">株式会社ケーイーシー</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      所在地
                    </h3>
                    <p className="text-gray-600 pl-7">
                      〒492-8143<br />
                      愛知県稲沢市朝府町12番2号
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      電話番号
                    </h3>
                    <p className="text-gray-600 pl-7">
                      <span className="coming-soon-badge">Coming soon</span>
                      <br />
                      <span className="text-sm">電話番号を掲載予定</span>
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      メール
                    </h3>
                    <p className="text-gray-600 pl-7">
                      <span className="coming-soon-badge">Coming soon</span>
                      <br />
                      <span className="text-sm">メールアドレスを掲載予定</span>
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      営業時間
                    </h3>
                    <p className="text-gray-600 pl-7">
                      <span className="coming-soon-badge">Coming soon</span>
                      <br />
                      <span className="text-sm">営業時間を掲載予定</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="placeholder-section">
                <h3 className="font-semibold text-gray-700 mb-3 text-center">
                  <span className="coming-soon-badge mb-2 inline-block">Coming soon</span>
                  <br />
                  地図
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  Google マップを埋め込み予定
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-gray-900/90/90">お問い合わせフォーム</h2>

                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="placeholder-section mb-6">
                      <p className="text-sm text-center text-gray-700">
                        <span className="coming-soon-badge mb-2 inline-block">Coming soon</span>
                        <br />
                        <strong>フォーム送信機能</strong>
                        <br />
                        実際のフォーム送信機能（メール送信、データベース保存など）は後で実装予定です。<br />
                        現在はデモ版として動作します。
                      </p>
                    </div>

                    <div>
                      <label htmlFor="companyName" className="block text-gray-700 font-semibold mb-2">
                        会社名 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="例: 株式会社サンプル"
                      />
                    </div>

                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                        お名前 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="例: 山田 太郎"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                        メールアドレス <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="例: example@company.co.jp"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                        電話番号
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="例: 03-1234-5678"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
                        お問い合わせ種別 <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">選択してください</option>
                        <option value="fa-equipment">FA機器の電気工事について</option>
                        <option value="machine-tool">工作機械の電気工事について</option>
                        <option value="control-panel">制御盤の設計・製作について</option>
                        <option value="maintenance">メンテナンス・保守について</option>
                        <option value="estimate">見積もり依頼</option>
                        <option value="other">その他</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                        お問い合わせ内容 <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                        placeholder="お問い合わせ内容をご記入ください"
                      ></textarea>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600">
                        <span className="text-red-500">*</span> は必須項目です。<br />
                        お送りいただいた情報は、お問い合わせ対応のみに使用いたします。
                      </p>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-800 transition"
                    >
                      送信する
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900/90 mb-4">
                      お問い合わせありがとうございます
                    </h3>
                    <p className="text-gray-600 mb-8">
                      お問い合わせを受け付けました。<br />
                      内容を確認の上、担当者よりご連絡させていただきます。
                    </p>
                    <div className="placeholder-section max-w-md mx-auto">
                      <p className="text-sm text-gray-700">
                        <span className="coming-soon-badge mb-2 inline-block">Coming soon</span>
                        <br />
                        実際の送信後は、自動返信メールが送信され、<br />
                        お問い合わせ内容がデータベースに保存されます。
                      </p>
                    </div>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-8 bg-primary-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-primary-800 transition"
                    >
                      フォームに戻る
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900/90 mb-12">
              お問い合わせ前によくある質問
            </h2>

            <div className="placeholder-section">
              <div className="text-center mb-6">
                <svg className="w-16 h-16 mx-auto mb-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="coming-soon-badge mb-2 inline-block">Coming soon</span>
              </div>
              <p className="text-gray-700 text-center mb-4">
                <strong>よくある質問（FAQ）</strong>
              </p>
              <p className="text-gray-600 text-center">
                お客様からよくいただく質問とその回答を掲載予定です。<br />
                対応エリア、料金、工期、対応可能な機器など。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
