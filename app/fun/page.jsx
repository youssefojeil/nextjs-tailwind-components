import RandomButton from '@/components/random-button';
import { LampDemo } from '@/components/ui/lamp';
import React from 'react';

const FunPage = () => {
  return (
    <div>
      <LampDemo title="Will you hire me?" />
      <RandomButton />
    </div>
  );
};

export default FunPage;
