import RandomButton from '@/components/random-button';
import { LampDemo } from '@/components/ui/lamp';
import React from 'react';

const FunPage = () => {
  return (
    <div className="bg-gradient-to-br from-black to-slate-500">
      <LampDemo title="Will you hire me?" />
      <RandomButton />
    </div>
  );
};

export default FunPage;
