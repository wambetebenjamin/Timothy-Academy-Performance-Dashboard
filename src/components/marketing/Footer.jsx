/**
 * Footer Component
 * Links, social media, newsletter, WhatsApp, copyright
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="site-footer__container">
        <div className="site-footer__grid">
          {/* Brand section */}
          <div className="site-footer__brand">
            <div className="site-footer__logo">
              <svg className="site-footer__logo-icon" viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" rx="8" fill="var(--ta-primary)" />
                <path d="M20 8L20 20M20 20L12 15M20 20L28 15M20 20L12 25M20 20L28 25" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="20" cy="20" r="3" fill="var(--ta-accent)" />
              </svg>
              <span>Timothy Academy</span>
            </div>
            <p className="site-footer__description">
              Real-time student performance tracking, predictive insights, and automated reports for Kenyan schools. Empowering teachers with data.
            </p>
            <div className="site-footer__social">
              {/* Twitter/X */}
              <a
                href="https://twitter.com"
                className="site-footer__social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Twitter"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                className="site-footer__social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.823c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.021H3.555V9h3.564v11.845zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 22.227.792 23 1.771 23h20.451C22.214 23 23 22.227 23 21.271V1.729C23 .774 22.214 0 22.225 0z" />
                </svg>
              </a>
              {/* WhatsApp */}
              <a
                href="https://wa.me/254112272061"
                className="site-footer__social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-2.106 1.458-4.864 2.005-7.721 1.587-3.133-.46-5.944-2.154-7.249-4.456-1.417-2.488-.574-5.287.809-7.122 1.385-1.835 3.48-2.904 5.657-3.027 2.562-.135 4.796.838 6.429 2.66 1.633-1.826 3.867-2.85 6.394-2.689 2.333.148 4.254 1.06 5.782 2.43 1.549-1.386 3.68-2.213 6.078-2.093 2.644.13 4.192 1.656 5.075 3.59 1.04-1.54 1.563-2.848 1.5-3.882-.167-2.72 1.094-4.778 2.74-6.21 2.035-1.798 4.626-2.435 7.041-1.766 1.899.55 3.378 1.826 4.057 3.392 1.03-.233 1.983-.73 2.954-1.073-2.44-1.402-5.28-2.16-8.217-2.289-.844-.04-1.72-.022-2.633.098m-5.654 6.44v-2.772c0-.837.466-1.334 1.21-1.385.482-.033.931.155 1.248.445a.34.34 0 0 1 .083.325c-.076.156-.184.29-.314.406-.387.303-.702.693-.792 1.264a9.103 9.103 0 0 1-.19 1.086c0 .408.204.662.545.76.462.13.85-.142 1.047-.458.116-.18.144-.422.144-.736v-1.36c0-.778-.432-1.205-1.09-1.255-.677-.05-1.295.22-1.672.66-.376.44-.601.957-.693 1.524-.117.712.123 1.342.664 1.756.398.31.826.469 1.26.465.844-.004 1.408-.522 1.653-1.186.245-.666.244-1.374.158-1.96-.055-.344-.14-.626-.254-.858a1.1 1.1 0 0 0-.416-.46" />
                </svg>
              </a>
            </div>
          </div>

          {/* Features links */}
          <div className="site-footer__links">
            <h4 className="site-footer__heading">Features</h4>
            <ul>
              <li><a href="#features" className="site-footer__link">Class Performance</a></li>
              <li><a href="#features" className="site-footer__link">Grade Tracking</a></li>
              <li><a href="#features" className="site-footer__link">Attendance</a></li>
              <li><a href="#features" className="site-footer__link">Predictions</a></li>
              <li><a href="#features" className="site-footer__link">Reports</a></li>
            </ul>
          </div>

          {/* Pages links */}
          <div className="site-footer__links">
            <h4 className="site-footer__heading">Platform</h4>
            <ul>
              <li><a href="#pricing" className="site-footer__link">Pricing</a></li>
              <li><a href="/demo" className="site-footer__link">Demo</a></li>
              <li><a href="#how-it-works" className="site-footer__link">How It Works</a></li>
              <li><a href="#contact" className="site-footer__link">Contact</a></li>
              <li><a href="/app" className="site-footer__link">Sign In</a></li>
            </ul>
          </div>

          {/* Legal links */}
          <div className="site-footer__links">
            <h4 className="site-footer__heading">Legal</h4>
            <ul>
              <li><a href="/legal/privacy-policy" className="site-footer__link">Privacy Policy</a></li>
              <li><a href="/legal/terms" className="site-footer__link">Terms of Service</a></li>
              <li><a href="/legal/cookie-policy" className="site-footer__link">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter section */}
        <div className="site-footer__newsletter">
          <p className="site-footer__newsletter-text">
            Get education data insights for Kenyan school leaders.
          </p>
          {subscribed ? (
            <p className="site-footer__newsletter-success">Thank you for subscribing!</p>
          ) : (
            <form className="site-footer__newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="site-footer__newsletter-input"
                aria-label="Email for newsletter"
              />
              <button type="submit" className="site-footer__newsletter-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          )}
        </div>

        {/* Bottom section */}
        <div className="site-footer__bottom">
          <p className="site-footer__copyright">
            &copy; {new Date().getFullYear()} Timothy Academy Dashboard. All rights reserved.
          </p>
          <div className="site-footer__legal">
            <a href="/legal/privacy-policy" className="site-footer__legal-link">Privacy Policy</a>
            <a href="/legal/terms" className="site-footer__legal-link">Terms of Service</a>
            <a href="/legal/cookie-policy" className="site-footer__legal-link">Cookie Policy</a>
          </div>
          <p className="site-footer__data-protection">
            Kenya Data Protection Act 2019 compliant. Student data never sold or used for third-party marketing.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
