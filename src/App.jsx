import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import MinimalHeader from './components/MinimalHeader.jsx';
import Footer from './components/Footer.jsx';
import MobileCallBar from './components/MobileCallBar.jsx';
import SchemaMarkup from './components/SchemaMarkup.jsx';
import Home from './pages/Home.jsx';
import GetEstimate from './pages/GetEstimate.jsx';

export default function App() {
  const { pathname, hash } = useLocation();
  const isEstimate = pathname === '/get-estimate';

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <>
      <SchemaMarkup />
      {isEstimate ? <MinimalHeader /> : <Header />}
      <main className={isEstimate ? 'main-estimate' : 'main-site'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/get-estimate" element={<GetEstimate />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      {!isEstimate && <Footer />}
      {!isEstimate && <MobileCallBar />}
    </>
  );
}
