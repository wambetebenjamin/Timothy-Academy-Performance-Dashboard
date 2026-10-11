/**
 * Timothy Academy Dashboard - Marketing Homepage
 * Split into sections for easy maintenance
 */

import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './styles.css';

// Components
import LoadingScreen from '../../components/LoadingScreen';
import CookieConsent from '../../components/CookieConsent';
import WhatsAppFloat from '../../components/WhatsAppFloat';
import KenyaGlobe from '../../components/marketing/KenyaGlobe';
import Scrollytelling from '../../components/marketing/Scrollytelling';
import FeaturesGrid from '../../components/marketing/FeaturesGrid';
import InteractiveDemo from '../../components/marketing/InteractiveDemo';
import Flipbook from '../../components/marketing/Flipbook';
import PricingSection from '../../components/marketing/PricingSection';
import Testimonials from '../../components/marketing/Testimonials';
import ContactForm from '../../components/marketing/ContactForm';
import Newsletter from '../../components/marketing/Newsletter';
import Footer from '../../components/marketing/Footer';

// Data
import { features, testimonials, pricing, schoolInfo } from '../../data/dummyData';

const MarketingHome = () => {
  const navigate = useNavigate();
  const [pageLoaded, setPageLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [annualDiscount, setAnnualDiscount] = useState(false);

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (path) => {
    navigate(path);
  };

  // Effect-23: Hero entrance sequence
  const [heroVisible, setHeroVisible] = useState({
    eyebrow: false,
    headline: false,
    subcopy: false,
    cta: false,
    globe: false,
  });

  useEffect(() => {
    const timings = [
      { key: 'eyebrow', delay: 100, duration: 400 },
      { key: 'headline', delay: 300, duration: 500 },
      { key: 'subcopy', delay: 600, duration: 400 },
      { key: 'cta', delay: 900, duration: 300 },
      { key: 'globe', delay: 1200, duration: 800 },
    ];

    timings.forEach(({ key, delay, duration }) => {
      const timer = setTimeout(() => {
        setHeroVisible(prev => ({ ...prev, [key]: true }));
      }, delay);

      const fadeTimer = setTimeout(() => {
        setTimeout(() => {
          setHeroVisible(prev => ({ ...prev, [key]: true }));
        }, duration);
      }, delay);

      return () => {
        clearTimeout(timer);
        clearTimeout(fadeTimer);
      };
    });
  }, []);

  return (
    <>
      <LoadingScreen />

      {/* Skip link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Glassmorphic Nav (EFFECT-28) */}
      <nav
        className={`marketing-nav ${scrollY > 50 ? 'marketing-nav--scrolled' : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="marketing-nav__container">
          {/* Logo */}
          <a
            href="/"
            className="marketing-nav__logo"
            aria-label="Timothy Academy Dashboard Home"
          >
            <svg className="marketing-nav__logo-icon" viewBox="0 0 40 40" fill="none">
              <rect width="40" height="40" rx="8" fill="#1a5f7a" />
              <path d="M20 8L20 20M20 20L12 15M20 20L28 15M20 20L12 25M20 20L28 25" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="20" cy="20" r="3" fill="#c1440e" />
            </svg>
            <span className="marketing-nav__logo-text">Timothy Academy</span>
          </a>

          {/* Center Navigation */}
          <ul className="marketing-nav__links">
            <li><a href="#features" className="marketing-nav__link">Features</a></li>
            <li><a href="#pricing" className="marketing-nav__link">Pricing</a></li>
            <li><a href="#schools" className="marketing-nav__link">Schools</a></li>
            <li><a href="#how-it-works" className="marketing-nav__link">How It Works</a></li>
            <li><a href="#contact" className="marketing-nav__link">Contact</a></li>
          </ul>

          {/* Right Actions */}
          <div className="marketing-nav__actions">
            <button
              className="btn btn--ghost"
              onClick={() => navigateTo('/app/authentication/login')}
            >
              Sign In
            </button>
            <button
              className="btn btn--primary"
              onClick={() => navigateTo('/demo')}
            >
              Start Free Trial
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className={`marketing-nav__mobile-toggle ${menuOpen ? 'is-open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="marketing-nav__mobile-menu">
            <ul className="marketing-nav__mobile-links">
              <li><a href="#features" className="marketing-nav__mobile-link" onClick={() => setMenuOpen(false)}>Features</a></li>
              <li><a href="#pricing" className="marketing-nav__mobile-link" onClick={() => setMenuOpen(false)}>Pricing</a></li>
              <li><a href="#schools" className="marketing-nav__mobile-link" onClick={() => setMenuOpen(false)}>Schools</a></li>
              <li><a href="#how-it-works" className="marketing-nav__mobile-link" onClick={() => setMenuOpen(false)}>How It Works</a></li>
              <li><a href="#contact" className="marketing-nav__mobile-link" onClick={() => setMenuOpen(false)}>Contact</a></li>
            </ul>
            <div className="marketing-nav__mobile-actions">
              <button
                className="btn btn--secondary w-full"
                onClick={() => { navigateTo('/app/authentication/login'); setMenuOpen(false); }}
              >
                Sign In
              </button>
              <button
                className="btn btn--primary w-full"
                onClick={() => { navigateTo('/demo'); setMenuOpen(false); }}
              >
                Start Free Trial
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main id="main-content">
        {/* Hero Section (EFFECT-01, EFFECT-18, EFFECT-23) */}
        <section className="hero">
          <div className="hero__bg" aria-hidden="true">
            <div className="hero__gradient" />
            <div className="hero__pattern" />
          </div>

          <div className="hero__container">
            <div className="hero__content">
              {/* Effect-23 sequenced entrance */}
              <div
                className={`hero__eyebrow ${heroVisible.eyebrow ? 'is-visible' : ''}`}
                aria-hidden={!heroVisible.eyebrow}
              >
                Trusted by 150+ schools across Kenya
              </div>

              <h1
                className={`hero__headline ${heroVisible.headline ? 'is-visible' : ''}`}
                aria-label="Every Student Deserves a Teacher Who Can See the Full Picture"
              >
                <span className="hero__headline-line">
                  Every Student Deserves
                </span>
                <span className="hero__headline-line">
                  a Teacher Who Can See
                </span>
                <span className="hero__headline-line">
                  the Full Picture.
                </span>
              </h1>

              <p
                className={`hero__subcopy ${heroVisible.subcopy ? 'is-visible' : ''}`}
              >
                Real-time student performance tracking, predictive insights, and
                automated reports for Kenyan schools.
              </p>

              <div
                className={`hero__cta ${heroVisible.cta ? 'is-visible' : ''}`}
              >
                <button
                  className="btn btn--primary btn--lg"
                  onClick={() => navigateTo('/demo')}
                  aria-label="Start your free trial"
                >
                  Start Free Trial
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
                <button
                  className="btn btn--secondary btn--lg"
                  onClick={() => navigateTo('/contact')}
                  aria-label="Book a demo"
                >
                  Book a Demo
                </button>
              </div>

              <div className="hero__proof">
                <p className="hero__proof-stat">150+</p>
                <p className="hero__proof-label">Schools using our platform</p>
              </div>
            </div>

            {/* Effect-01: 3D Kenya County Map Globe */}
            <div
              className={`hero__globe-container ${heroVisible.globe ? 'is-visible' : ''}`}
              aria-label="Interactive map showing subscribed schools across Kenya"
            >
              <KenyaGlobe
                counties={[
                  { name: 'Nairobi', x: 45, y: 35, count: 45 },
                  { name: 'Mombasa', x: 85, y: 70, count: 28 },
                  { name: 'Kisumu', x: 55, y: 50, count: 22 },
                  { name: 'Nakuru', x: 50, y: 40, count: 20 },
                  { name: 'Eldoret', x: 48, y: 28, count: 18 },
                  { name: 'Thika', x: 42, y: 32, count: 13 },
                ]}
              />
              <div className="hero__globe-caption">
                <span>12 counties represented</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="hero__scroll-indicator" aria-hidden="true">
            <div className="hero__scroll-mouse">
              <div className="hero__scroll-wheel" />
            </div>
          </div>
        </section>

        {/* Effect-02: Scrollytelling Section */}
        <Scrollytelling />

        {/* Features Grid */}
        <section id="features" className="features-section">
          <div className="features-section__container">
            <div className="features-section__header">
              <span className="features-section__eyebrow">Features</span>
              <h2 className="features-section__title">Everything Your School Needs</h2>
              <p className="features-section__subtitle">
                Comprehensive tools for tracking, analyzing, and improving student performance.
              </p>
            </div>

            <FeaturesGrid features={features} />
          </div>
        </section>

        {/* Interactive Demo Preview */}
        <section className="demo-preview">
          <div className="demo-preview__container">
            <div className="demo-preview__content">
              <span className="demo-preview__eyebrow">Try It Now</span>
              <h2 className="demo-preview__title">See the Dashboard in Action</h2>
              <p className="demo-preview__description">
                Explore real-time student performance data, attendance tracking,
                and predictive analytics with our interactive demo.
              </p>
              <button
                className="btn btn--primary btn--lg"
                onClick={() => navigateTo('/demo')}
              >
                Explore Demo Dashboard
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <p className="demo-preview__note">No sign-up required. Public demo with dummy data.</p>
            </div>
            <div className="demo-preview__visual">
              <div className="demo-preview__mockup">
                <div className="demo-preview__mockup-header">
                  <div className="demo-preview__mockup-dots">
                    <span /><span /><span />
                  </div>
                  <div className="demo-preview__mockup-title">Timothy Academy Dashboard</div>
                </div>
                <div className="demo-preview__mockup-body">
                  <div className="demo-preview__kpi-row">
                    <div className="demo-preview__kpi" style={{ background: '#2d8a4e' }}>
                      <div className="demo-preview__kpi-value">847</div>
                      <div className="demo-preview__kpi-label">Total Students</div>
                    </div>
                    <div className="demo-preview__kpi" style={{ background: '#1a5f7a' }}>
                      <div className="demo-preview__kpi-value">77%</div>
                      <div className="demo-preview__kpi-label">Avg Grade</div>
                    </div>
                    <div className="demo-preview__kpi" style={{ background: '#c1440e' }}>
                      <div className="demo-preview__kpi-value">90%</div>
                      <div className="demo-preview__kpi-label">Attendance</div>
                    </div>
                    <div className="demo-preview__kpi" style={{ background: '#d4a017' }}>
                      <div className="demo-preview__kpi-value">35</div>
                      <div className="demo-preview__kpi-label">At Risk</div>
                    </div>
                  </div>
                  <div className="demo-preview__mockup-chart">
                    <svg viewBox="0 0 300 150" className="demo-preview__chart-svg">
                      <path
                        d="M0 140 L20 120 L40 125 L60 110 L80 115 L100 100 L120 105 L140 90 L160 95 L180 80 L200 85 L220 70 L240 75 L260 65 L280 70 L300 60"
                        stroke="#1a5f7a"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works - Flipbook (EFFECT-30) */}
        <section id="how-it-works" className="how-it-works-section">
          <div className="how-it-works-section__container">
            <div className="how-it-works-section__header">
              <span className="how-it-works-section__eyebrow">How It Works</span>
              <h2 className="how-it-works-section__title">Get Started in 8 Simple Steps</h2>
            </div>
            <Flipbook />
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="pricing-section">
          <div className="pricing-section__container">
            <div className="pricing-section__header">
              <span className="pricing-section__eyebrow">Pricing</span>
              <h2 className="pricing-section__title">Affordable Plans for Every School</h2>
              <p className="pricing-section__subtitle">
                All plans include a 14-day free trial. No credit card required.
              </p>

              {/* Annual discount toggle */}
              <div className="pricing-section__toggle">
                <span>Monthly</span>
                <label className="pricing-section__toggle-switch">
                  <input
                    type="checkbox"
                    checked={annualDiscount}
                    onChange={(e) => setAnnualDiscount(e.target.checked)}
                    aria-label="Toggle annual billing discount"
                  />
                  <span className="pricing-section__toggle-track">
                    <span className="pricing-section__toggle-thumb" />
                  </span>
                </label>
                <span>Annual<span className="pricing-section__discount-badge">Save 25%</span></span>
              </div>
            </div>

            <PricingSection
              plans={pricing}
              annualDiscount={annualDiscount}
            />
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials-section">
          <div className="testimonials-section__container">
            <div className="testimonials-section__header">
              <span className="testimonials-section__eyebrow">Testimonials</span>
              <h2 className="testimonials-section__title">What School Leaders Say</h2>
            </div>
            <Testimonials testimonials={testimonials} />
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="contact-section">
          <div className="contact-section__container">
            <div className="contact-section__header">
              <span className="contact-section__eyebrow">Contact Us</span>
              <h2 className="contact-section__title">Ready to Transform Your School?</h2>
              <p className="contact-section__subtitle">
                Book a demo or sign up your school today. Our team is ready to help.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>

        {/* Newsletter */}
        <section className="newsletter-section">
          <div className="newsletter-section__container">
            <div className="newsletter-section__content">
              <span className="newsletter-section__eyebrow">Stay Updated</span>
              <h2 className="newsletter-section__title">Education Data Insights</h2>
              <p className="newsletter-section__description">
                Get monthly insights on education data analytics, school performance trends,
                and tips for data-driven teaching in Kenyan schools.
              </p>
              <Newsletter />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Floating Button */}
      <WhatsAppFloat />

      {/* Cookie Consent Banner */}
      <CookieConsent />
    </>
  );
};

export default MarketingHome;
