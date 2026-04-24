import { GLOSSARY_TERMS } from '../data/electionData';
import { useEffect } from 'react';
import { trackPageView } from '../services/firebase';

export default function Glossary() {
  useEffect(() => { trackPageView('GlossaryPage') }, []);

  return (
    <div>
      <h2 style={{ marginBottom: '1.5rem' }}>Elections Glossary</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
        {GLOSSARY_TERMS.map((item) => (
          <div key={item.id} className="card clickable" style={{ padding: '1rem' }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>{item.term}</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{item.def}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
