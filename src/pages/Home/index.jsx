import { useEffect, useState } from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Modal from '../../components/ui/Modal';
import { useModal } from '../../hooks/useModal';
import Hero from './Hero';
import QuickActions from './QuickActions';
import Services from './Services';
import Departments from './Departments';
import Specialists from './Specialists';
import Commitment from './Commitment';
import Packages from './Packages';
import Telemedicine from './Telemedicine';
import Faq from './Faq';
import Contact from './Contact';

export default function Home() {
  const { modal, setModal, filter, setFilter, open } = useModal();
  const [active, setActive] = useState('home');

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { rootMargin: '-20% 0px -60% 0px' },
    );
    document.querySelectorAll('section[id]').forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.title = 'Happy Healthy Hospital · Your partner in wellness';
  }, []);

  return (
    <>
      <Header active={active} onOpen={open} />
      <main id="main" tabIndex={-1}>
        <Hero onOpen={open} />
        <QuickActions onOpen={open} />
        <Services onOpen={open} />
        <Departments onOpen={open} setFilter={setFilter} />
        <Specialists onOpen={open} />
        <Commitment />
        <Packages onOpen={open} />
        <Telemedicine onOpen={open} />
        <Faq />
        <Contact onOpen={open} />
      </main>
      <Footer onOpen={open} />
      <Modal
        modal={modal}
        setModal={setModal}
        filter={filter}
        setFilter={setFilter}
      />
    </>
  );
}
