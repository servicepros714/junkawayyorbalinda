import { useEffect } from 'react';
import business from '../data/business.js';
import EstimateWizard from '../components/EstimateWizard.jsx';

export default function GetEstimate() {
  useEffect(() => {
    const prev = document.title;
    document.title = `Free Estimate | ${business.name}`;
    return () => {
      document.title = prev;
    };
  }, []);

  return <EstimateWizard />;
}
