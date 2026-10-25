const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

export const PhoneIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
  </svg>
);

export const ArrowIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const CheckIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} strokeWidth={3} {...p}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
);

export const PinIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const ClockIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const MenuIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const CloseIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const PlusIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} strokeWidth={2.5} {...p}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const StarIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z" />
  </svg>
);

const serviceIcons = {
  furniture: (
    <>
      <path d="M4 11V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3" />
      <path d="M2 13a2 2 0 0 1 4 0v2h12v-2a2 2 0 0 1 4 0v5H2z" />
      <path d="M5 18v2M19 18v2" />
    </>
  ),
  appliance: (
    <>
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M5 9h14M9 5v1.5M9 12v3" />
    </>
  ),
  garage: (
    <>
      <path d="M3 21V9l9-6 9 6v12" />
      <path d="M7 21v-9h10v9M7 15h10M7 18h10" />
    </>
  ),
  estate: (
    <>
      <path d="M3 21h18M5 21V10l7-5 7 5v11" />
      <path d="M10 21v-5h4v5" />
    </>
  ),
  yard: (
    <>
      <path d="M12 22V12" />
      <path d="M12 12c0-4 3-7 7-7 0 4-3 7-7 7zM12 15c0-3-2.5-5.5-6-5.5 0 3 2.5 5.5 6 5.5z" />
    </>
  ),
  construction: (
    <>
      <path d="M2 20h20M4 20v-6h6v6M14 20V9h6v11" />
      <path d="M4 14l3-4 3 4M14 9l3-5 3 5" />
    </>
  ),
  hottub: (
    <>
      <path d="M3 12h18v4a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z" />
      <path d="M8 8c0-1.5 1-1.5 1-3M12 8c0-1.5 1-1.5 1-3M16 8c0-1.5 1-1.5 1-3" />
    </>
  ),
  commercial: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2M10 21v-3h4v3" />
    </>
  ),
};

export const ServiceIcon = ({ name, ...p }) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    {serviceIcons[name]}
  </svg>
);
