/**
 * Timothy Academy Performance Dashboard - Main App
 * Marketing site + Authenticated Dashboard
 */

import React, { Suspense, useEffect } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { CSpinner, useColorModes } from '@coreui/react';
import './scss/style.scss';
import './scss/global.scss';
import './scss/legal.scss';
import './components/marketing/components.css';

// Loading screen and cookie consent for marketing site
import LoadingScreen from './components/LoadingScreen';
import CookieConsent from './components/CookieConsent';

// Marketing pages
const MarketingHome = React.lazy(() => import('./views/marketing/Home'));

// Demo page (public)
const DemoDashboard = React.lazy(() => import('./components/marketing/InteractiveDemo'));

// Dashboard pages (authenticated)
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Login = React.lazy(() => import('./views/authentication/login/Login'));
const Register = React.lazy(() => import('./views/authentication/register/Register'));

// Error pages
const Page404 = React.lazy(() => import('./views/error-pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/error-pages/page500/Page500'));

// Legal pages
const PrivacyPolicy = React.lazy(() => import('./views/legal/PrivacyPolicy'));
const Terms = React.lazy(() => import('./views/legal/Terms'));
const CookiePolicy = React.lazy(() => import('./views/legal/CookiePolicy'));

const App = () => {
  const { isColorModeSet, setColorMode } = useColorModes('timothy-academy-theme');
  const storedTheme = useSelector((state) => state.theme);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.href.split('?')[1]);
    const theme = urlParams.get('theme') && urlParams.get('theme').match(/^[A-Za-z0-9\s]+/)[0];
    if (theme) {
      setColorMode(theme);
    }

    if (isColorModeSet()) {
      return;
    }

    setColorMode(storedTheme);
  }, []);

  return (
    <HashRouter>
      <Suspense
        fallback={
          <div className="pt-3 text-center" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CSpinner color="primary" variant="grow" />
          </div>
        }
      >
        <Routes>
          {/* Marketing Site */}
          <Route exact path="/" name="Home" element={<MarketingHome />} />

          {/* Demo Dashboard (Public) */}
          <Route path="/demo" name="Demo Dashboard" element={<DemoDashboard />} />

          {/* Legal Pages */}
          <Route exact path="/legal/privacy-policy" name="Privacy Policy" element={<PrivacyPolicy />} />
          <Route exact path="/legal/terms" name="Terms of Service" element={<Terms />} />
          <Route exact path="/legal/cookie-policy" name="Cookie Policy" element={<CookiePolicy />} />

          {/* Authentication */}
          <Route exact path="/app/authentication/login" name="Login" element={<Login />} />
          <Route exact path="/app/authentication/register" name="Register" element={<Register />} />

          {/* Dashboard (Protected - in real app would check auth) */}
          <Route path="/app" name="Dashboard" element={<Dashboard />} />

          {/* Error Pages */}
          <Route exact path="/error-pages/404" name="Page 404" element={<Page404 />} />
          <Route exact path="/error-pages/500" name="Page 500" element={<Page500 />} />

          {/* 404 Catch-all */}
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
};

export default App;
