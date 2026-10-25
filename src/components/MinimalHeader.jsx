import { Link } from 'react-router-dom';
import business from '../data/business.js';
import Logo from './Logo.jsx';
import { PhoneIcon } from './Icons.jsx';
import styles from './MinimalHeader.module.css';

export default function MinimalHeader() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.brand} aria-label={`${business.name} home`}>
          <Logo height={36} />
        </Link>
        <a href={business.phone.href} className={styles.phone}>
          <PhoneIcon />
          <span>{business.phone.display}</span>
        </a>
      </div>
    </header>
  );
}
