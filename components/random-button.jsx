'use client';

import React, { useState } from 'react';

import { Spotlight } from '@/components/ui/spotlight';

const RandomButton = () => {
  const [noButtonPosition, setNoButtonPosition] = useState({
    top: 0,
    right: 800,
  });

  const [yes, setYes] = useState(false);

  const moveButton = () => {
    const newPosition = {
      top: Math.random() * (window.innerHeight - 50),
      right: Math.random() * (window.innerWidth - 50),
    };
    setNoButtonPosition(newPosition);
  };

  const buttonStyle = {
    position: 'absolute',
    top: `${noButtonPosition.top}px`,
    right: `${noButtonPosition.right}px`,
    transition: 'top 0.1s, left 0.1s', // Smooth transition for button movement
  };

  const onYes = () => {
    setYes(true);
  };

  if (yes) {
    return (
      <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Woohoooo! <br /> Welcome to the team!
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto"></p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      <div className="flex justify-center  min-h-screen">
        <button
          onClick={() => onYes()}
          className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          Yes
        </button>

        <button
          style={buttonStyle}
          onMouseOver={moveButton}
          onClick={() => alert('You clicked No!')}
          className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          No
        </button>
      </div>
    </div>
  );
};

export default RandomButton;
