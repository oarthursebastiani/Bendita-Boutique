
import React, { useEffect, useState } from 'react';

const ScrollProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentPosition = window.scrollY;
      const scrollPercentage = (currentPosition / totalHeight) * 100;
      setProgress(scrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-[100] bg-espresso/30">
      <div 
        className="h-full bg-gold shadow-[0_0_10px_#C5A059] transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
