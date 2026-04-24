import { FAQ_ITEMS } from '../data/electionData';
import FAQItem from '../components/FAQItem';
import { useEffect } from 'react';
import { trackPageView } from '../services/firebase';

export default function FAQ() {
  useEffect(() => { trackPageView('FAQPage') }, []);

  return (
    <div>
      <h2 style={{ marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
      <div>
        {FAQ_ITEMS.map((faq) => (
          <FAQItem key={faq.id} id={faq.id} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}
