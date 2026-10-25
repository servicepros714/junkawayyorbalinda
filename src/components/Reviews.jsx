import business from '../data/business.js';
import { StarIcon } from './Icons.jsx';
import styles from './Reviews.module.css';

// Renders only when real reviews are added to business.reviews
export default function Reviews() {
  const reviews = business.reviews || [];
  if (reviews.length === 0) return null;

  return (
    <section id="reviews" className={styles.section}>
      <div className="container">
        <div className="center">
          <span className="eyebrow">Reviews</span>
          <h2 className="section-title">
            What neighbors <span className="blue">are saying</span>
          </h2>
        </div>
        <div className={styles.grid}>
          {reviews.map((r, i) => (
            <figure key={`${r.name}-${i}`} className={styles.card}>
              <div className={styles.stars} aria-label="5 out of 5 stars">
                {[0, 1, 2, 3, 4].map((n) => (
                  <StarIcon key={n} />
                ))}
              </div>
              <blockquote className={styles.text}>{r.text}</blockquote>
              <figcaption className={styles.who}>
                <span className={styles.avatar}>{r.name.charAt(0)}</span>
                <span>
                  <strong>{r.name}</strong>
                  {r.city && <small>{r.city}</small>}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
