import React, { useEffect, useState } from 'react';

interface StoryProgressBarProps {
  duration: number; // Durasi untuk setiap story dalam milidetik
  isActive: boolean; // Apakah progress bar ini sedang aktif
  onComplete: () => void; // Callback ketika durasi selesai
}

export default function StoryProgressBar({
  duration,
  isActive,
  onComplete,
}: StoryProgressBarProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setProgress(0);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          onComplete();
          return 100;
        }
        return prev + (100 / (duration / 100));
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isActive, duration, onComplete]);

  return (
    <div className="relative w-full h-1 bg-gray-200">
      <div
        className="absolute top-0 left-0 h-full bg-blue-500 transition-all"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
