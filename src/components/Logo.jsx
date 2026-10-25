import business from '../data/business.js';
import styles from './Logo.module.css';

export default function Logo({ variant = 'dark', height = 44 }) {
  const { logo, name } = business;
  const width = Math.round((logo.width / logo.height) * height);
  return (
    <img
      className={styles.logo}
      src={variant === 'light' ? logo.light : logo.src}
      alt={name}
      width={width}
      height={height}
      style={{ width: `${width}px`, height: `${height}px` }}
    />
  );
}
