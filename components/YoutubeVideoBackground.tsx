'use client';

import { useState, useEffect } from 'react';

interface YoutubeVideoBackgroundProps {
  videoId: string;
  fallbackImage: string;
  className?: string;
}

export default function YoutubeVideoBackground({
  videoId,
  fallbackImage,
  className = '',
}: YoutubeVideoBackgroundProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // モバイルデバイスの判定（768px以下）
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // YouTube埋め込みパラメータ
  // autoplay=1: 自動再生
  // mute=1: ミュート（自動再生に必須）
  // loop=1: ループ再生
  // playlist=${videoId}: ループに必須（ビデオIDを指定）
  // controls=0: コントロールを非表示
  // showinfo=0: 動画情報を非表示
  // rel=0: 関連動画を非表示
  // modestbranding=1: YouTubeロゴを最小化
  // playsinline=1: iOS用のインライン再生
  const videoParams = new URLSearchParams({
    autoplay: '1',
    mute: '1',
    loop: '1',
    playlist: videoId,
    controls: '0',
    showinfo: '0',
    rel: '0',
    modestbranding: '1',
    playsinline: '1',
    enablejsapi: '1',
  });

  const videoSrc = `https://www.youtube.com/embed/${videoId}?${videoParams.toString()}`;

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {isMobile ? (
        // モバイル: 静的画像を表示（パフォーマンス最適化）
        <>
          <img
            src={fallbackImage}
            alt="工場の電気工事現場"
            className="w-full h-full object-cover"
          />
          {/* グレースケールオーバーレイ */}
          <div className="absolute inset-0 bg-gray-900/50" style={{ mixBlendMode: 'color' }}></div>
        </>
      ) : (
        // デスクトップ: YouTube動画背景
        <div className="relative w-full h-full">
          {/* 16:9のアスペクト比を維持しつつ、画面全体をカバー */}
          <div className="absolute top-1/2 left-1/2 w-screen h-screen -translate-x-1/2 -translate-y-1/2">
            {/* YouTube動画が画面よりも小さくならないように、最小幅を150%に設定 */}
            <div className="relative w-[150vw] h-[150vh] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
              <iframe
                src={videoSrc}
                title="Background video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{
                  border: 'none',
                  // グレースケールフィルター + 明度調整
                  filter: 'grayscale(100%) brightness(0.6)',
                }}
              />
            </div>
          </div>

          {/* フォールバック用の静的画像（動画が読み込まれるまで表示） */}
          <img
            src={fallbackImage}
            alt="工場の電気工事現場"
            className="absolute inset-0 w-full h-full object-cover -z-10"
          />
        </div>
      )}

      {/* グラデーションオーバーレイ（テキストの可読性向上） */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-800/85 to-primary-900/90"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40"></div>
    </div>
  );
}
