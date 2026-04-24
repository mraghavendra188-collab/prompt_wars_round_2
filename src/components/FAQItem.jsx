import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import styles from './FAQItem.module.css'

export function FAQItem({ id, question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`card ${styles.item}`}>
      <button
        id={`btn-${id}`}
        className={styles.header}
        aria-expanded={open}
        aria-controls={`panel-${id}`}
        onClick={() => setOpen(p => !p)}
      >
        <span>{question}</span>
        <ChevronDown 
          size={20} 
          className={open ? styles.rotate : ''} 
          aria-hidden="true" 
        />
      </button>
      <div
        id={`panel-${id}`}
        className={`${styles.content} ${open ? styles.show : ''}`}
        role="region"
        aria-labelledby={`btn-${id}`}
        hidden={!open}
      >
        <p>{answer}</p>
      </div>
    </div>
  )
}

export default FAQItem
