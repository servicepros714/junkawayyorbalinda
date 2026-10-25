import { Link } from 'react-router-dom';
import business from '../data/business.js';
import { PhoneIcon, ArrowIcon, CheckIcon } from './Icons.jsx';
import styles from './Hero.module.css';

const points = ['Upfront, all-in pricing', 'Same-week pickups', 'We do all the lifting'];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <span className={styles.badge}>
            <span className={styles.dot} /> Now booking in {business.address.city}
          </span>
          <h1 className={styles.title}>
            Point at it.
            <span className={styles.blue}>We haul it</span>
            <span className={styles.away}>away.</span>
          </h1>
          <p className={styles.lead}>
            Furniture, appliances, garage clutter and yard debris — cleared out fast by a friendly local crew. Serving {business.serviceAreaLabel}.
          </p>
          <ul className={styles.points}>
            {points.map((p) => (
              <li key={p}>
                <CheckIcon /> {p}
              </li>
            ))}
          </ul>
          <div className={styles.ctas}>
            <Link to="/get-estimate" className="btn btn-primary">
              Get a Free Estimate <ArrowIcon />
            </Link>
            <a href={business.phone.href} className="btn btn-outline">
              <PhoneIcon /> {business.phone.display}
            </a>
          </div>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <div className={styles.panel}>
            <div className={styles.speed}>
              <span /><span /><span /><span />
            </div>
            <svg className={styles.truck} viewBox="0 0 420 220">
              <rect x="20" y="40" width="250" height="130" rx="8" fill="#ffffff" />
              <rect x="20" y="40" width="250" height="130" rx="8" fill="none" stroke="#121212" strokeWidth="6" />
              <path d="M40 150h30v-30h-30zM78 150h44v-52h-44zM130 150h38v-38h-38zM176 150h70v-70h-70z" fill="#004aad" opacity="0.9" />
              <path d="M176 80l35 20 35-20" stroke="#ffffff" strokeWidth="4" fill="none" />
              <path d="M270 80h70l45 45v45h-115z" fill="#121212" />
              <path d="M290 96h44l30 30h-74z" fill="#cfe0fb" />
              <rect x="20" y="166" width="380" height="14" rx="4" fill="#121212" />
              <circle cx="90" cy="186" r="24" fill="#121212" />
              <circle cx="90" cy="186" r="10" fill="#ffb400" />
              <circle cx="320" cy="186" r="24" fill="#121212" />
              <circle cx="320" cy="186" r="10" fill="#ffb400" />
            </svg>
            <div className={styles.meter}>
              <div className={styles.meterLabel}>Priced by truck space</div>
              <div className={styles.meterTrack}>
                <span>Min</span>
                <span>1/4</span>
                <span>1/2</span>
                <span>3/4</span>
                <span>Full</span>
              </div>
            </div>
          </div>
          <div className={styles.stamp}>
            <strong>Free</strong>
            <span>Estimates</span>
          </div>
        </div>
      </div>
    </section>
  );
}
