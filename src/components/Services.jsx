import { Link } from 'react-router-dom';
import business from '../data/business.js';
import { ServiceIcon, ArrowIcon } from './Icons.jsx';
import styles from './Services.module.css';

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <div>
            <span className="eyebrow">What we haul</span>
            <h2 className="section-title">
              If it&rsquo;s junk, <span className="blue">it&rsquo;s gone.</span>
            </h2>
          </div>
          <p className={styles.headLead}>
            From a single old recliner to a full-house cleanout, one call covers the labor, the loading and the disposal.
          </p>
        </div>

        <div className={styles.grid}>
          {business.services.map((s, i) => (
            <article key={s.key} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.icon}>
                  <ServiceIcon name={s.key} />
                </span>
                <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardText}>{s.text}</p>
            </article>
          ))}
        </div>

        <div className={styles.foot}>
          <p>Don&rsquo;t see your item? We probably take it.</p>
          <Link to="/get-estimate" className="btn btn-primary">
            Get a Free Estimate <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
