import { useState } from 'react';
import { Link } from 'react-router-dom';
import business from '../data/business.js';
import { CheckIcon, PhoneIcon } from './Icons.jsx';
import styles from './EstimateWizard.module.css';

const STEPS = ['Location', 'Junk Type', 'Contact'];

const LOCATION_OPTIONS = [
  { value: 'yes', label: 'Yes', sublabel: 'I’m in or near Orange County, CA' },
  { value: 'no', label: 'No', sublabel: 'I’m outside the service area' },
];

const JUNK_OPTIONS = [
  { value: 'household', label: 'Household Items', sublabel: 'Furniture, appliances, mattresses' },
  { value: 'storage', label: 'Storage Unit', sublabel: 'Full or partial unit cleanouts' },
  { value: 'construction', label: 'Construction Debris', sublabel: 'Drywall, wood, tile, remodel waste' },
  { value: 'misc', label: 'Miscellaneous', sublabel: 'Yard waste, hot tubs, everything else' },
];

function formatPhone(digits) {
  const d = digits.slice(0, 10);
  if (d.length === 0) return '';
  if (d.length < 4) return `(${d}`;
  if (d.length < 7) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
}

const ALLOWED_KEYS = ['Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight', 'Home', 'End', 'Enter'];

export default function EstimateWizard() {
  const [step, setStep] = useState(0);
  const [inArea, setInArea] = useState('');
  const [junkTypes, setJunkTypes] = useState([]);
  const [name, setName] = useState('');
  const [phoneDigits, setPhoneDigits] = useState('');
  const [details, setDetails] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const canNext =
    (step === 0 && inArea !== '') ||
    (step === 1 && junkTypes.length > 0) ||
    (step === 2 && name.trim().length > 1 && phoneDigits.length === 10);

  const toggleJunk = (v) =>
    setJunkTypes((prev) => (prev.includes(v) ? prev.filter((x) => x !== v) : [...prev, v]));

  const onPhoneKeyDown = (e) => {
    if (e.metaKey || e.ctrlKey || ALLOWED_KEYS.includes(e.key)) return;
    if (!/^\d$/.test(e.key)) e.preventDefault();
  };

  const onPhonePaste = (e) => {
    e.preventDefault();
    let pasted = (e.clipboardData.getData('text') || '').replace(/\D/g, '');
    if (pasted.length === 11 && pasted.startsWith('1')) pasted = pasted.slice(1);
    setPhoneDigits(pasted.slice(0, 10));
  };

  const onPhoneChange = (e) => {
    let digits = e.target.value.replace(/\D/g, '');
    if (digits.length === 11 && digits.startsWith('1')) digits = digits.slice(1);
    setPhoneDigits(digits.slice(0, 10));
  };

  const submit = async () => {
    setSubmitting(true);
    const payload = {
      business: business.name,
      inServiceArea: inArea === 'yes',
      junkTypes: junkTypes.map((v) => JUNK_OPTIONS.find((o) => o.value === v)?.label),
      name: name.trim(),
      phone: formatPhone(phoneDigits),
      details: details.trim(),
      submittedAt: new Date().toISOString(),
    };
    try {
      if (business.estimateWebhook) {
        await fetch(business.estimateWebhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      }
    } catch (err) {
      // Network issues shouldn't block the customer — the confirmation still offers a direct call.
      console.error('Estimate submit failed', err);
    }
    setSubmitting(false);
    setDone(true);
  };

  const next = () => {
    if (!canNext) return;
    if (step < 2) setStep(step + 1);
    else submit();
  };

  if (done) {
    return (
      <div className={styles.wrap}>
        <div className={styles.success}>
          <span className={styles.successIcon}>
            <CheckIcon />
          </span>
          <h1 className={styles.successTitle}>Thanks, {name.trim().split(' ')[0]}!</h1>
          <p className={styles.successText}>
            We got your request and will reach out shortly with your free estimate. Need it sooner? Give us a call.
          </p>
          <div className={styles.successCtas}>
            <a href={business.phone.href} className="btn btn-primary">
              <PhoneIcon /> {business.phone.display}
            </a>
            <Link to="/" className="btn btn-outline">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.trust}>
        <span className={styles.trustIcon}>
          <CheckIcon />
        </span>
        Free, No-Obligation Estimate
      </div>

      <ol className={styles.progress}>
        {STEPS.map((label, i) => {
          const state = i < step ? 'complete' : i === step ? 'current' : 'upcoming';
          return (
            <li
              key={label}
              className={`${styles.progressItem} ${styles[state]}`}
              aria-current={state === 'current' ? 'step' : undefined}
            >
              <span className={styles.progressCircle}>
                {state === 'complete' ? <CheckIcon /> : i + 1}
              </span>
              <span className={styles.progressLabel}>{label}</span>
              <span className="sr-only">
                {state === 'complete' ? ' (completed)' : state === 'current' ? ' (current step)' : ' (upcoming)'}
              </span>
            </li>
          );
        })}
      </ol>

      <div className={styles.card}>
        {step === 0 && (
          <div className={styles.stepBody}>
            <h1 className={styles.question}>Are you located in {business.serviceAreaLabel}?</h1>
            <div className={styles.optionsTwo} role="radiogroup" aria-label="Service area">
              {LOCATION_OPTIONS.map((o) => {
                const selected = inArea === o.value;
                return (
                  <button
                    key={o.value}
                    type="button"
                    role="radio"
                    aria-checked={selected}
                    className={`${styles.option} ${selected ? styles.selected : ''}`}
                    onClick={() => setInArea(o.value)}
                  >
                    <span className={styles.wizardOptionTop}>
                      <span className={styles.checkbox}>{selected && <CheckIcon />}</span>
                      <span className={styles.label}>{o.label}</span>
                    </span>
                    <span className={styles.sublabel}>{o.sublabel}</span>
                  </button>
                );
              })}
            </div>
            <div className={`${styles.notice} ${inArea === 'no' ? styles.noticeShow : ''}`} aria-live="polite">
              <p>
                No problem — we still may be able to help. A small trip fee may apply for locations outside our main service area. We&rsquo;ll confirm when we reach out.
              </p>
            </div>
          </div>
        )}

        {step === 1 && (
          <div className={styles.stepBody}>
            <h1 className={styles.question}>What kind of junk are we hauling?</h1>
            <p className={styles.hint}>Select all that apply.</p>
            <div className={styles.optionsFour} role="group" aria-label="Junk type">
              {JUNK_OPTIONS.map((o) => {
                const selected = junkTypes.includes(o.value);
                return (
                  <button
                    key={o.value}
                    type="button"
                    role="checkbox"
                    aria-checked={selected}
                    className={`${styles.option} ${selected ? styles.selected : ''}`}
                    onClick={() => toggleJunk(o.value)}
                  >
                    <span className={styles.wizardOptionTop}>
                      <span className={styles.checkbox}>{selected && <CheckIcon />}</span>
                      <span className={styles.label}>{o.label}</span>
                    </span>
                    <span className={styles.sublabel}>{o.sublabel}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {step === 2 && (
          <form
            className={styles.stepBody}
            onSubmit={(e) => {
              e.preventDefault();
              next();
            }}
          >
            <h1 className={styles.question}>Where should we send your quote?</h1>
            <div className={styles.fields}>
              <label className={styles.field}>
                <span>Name</span>
                <input
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                />
              </label>
              <label className={styles.field}>
                <span>Phone</span>
                <input
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel-national"
                  value={formatPhone(phoneDigits)}
                  onKeyDown={onPhoneKeyDown}
                  onPaste={onPhonePaste}
                  onChange={onPhoneChange}
                  placeholder="(714) 555-0123"
                  maxLength={14}
                  required
                />
              </label>
              <label className={`${styles.field} ${styles.fieldFull}`}>
                <span>Details</span>
                <textarea
                  rows={4}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="What needs to go, where it is, and any timing preferences"
                />
              </label>
            </div>
            <button type="submit" hidden aria-hidden="true" tabIndex={-1} />
          </form>
        )}

        <div className={styles.footer}>
          {step > 0 ? (
            <button type="button" className={styles.back} onClick={() => setStep(step - 1)}>
              Back
            </button>
          ) : (
            <span />
          )}
          <button
            type="button"
            className={styles.next}
            disabled={!canNext || submitting}
            onClick={next}
          >
            {step < 2 ? 'Next' : submitting ? 'Sending…' : 'Get Your Quote'}
          </button>
        </div>
      </div>
    </div>
  );
}
