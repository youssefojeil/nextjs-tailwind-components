import Brands from '@/components/content/brands';
import CallToAction from '@/components/cta/call-to-action';
import CallToActionWithBackgroundImage from '@/components/cta/call-to-action-background-img';
import Header from '@/components/header/header';
import Modal from '@/components/modal/modal';
import { ModalProvider } from '@/components/modal/modal-provider';
import Navbar from '@/components/nav/navbar';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { items } from '@/constants/movingCardItems';

import { title, description, links, stats } from '@/constants/headerItems';
import { ParallaxScrollDemo } from '@/components/content/parallax-scroll-demo';
import { LampDemo } from '@/components/ui/lamp';
import { LayoutGridDemo } from '@/components/content/layout-grid-demo';

export default function Home() {
  return (
    <main>
      <LampDemo />
      <Header
        title={title}
        description={description}
        links={links}
        stats={stats}
      />

      <CallToAction />
      <Brands />
      {/* <CallToActionWithBackgroundImage /> */}

      <div className=" flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={items} direction="right" speed="slow" />
      </div>

      <LayoutGridDemo />
    </main>
  );
}
