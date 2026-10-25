import { Link } from 'react-router-dom';
import business from '../data/business.js';
import { CheckIcon, PhoneIcon, ArrowIcon } from './Icons.jsx';
import styles from './Pricing.module.css';

export default function Pricing() {
  return (
    <section id="pricing" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <span className="eyebrow">Upfront pricing</span>
        <h2 className="section-title">
          One price. <span className="blue">Everything included.</span>
        </h2>
        <p className="section-lead">
          You only pay for the space your items take up in our truck. We confirm the price before we start, and it never changes after.
        </p>

        <ul className={styles.list}>
          {business.pricingIncludes.map((item) => (
            <li key={item}>
              <span className={styles.check}>
                <CheckIcon />
              </span>
              {item}
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
    </section>
  );
}
