import React, { useRef, useEffect } from 'react';

interface ArknightsLiveWallpaperProps {
  mode: 'main' | 'memories';
}

export const ArknightsLiveWallpaper: React.FC<ArknightsLiveWallpaperProps> = ({ mode }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Klip detik 00:08–00:14 untuk Menu Utama (Gambar 3)
  // Klip detik 00:17–00:19 untuk Peta Proyek (Gambar 5)
  const startSec = mode === 'main' ? 8.0 : 17.0;
  const endSec = mode === 'main' ? 14.0 : 19.5;
  const posterSrc = mode === 'main' ? './bg-main-art.png' : './bg-memories-art.png';

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = startSec;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay policy fallback: poster image shows seamlessly
      });
    }

    const handleTimeUpdate = () => {
      if (video.currentTime >= endSec || video.currentTime < startSec - 0.5) {
        video.currentTime = startSec;
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [startSec, endSec]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none bg-[#050706]">
      {/* 1. Base High-Res Poster Backdrop (Guarantees Gambar 3 art is ALWAYS visible instantly) */}
      <img
        src={posterSrc}
        alt="Arknights PRTS Backdrop"
        className="absolute inset-0 w-full h-full object-cover opacity-85"
      />

      {/* 2. Seamless Looping Video Layer */}
      <video
        ref={videoRef}
        src="./arknights-live.mp4"
        poster={posterSrc}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-screen"
      />

      {/* 3. Soft Tactical Vignette on the sides to ensure typography remains 100% crisp & readable */}
      <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-black/90 via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(5,7,6,0.85)_100%)]" />
      <div className="absolute inset-0 scanlines opacity-20" />
    </div>
  );
};
