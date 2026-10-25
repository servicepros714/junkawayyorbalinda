import { useState } from 'react';
import business from '../data/business.js';
import styles from './BeforeAfter.module.css';

function Job({ job }) {
  const [view, setView] = useState('before');
  return (
    <article className={styles.card}>
      <button
        type="button"
        className={styles.photos}
        aria-label={`Show ${view === 'before' ? 'after' : 'before'} photo`}
        onClick={() => setView(view === 'before' ? 'after' : 'before')}
      >
        <span className={`${styles.photo} ${view === 'before' ? styles.active : ''}`}>
          <img src={job.before} alt={`${job.title} before`} width="736" height="981" loading="lazy" />
          <span className={`${styles.tag} ${styles.tagBefore}`}>Before</span>
        </span>
        <span className={`${styles.photo} ${view === 'after' ? styles.active : ''}`}>
          <img src={job.after} alt={`${job.title} after`} width="736" height="981" loading="lazy" />
          <span className={`${styles.tag} ${styles.tagAfter}`}>After</span>
        </span>
      </button>

      <div className={styles.toggle} role="group" aria-label={`${job.title} photo`}>
        {['before', 'after'].map((v) => (
          <button
            key={v}
            type="button"
            aria-pressed={view === v}
            className={view === v ? styles.on : ''}
            onClick={() => setView(v)}
          >
            {v}
          </button>
        ))}
      </div>

      <h3 className={styles.title}>{job.title}</h3>
      <p className={styles.text}>{job.text}</p>
    </article>
  );
}

export default function BeforeAfter() {
  const jobs = business.beforeAfter || [];
  if (jobs.length === 0) return null;

  return (
    <section id="before-after" className={styles.section}>
      <div className="container">
        <div className="center">
          <span className="eyebrow">Real jobs</span>
          <h2 className="section-title">
            Before &amp; <span className="blue">after</span>
          </h2>
          <p className="section-lead">Real cleanouts by our crew. Tap a photo set to flip between before and after.</p>
        </div>
        <div className={styles.grid}>
          {jobs.map((j) => (
            <Job key={j.title} job={j} />
          ))}
        </div>
      </div>
    </section>
  );
}
