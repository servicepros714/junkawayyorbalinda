import { Link } from 'react-router-dom';
import business from '../data/business.js';
import { PhoneIcon } from './Icons.jsx';
import styles from './MobileCallBar.module.css';

export default function MobileCallBar() {
  return (
    <div className={styles.bar}>
      <a href={business.phone.href} className={styles.call}>
        <PhoneIcon /> Call Now
      </a>
      <Link to="/get-estimate" className={styles.quote}>
        Free Estimate
      </Link>
    </div>
  );
}
