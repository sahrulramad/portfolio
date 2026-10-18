import React, { useRef, useEffect } from 'react';

export const ArknightsLiveWallpaper: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Klip detik 00:08–00:14 untuk Menu Utama (Gambar 3)
  const startSec = 8.0;
  const endSec = 14.0;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = startSec;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
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
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none bg-[#06080A]">
      {/* 1. Looping Video Wallpaper (Dimmed & softened so text is 100% sharp) */}
      <video
        ref={videoRef}
        src="./arknights-live.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-45 brightness-75 contrast-110 pointer-events-none"
      />

      {/* 2. Deep Left Vignette (Protects Title, Quote & Syahrul Ramadhon's Identity) */}
      <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-black/95 via-black/70 to-transparent pointer-events-none" />

      {/* 3. Deep Right Vignette (Protects Menu Items from any white glare) */}
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-black/95 via-black/75 to-transparent pointer-events-none" />

      {/* 4. Center Subtle Dimming & Radial Vignette */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(5,7,6,0.9)_100%)] pointer-events-none" />

      {/* 5. CRT Scanlines Texture */}
      <div className="absolute inset-0 scanlines opacity-15 pointer-events-none" />
    </div>
  );
};
