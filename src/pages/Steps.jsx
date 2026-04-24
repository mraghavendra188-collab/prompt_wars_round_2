import { VOTING_STEPS } from '../data/electionData';
import TimelineItem from '../components/TimelineItem';
import { useEffect } from 'react';
import { trackPageView } from '../services/firebase';

export default function Steps() {
  useEffect(() => { trackPageView('StepsPage') }, []);

  return (
    <div>
      <h2 style={{ marginBottom: '1.5rem' }}>How to Vote</h2>
      <div className="card" style={{ padding: '2rem 1.25rem 0.5rem 1.25rem' }}>
        <div className="timeline-container">
          {VOTING_STEPS.map((step, index) => (
            <TimelineItem 
              key={step.id}
              step={index + 1}
              title={step.title}
              description={step.description}
              status={step.status}
              badge={step.badge}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
