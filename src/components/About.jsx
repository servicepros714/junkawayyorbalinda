import business from '../data/business.js';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <span className="eyebrow">About us</span>
        <h2 className="section-title">
          Your <span className="blue">{business.address.city}</span> junk crew
        </h2>
        <p className={styles.copy}>
          {business.name} started with a simple idea: getting rid of junk shouldn&rsquo;t take a whole weekend, a borrowed truck and three trips to the dump. Our crews show up on time, give you a straight price, and treat your home like it&rsquo;s our own.
        </p>
        <p className={styles.copy}>
          We donate what can be reused, recycle what we can, and leave every space swept and ready for whatever comes next — whether that&rsquo;s a move, a remodel or just room to breathe.
        </p>
        <div className={styles.values}>
          <div>
            <strong>On time</strong>
            <span>We call ahead and show up when we say.</span>
          </div>
          <div>
            <strong>Straight pricing</strong>
            <span>The quote is the price. Period.</span>
          </div>
          <div>
            <strong>Careful crews</strong>
            <span>Walls, floors and doorways protected.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
