import { useNavigate } from 'react-router-dom';
import { CalendarDays, ListChecks, HelpCircle, MessageSquare, BookOpen, MapPin } from 'lucide-react';
import { useEffect } from 'react';
import { trackPageView } from '../services/firebase';
import styles from './Home.module.css';

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => { trackPageView('HomePage') }, []);

  const features = [
    { title: 'Timeline', icon: <CalendarDays size={32} color="var(--primary)" aria-hidden="true"/>, path: '/timeline' },
    { title: 'How to Vote', icon: <ListChecks size={32} color="var(--primary)" aria-hidden="true"/>, path: '/steps' },
    { title: 'FAQ', icon: <HelpCircle size={32} color="var(--primary)" aria-hidden="true"/>, path: '/faq' },
    { title: 'Ask AI', icon: <MessageSquare size={32} color="var(--primary)" aria-hidden="true"/>, path: '/chat' },
    { title: 'Glossary', icon: <BookOpen size={32} color="var(--primary)" aria-hidden="true"/>, path: '/glossary' },
    { title: 'Map', icon: <MapPin size={32} color="var(--primary)" aria-hidden="true"/>, path: '/map' },
  ];

  return (
    <div>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', textAlign: 'center' }}>ElectEd</h1>
      
      <div className={`card bg-gradient-primary ${styles.heroCard}`}>
        <h2>Understand Your Election</h2>
        <p>Your interactive guide to voting and democracy.</p>
      </div>

      <div className={styles.grid}>
        {features.map((item, idx) => (
          <button 
            key={idx} 
            className={`card clickable ${styles.featureCard}`} 
            onClick={() => navigate(item.path)}
          >
            {item.icon}
            <span>{item.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
