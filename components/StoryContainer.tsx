import React, { useState } from 'react';
import StoryProgressBar from './StoryProgressBar';
import StoryDots from './StoryDots';

interface Story {
  html: React.ReactNode;
  duration: number; // Durasi untuk setiap story
}

interface StoryContainerProps {
  stories: Story[];
}

export default function StoryContainer({ stories }: StoryContainerProps) {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  const currentStory = stories[currentStoryIndex];

  const goToNextStory = () => {
    if (currentStoryIndex < stories.length - 1) {
      setCurrentStoryIndex(currentStoryIndex + 1);
    }
  };

  const goToPreviousStory = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(currentStoryIndex - 1);
    }
  };

  return (
    <div className="relative flex flex-col w-full h-screen bg-white text-black">
      {/* Progress Indicators */}
      <div className="fixed top-0 left-0 w-full flex space-x-1 p-2 z-10">
        {stories.map((story, index) => (
          <StoryProgressBar
            key={index}
            duration={story.duration}
            isActive={index === currentStoryIndex}
            onComplete={goToNextStory}
          />
        ))}
      </div>

      {/* Konten Story */}
      <div className="flex-grow overflow-y-auto p-1">{currentStory.html}</div>

      {/* Tombol Panah Kiri */}
      {currentStoryIndex > 0 && (
        <button
          onClick={goToPreviousStory}
          className="fixed left-1 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white rounded p-2 z-10"
        >
          ←
        </button>
      )}

      {/* Tombol Panah Kanan */}
      {currentStoryIndex < stories.length - 1 && (
        <button
          onClick={goToNextStory}
          className="fixed right-1 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white rounded p-2 z-5"
        >
          →
        </button>
      )}

      {/* Dots */}
      <div className="fixed bottom-4 w-full">
        <StoryDots stories={stories} currentIndex={currentStoryIndex} />
      </div>
    </div>
  );
}




// // components/StoryContainer.tsx
// import { useEffect, useState } from "react";
// import StoryDots from "./StoryDots";

// export default function StoryContainer({ stories }: { stories: any[] }) {
//   const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
//   const [progress, setProgress] = useState(0);

//   const currentStory = stories[currentStoryIndex];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress((prev) => prev + 1);
//     }, currentStory.duration / 100);

//     if (progress >= 100) {
//       setProgress(0);
//       goToNextStory();
//     }

//     return () => clearInterval(interval);
//   }, [progress, currentStory]);

//   const goToNextStory = () => {
//     if (currentStoryIndex < stories.length - 1) {
//       setCurrentStoryIndex(currentStoryIndex + 1);
//       setProgress(0);
//     }
//   };

//   const goToPreviousStory = () => {
//     if (currentStoryIndex > 0) {
//       setCurrentStoryIndex(currentStoryIndex - 1);
//       setProgress(0);
//     }
//   };

//   return (
//     <div className="relative w-full h-screen bg-black text-white">
//       {/* Konten Story */}
//       <div className="w-full h-full p-1 overflow-y-auto">
//         {currentStory.html}
//       </div>

//       {/* Tombol Panah */}
//       <button
//         onClick={goToPreviousStory}
//         className="fixed left-1 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white rounded p-2 z-10"
//       >
//         ←
//       </button>
//       <button
//         onClick={goToNextStory}
//         className="fixed right-1 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white rounded p-2 z-5"
//       >
//         →
//       </button>

//       {/* Progress Bar */}
//       {/* <StoryProgressBar progress={progress} /> */}
//       {/* Dots */}
//       <StoryDots stories={stories} currentIndex={currentStoryIndex} />
//     </div>
//   );
// }