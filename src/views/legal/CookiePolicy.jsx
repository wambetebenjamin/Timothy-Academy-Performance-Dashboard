/**
 * Cookie Policy Page
 * Full breakdown by category
 */

import React from 'react';
import { CContainer } from '@coreui/react';

const CookiePolicy = () => {
  const cookies = [
    {
      category: 'Necessary Cookies',
      description: 'These cookies are essential for the platform to function properly. They enable basic features like student data loading, authentication, and page navigation.',
      essential: true,
      cookies: [
        { name: 'session_id', purpose: 'Maintains your login session', duration: 'Until browser close' },
        { name: 'csrf_token', purpose: 'Prevents cross-site request forgery', duration: 'Until browser close' },
        { name: 'user_preferences', purpose: 'Remembers your dashboard preferences', duration: '1 year' },
        { name: 'sidebar_state', purpose: 'Remembers sidebar open/closed state', duration: '1 week' },
      ],
      providers: ['Timothy Academy Dashboard (first-party)'],
    },
    {
      category: 'Functional Cookies',
      description: 'These cookies enhance the functionality of our platform by remembering your preferences and settings.',
      essential: false,
      cookies: [
        { name: 'dashboard_layout', purpose: 'Remembers your customized dashboard layout', duration: '1 year' },
        { name: 'chart_settings', purpose: 'Remembers your chart display preferences', duration: '1 year' },
        { name: 'last_viewed_tab', purpose: 'Opens dashboard to your last viewed section', duration: '1 month' },
        { name: 'notification_preferences', purpose: 'Remembers your notification settings', duration: '1 year' },
      ],
      providers: ['Timothy Academy Dashboard (first-party)'],
    },
    {
      category: 'Analytics Cookies',
      description: 'These cookies help us understand how the platform is used, so we can improve performance and user experience. We use aggregated, anonymized data only.',
      essential: false,
      cookies: [
        { name: '_ga', purpose: 'Google Analytics - distinguishes unique users', duration: '2 years' },
        { name: '_gid', purpose: 'Google Analytics - distinguishes users', duration: '24 hours' },
        { name: '_gat', purpose: 'Google Analytics - throttles request rate', duration: '1 minute' },
        { name: 'page_views', purpose: 'Tracks which pages are viewed (anonymized)', duration: 'Session' },
      ],
      providers: ['Google Analytics (third-party)'],
    },
    {
      category: 'Marketing Cookies',
      description: 'These cookies are used to deliver relevant content and measure campaign effectiveness. NOTE: Student data is NEVER used for marketing purposes.',
      essential: false,
      cookies: [
        { name: '_fbp', purpose: 'Facebook Pixel - delivers targeted content', duration: '3 months' },
        { name: '_fbc', purpose: 'Facebook Pixel - click attribution', duration: '3 months' },
      ],
      providers: ['Facebook/Meta (third-party)'],
      note: 'Student data is NEVER used for third-party marketing. Marketing cookies are only used for platform promotion, never for targeting students or parents.',
    },
  ];

  return (
    <div className="legal-page">
      <CContainer className="legal-page__container">
        <header className="legal-page__header">
          <a href="/" className="legal-page__logo">
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
              <rect width="40" height="40" rx="8" fill="var(--ta-primary)" />
              <path d="M20 8L20 20M20 20L12 15M20 20L28 15M20 20L12 25M20 20L28 25" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="20" cy="20" r="3" fill="var(--ta-accent)" />
            </svg>
          </a>
          <nav className="legal-page__nav">
            <a href="/legal/privacy-policy" className="legal-page__nav-link">Privacy Policy</a>
            <a href="/legal/terms" className="legal-page__nav-link">Terms of Service</a>
            <a href="/legal/cookie-policy" className="legal-page__nav-link legal-page__nav-link--active">Cookie Policy</a>
          </nav>
        </header>

        <main className="legal-page__content">
          <h1 className="legal-page__title">Cookie Policy</h1>
          <p className="legal-page__last-updated">Last updated: January 2026</p>

          <section className="legal-section">
            <h2 className="legal-section__title">1. What Are Cookies</h2>
            <p className="legal-text">
              Cookies are small text files that are stored on your device when you visit our platform. They help us 
              provide a better user experience, remember your preferences, and understand how the platform is used.
            </p>
            <p className="legal-text">
              Under the Kenya Data Protection Act 2019, we are required to inform you about our cookie usage and obtain 
              your consent for non-essential cookies.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section__title">2. How We Use Cookies</h2>
            <p className="legal-text">
              We use cookies for the following purposes:
            </p>
            <ul className="legal-list">
              <li>Essential platform functionality (authentication, data loading)</li>
              <li>Remembering your preferences and settings</li>
              <li>Understanding platform usage through analytics</li>
              <li>Improving our service based on usage patterns</li>
            </ul>
            <p className="legal-text">
              <strong>We do not use cookies to track individual student performance for marketing purposes.</strong> 
              Student data is never used for advertising or third-party marketing.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section__title">3. Cookie Categories and Specific Cookies</h2>
            {cookies.map((cookieCategory, index) => (
              <div key={index} className="cookie-category">
                <h3 className="cookie-category__title">
                  {cookieCategory.category}
                  {cookieCategory.essential && (
                    <span className="cookie-category__badge">Essential</span>
                  )}
                </h3>
                <p className="cookie-category__description">{cookieCategory.description}</p>

                {cookieCategory.note && (
                  <div className="cookie-category__note">
                    <strong>Important:</strong> {cookieCategory.note}
                  </div>
                )}

                <h4 className="cookie-category__subtitle">Specific Cookies:</h4>
                <table className="cookie-table">
                  <thead>
                    <tr>
                      <th>Cookie Name</th>
                      <th>Purpose</th>
                      <th>Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cookieCategory.cookies.map((cookie, i) => (
                      <tr key={i}>
                        <td><code>{cookie.name}</code></td>
                        <td>{cookie.purpose}</td>
                        <td>{cookie.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <p className="cookie-category__providers">
                  <strong>Providers:</strong> {cookieCategory.providers.join(', ')}
                </p>
              </div>
            ))}
          </section>

          <section className="legal-section">
            <h2 className="legal-section__title">4. Managing Your Cookie Preferences</h2>
            <p className="legal-text">
              When you first visit our platform, you will see a cookie consent banner that allows you to:
            </p>
            <ul className="legal-list">
              <li>Accept all cookies</li>
              <li>Manage your preferences (accept/reject specific categories)</li>
              <li>Reject non-essential cookies</li>
            </ul>
            <p className="legal-text">
              You can change your cookie preferences at any time by:
            </p>
            <ul className="legal-list">
              <li>Clicking "Manage Preferences" in the cookie banner</li>
              <li>Clearing your browser cookies (note: this will also clear your login session)</li>
              <li>Using your browser's cookie management settings</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2 className="legal-section__title">5. Browser Settings</h2>
            <p className="legal-text">
              Most web browsers allow you to control cookies through their settings. You can:
            </p>
            <ul className="legal-list">
              <li>View what cookies are stored</li>
              <li>Delete individual cookies or all cookies</li>
              <li>Block cookies from specific sites</li>
              <li>Block all cookies (note: this may affect platform functionality)</li>
              <li>Set cookies to be deleted when you close your browser</li>
            </ul>
            <p className="legal-text">
              If you block all cookies, some features of our platform may not work properly, including 
              login sessions and preference memory.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section__title">6. Third-Party Cookies</h2>
            <p className="legal-text">
              We work with the following third-party providers who may set cookies:
            </p>
            <ul className="legal-list">
              <li><strong>Google Analytics</strong> - For platform usage analytics</li>
              <li><strong>Facebook/Meta</strong> - For marketing campaign measurement (platform promotion only)</li>
            </ul>
            <p className="legal-text">
              These third parties have their own privacy policies. We do not control their cookie usage. 
              We recommend reviewing their privacy policies for more information.
            </p>
            <p className="legal-text legal-text--important">
              <strong>Note:</strong> Third-party cookies are used ONLY for platform analytics and promotion. 
              Student personal data is NEVER shared with third-party cookie providers.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section__title">7. Cookie Consent for Schools</h2>
            <p className="legal-text">
              As a school administrator, you are responsible for:
            </p>
            <ul className="legal-list">
              <li>Informing parents and students about cookie usage on the platform</li>
              <li>Obtaining consent where required by your school's policies</li>
              <li>Providing information about how to manage cookie preferences</li>
            </ul>
            <p className="legal-text">
              We provide a cookie consent banner on first visit, but schools should also include cookie 
              information in their own privacy notices to parents.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section__title">8. Updates to This Policy</h2>
            <p className="legal-text">
              We may update this Cookie Policy from time to time. We will notify users of changes through 
              the cookie consent mechanism or by posting updated information on this page.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section__title">9. Contact Us</h2>
            <div className="legal-contact">
              <p>
                <strong>Timothy Academy Dashboard</strong><br />
                P.O. Box 4567 - 00100<br />
                Nairobi, Kenya
              </p>
              <p>
                <strong>Email:</strong> <a href="mailto:privacy@timothyacademy.co.ke">privacy@timothyacademy.co.ke</a>
              </p>
              <p>
                <strong>WhatsApp:</strong> <a href="https://wa.me/254112272061">+254 112 272 061</a>
              </p>
            </div>
          </section>
        </main>
      </CContainer>
    </div>
  );
};

export default CookiePolicy;
