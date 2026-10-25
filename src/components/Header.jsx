import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import business from '../data/business.js';
import Logo from './Logo.jsx';
import { PhoneIcon, MenuIcon, CloseIcon } from './Icons.jsx';
import styles from './Header.module.css';

const nav = [
  { label: 'Services', to: '/#services' },
  { label: 'How It Works', to: '/#how-it-works' },
  { label: 'Results', to: '/#before-after' },
  { label: 'Pricing', to: '/#pricing' },
  { label: 'About', to: '/#about' },
  { label: 'Areas', to: '/#service-areas' },
  { label: 'FAQ', to: '/#faq' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.topbar}>
        <div className={`container ${styles.topbarInner}`}>
          <span>Serving {business.serviceAreaLabel}</span>
          <span className={styles.topbarRight}>{business.hours}</span>
        </div>
      </div>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.brand} aria-label={`${business.name} home`} onClick={() => setOpen(false)}>
          <Logo height={40} />
        </Link>

        <nav className={styles.nav} aria-label="Main">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className={styles.navLink}>
              {n.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <a href={business.phone.href} className={styles.phone}>
            <PhoneIcon />
            <span>{business.phone.display}</span>
          </a>
          <Link to="/get-estimate" className={`btn btn-primary ${styles.cta}`}>
            Get a Free Estimate
          </Link>
          <button
            type="button"
            className={styles.burger}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}>
        <nav aria-label="Mobile">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className={styles.drawerLink} onClick={() => setOpen(false)}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className={styles.drawerCtas}>
          <a href={business.phone.href} className="btn btn-outline">
            <PhoneIcon /> {business.phone.display}
          </a>
          <Link to="/get-estimate" className="btn btn-primary" onClick={() => setOpen(false)}>
            Get a Free Estimate
          </Link>
        </div>
      </div>
    </header>
  );
}
