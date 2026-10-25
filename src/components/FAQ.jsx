import { useState } from 'react';
import business from '../data/business.js';
import { PlusIcon } from './Icons.jsx';
import styles from './FAQ.module.css';

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className="center">
          <span className="eyebrow">FAQ</span>
          <h2 className="section-title">
            Questions? <span className="blue">Answered.</span>
          </h2>
        </div>

        <div className={styles.list}>
          {business.faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className={`${styles.item} ${isOpen ? styles.open : ''}`}>
                <button
                  type="button"
                  className={styles.q}
                  aria-expanded={isOpen}
                  aria-controls={`faq-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span>{f.q}</span>
                  <span className={styles.icon}>
                    <PlusIcon />
                  </span>
                </button>
                <div id={`faq-${i}`} className={styles.a} role="region">
                  <div className={styles.aInner}>
                    <p>{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
