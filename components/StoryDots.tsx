// components/StoryDots.tsx
import React from 'react';

interface StoryDotsProps {
  stories: any[];
  currentIndex: number;
}

export default function StoryDots({ stories, currentIndex }: StoryDotsProps) {
  return (
    <div className="fixed bottom-4 left-0 right-0 flex justify-center items-center space-x-2 z-10">
      {stories.map((_, index) => (
        <div
          key={index}
          className={`w-3 h-3 rounded-full ${
            index === currentIndex ? 'bg-white' : 'bg-gray-500'
          }`}
        ></div>
      ))}
    </div>
  );
}
