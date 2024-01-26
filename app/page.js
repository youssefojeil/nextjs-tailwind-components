import CallToAction from '@/components/cta/call-to-action';
import CallToActionWithBackgroundImage from '@/components/cta/call-to-action-background-img';
import Header from '@/components/header/header';
import Modal from '@/components/modal/modal';
import { ModalProvider } from '@/components/modal/modal-provider';
import Navbar from '@/components/nav/navbar';

import { title, description, links, stats } from '@/constants/headerItems';

export default function Home() {
  return (
    <main>
      <Navbar />

      <Header
        title={title}
        description={description}
        links={links}
        stats={stats}
      />

      <CallToAction />

      <CallToActionWithBackgroundImage />

      <div>
        <ModalProvider />
      </div>
    </main>
  );
}
