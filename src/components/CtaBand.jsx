import { Link } from 'react-router-dom';
import business from '../data/business.js';
import { PhoneIcon, ArrowIcon } from './Icons.jsx';
import styles from './CtaBand.module.css';

export default function CtaBand() {
  return (
    <section id="contact" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div>
          <h2 className={styles.title}>
            Ready to make it <span>go away?</span>
          </h2>
          <p className={styles.lead}>Free estimates, upfront prices and fast pickups across {business.serviceAreaLabel}.</p>
        </div>
        <div className={styles.ctas}>
          <Link to="/get-estimate" className="btn btn-amber">
            Get a Free Estimate <ArrowIcon />
          </Link>
          <a href={business.phone.href} className="btn btn-ghost-light">
            <PhoneIcon /> {business.phone.display}
          </a>
        </div>
      </div>
    </section>
  );
}
