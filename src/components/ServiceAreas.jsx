import business from '../data/business.js';
import { PinIcon, PhoneIcon } from './Icons.jsx';
import styles from './ServiceAreas.module.css';

export default function ServiceAreas() {
  return (
    <section id="service-areas" className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div>
          <span className={`eyebrow ${styles.eyebrow}`}>Service areas</span>
          <h2 className={`section-title ${styles.title}`}>
            Proudly serving <span className={styles.blue}>{business.serviceAreaLabel}</span>
          </h2>
          <p className={styles.lead}>
            Based right here in {business.address.city}, we can usually get to you fast. Not sure if you&rsquo;re in range? Give us a call.
          </p>
          <a href={business.phone.href} className={`btn btn-amber ${styles.btn}`}>
            <PhoneIcon /> {business.phone.display}
          </a>
        </div>
        <ul className={styles.list}>
          {business.serviceAreas.map((c, i) => (
            <li key={c} className={i === 0 ? styles.home : ''}>
              <PinIcon /> {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
