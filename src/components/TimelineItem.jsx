import { Check } from 'lucide-react'
import styles from './TimelineItem.module.css'

export function TimelineItem({ step, title, description, status, badge }) {
  const isDone = status === 'done'
  
  return (
    <article 
      className={`${styles.item} ${styles[status]}`}
      aria-label={`${title} - status: ${status}`}
    >
      <div className={styles.dot} aria-hidden="true">
        {isDone ? <Check size={14} /> : <span>{step}</span>}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
        <span className={styles.badge}>{badge}</span>
      </div>
    </article>
  )
}

export default TimelineItem
