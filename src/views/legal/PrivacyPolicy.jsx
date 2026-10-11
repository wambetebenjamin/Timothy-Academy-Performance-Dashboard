/**
 * Privacy Policy Page
 * Kenya Data Protection Act 2019 compliant
 */

import React from 'react';
import { CContainer } from '@coreui/react';

const PrivacyPolicy = () => {
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
            <a href="/legal/privacy-policy" className="legal-page__nav-link legal-page__nav-link--active">Privacy Policy</a>
            <a href="/legal/terms" className="legal-page__nav-link">Terms of Service</a>
            <a href="/legal/cookie-policy" className="legal-page__nav-link">Cookie Policy</a>
          </nav>
        </header>

        <main className="legal-page__content">
          <h1 className="legal-page__title">Privacy Policy</h1>
          <p className="legal-page__last-updated">Last updated: January 2026</p>

          <section className="legal-section">
            <h2 className="legal-section__title">1. Introduction</h2>
            <p className="legal-text">
              Timothy Academy Dashboard ("we", "our", or "us") is committed to protecting your privacy and 
              ensuring the security of personal data in compliance with the Kenya Data Protection Act 2019.
            </p>
            <p className="legal-text">
              This Privacy Policy explains how we collect, use, store, and protect personal information when 
              you use our school performance tracking platform.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section__title">2. Information We Collect</h2>
            <h3 className="legal-section__subtitle">2.1 Student Data</h3>
            <p className="legal-text">
              We collect and process the following student information on behalf of schools:
            </p>
            <ul className="legal-list">
              <li>Student name and admission number</li>
              <li>Date of birth</li>
              <li>Class and stream assignment</li>
              <li>Academic grades per subject per term</li>
              <li>Attendance records</li>
              <li>Behavioral notes and teacher comments</li>
              <li>Predicted performance data</li>
            </ul>
            <p className="legal-text legal-text--important">
              <strong>Important:</strong> Student data is collected solely for educational purposes and is owned by the school. 
              We do not sell, rent, or share student data with any third party for marketing purposes.
            </p>

            <h3 className="legal-section__subtitle">2.2 Teacher Data</h3>
            <ul className="legal-list">
              <li>Full name and employee ID</li>
              <li>Subject specializations</li>
              <li>Class assignments</li>
              <li>Performance metrics (aggregated, anonymized)</li>
              <li>Contact information (school-provided)</li>
            </ul>

            <h3 className="legal-section__subtitle">2.3 School Data</h3>
            <ul className="legal-list">
              <li>School name and KNEC registration number</li>
              <li>County and location</li>
              <li>Type of school (primary, secondary, etc.)</li>
              <li>Number of students and staff</li>
              <li>Aggregate performance statistics</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2 className="legal-section__title">3. How We Use Your Data</h2>
            <p className="legal-text">We use personal information for the following purposes:</p>
            <ul className="legal-list">
              <li>Providing and maintaining the dashboard platform</li>
              <li>Tracking and analyzing student academic performance</li>
              <li>Generating reports and report cards</li>
              <li>Making performance predictions using our analytical models</li>
              <li>Sending automated notifications to parents (with school consent)</li>
              <li>Improving our platform and features</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2 className="legal-section__title">4. Data Ownership</h2>
            <p className="legal-text legal-text--important">
              <strong>Schools own their data.</strong> All student, teacher, and school data entered into the Timothy Academy 
              Dashboard remains the property of the respective school. We act as a data processor on behalf of the school.
            </p>
            <p className="legal-text">
              Schools can export all their data at any time in CSV format. Upon termination of the service, 
              schools can request full data export or deletion.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section__title">5. Analytics Limitations</h2>
            <p className="legal-text">
              Our grade prediction feature uses a linear trend model based on current performance and historical 
              school trends. These predictions are:
            </p>
            <ul className="legal-list">
              <li>Estimates only, not guaranteed outcomes</li>
              <li>Based on available data and may not account for all factors</li>
              <li>Clearly labeled as "predicted" or "estimated" throughout the platform</li>
              <li>Intended to help identify students who may need additional support</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2 className="legal-section__title">6. No Third-Party Marketing Use of Student Data</h2>
            <p className="legal-text legal-text--important">
              <strong>We never use student data for third-party marketing purposes.</strong> This is a firm commitment 
              and is in compliance with the Kenya Data Protection Act 2019.
            </p>
            <p className="legal-text">
              Student personal information will NEVER be:
            </p>
            <ul className="legal-list">
              <li>Sold to advertisers or data brokers</li>
              <li>Shared with third-party marketing platforms</li>
              <li>Used to target students or parents with advertisements</li>
              <li>Aggregated and sold as commercial data</li>
              <li>Provided to political organizations or campaigns</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2 className="legal-section__title">7. Your Rights</h2>
            <p className="legal-text">
              Under the Kenya Data Protection Act 2019, you (or your parent/guardian if you are a minor) have the right to:
            </p>
            <ul className="legal-list">
              <li>Request access to your personal data held by us</li>
              <li>Request correction of inaccurate personal data</li>
              <li>Request deletion of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request data portability (export in machine-readable format)</li>
              <li>Withdraw consent at any time (where applicable)</li>
            </ul>
            <p className="legal-text">
              To exercise these rights, please contact us using the details below. We will respond within 
              30 days as required by law.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section__title">8. Data Security</h2>
            <p className="legal-text">
              We implement appropriate technical and organizational measures to protect personal data, including:
            </p>
            <ul className="legal-list">
              <li>Encryption of data in transit and at rest</li>
              <li>Access controls and authentication requirements</li>
              <li>Regular security audits and updates</li>
              <li>Secure data storage with backup procedures</li>
              <li>Staff training on data protection</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2 className="legal-section__title">9. Data Sharing</h2>
            <p className="legal-text">
              We only share personal data in the following circumstances:
            </p>
            <ul className="legal-list">
              <li>With the school that provided the data, for educational purposes</li>
              <li>With parents/guardians, for their own child's data only (with school consent)</li>
              <li>With government authorities if required by law</li>
              <li>With service providers who assist in platform operation (under strict confidentiality agreements)</li>
            </ul>
            <p className="legal-text">
              We do not share student data with other schools, educational institutions, or commercial entities.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section__title">10. Data Retention</h2>
            <p className="legal-text">
              We retain personal data only as long as necessary for the purposes described in this policy, 
              or as required by law. Specifically:
            </p>
            <ul className="legal-list">
              <li>Active school accounts: Data retained for as long as the school uses the platform</li>
              <li>Former school accounts: Data retained for 12 months after account closure, then deleted</li>
              <li>Legal requirements: Data may be retained longer if required by Kenyan law</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2 className="legal-section__title">11. Contact Us</h2>
            <p className="legal-text">
              If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
            </p>
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

          <section className="legal-section">
            <h2 className="legal-section__title">12. Changes to This Policy</h2>
            <p className="legal-text">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements.
              We will notify users of significant changes by posting the updated policy on this page with a new "last updated" date.
            </p>
          </section>
        </main>
      </CContainer>
    </div>
  );
};

export default PrivacyPolicy;
