import { Link } from 'react-router-dom';
import business from '../data/business.js';
import Logo from './Logo.jsx';
import { PhoneIcon, PinIcon, ClockIcon } from './Icons.jsx';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.streakBand} aria-hidden="true" />
      <div className={`container ${styles.grid}`}>
        <div className={styles.brandCol}>
          <Logo variant="light" height={42} />
          <p className={styles.blurb}>
            Locally run junk removal for homes and businesses in {business.serviceAreaLabel}. Upfront pricing, careful crews, gone the same visit.
          </p>
        </div>

        <div>
          <h3 className={styles.heading}>Services</h3>
          <ul className={styles.list}>
            {business.services.slice(0, 6).map((s) => (
              <li key={s.key}>
                <Link to="/#services">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className={styles.heading}>Company</h3>
          <ul className={styles.list}>
            <li><Link to="/#how-it-works">How It Works</Link></li>
            <li><Link to="/#pricing">Pricing</Link></li>
            <li><Link to="/#about">About Us</Link></li>
            <li><Link to="/#faq">FAQ</Link></li>
            <li><Link to="/get-estimate">Free Estimate</Link></li>
          </ul>
        </div>

        <div>
          <h3 className={styles.heading}>Contact</h3>
          <ul className={`${styles.list} ${styles.contact}`}>
            <li>
              <PhoneIcon />
              <a href={business.phone.href}>{business.phone.display}</a>
            </li>
            <li>
              <PinIcon />
              <span>{business.address.city}, {business.address.region}</span>
            </li>
            <li>
              <ClockIcon />
              <span>{business.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <span>&copy; {year} {business.name}. All rights reserved.</span>
        <span>Serving {business.serviceAreaLabel}</span>
      </div>
    </footer>
  );
}
