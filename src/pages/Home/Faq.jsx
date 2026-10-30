import FaqItem from '../../components/ui/FaqItem';
import { faqItems } from '../../data';
import { container, eyebrow } from '../../styles/ui';

export default function Faq() {
  return (
    <section
      className={`${container} faq-section section grid grid-cols-1 gap-4 py-16 md:grid-cols-[1fr_1.2fr] md:gap-10 md:py-[94px] lg:gap-[110px] lg:py-[130px]`}
    >
      <div>
        <span className={eyebrow}>A LITTLE CLARITY</span>
        <h2 className="max-[760px]:mb-2.5">
          Care starts with
          <br />
          a conversation.
        </h2>
      </div>
      <div className="faq-list">
        {faqItems.map(([q, a], i) => (
          <FaqItem key={q} q={q} a={a} i={i} />
        ))}
      </div>
    </section>
  );
}
