/**
 * Terms of Service Page
 * SaaS Subscription Terms, Kenya law
 */

import React from 'react';
import { CContainer } from '@coreui/react';

const Terms = () => {
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
            <a href="/legal/terms" className="legal-page__nav-link legal-page__nav-link--active">Terms of Service</a>
            <a href="/legal/cookie-policy" className="legal-page__nav-link">Cookie Policy</a>
          </nav>
        </header>

        <main className="legal-page__content">
          <h1 className="legal-page__title">Terms of Service</h1>
          <p className="legal-page__last-updated">Last updated: January 2026</p>

          <section className="legal-section">
            <h2 className="legal-section__title">1. Acceptance of Terms</h2>
            <p className="legal-text">
              By accessing and using the Timothy Academy Dashboard platform ("Service"), you agree to be bound by 
              these Terms of Service ("Terms"). If you do not agree with any part of these terms, you must not use our Service.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section__title">2. Description of Service</h2>
            <p className="legal-text">
              Timothy Academy Dashboard is a school performance tracking platform that provides:
            </p>
            <ul className="legal-list">
              <li>Real-time student grade tracking and analysis</li>
              <li>Attendance monitoring and reporting</li>
              <li>Performance predictions and analytics</li>
              <li>Automated report generation and delivery</li>
              <li>Parent portal for viewing student progress</li>
              <li>Administrative dashboard for school management</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2 className="legal-section__title">3. Subscription Terms</h2>
            <h3 className="legal-section__subtitle">3.1 Subscription Plans</h3>
            <p className="legal-text">
              We offer three subscription tiers: Primary School, Secondary School, and County Package. 
              Each plan has specific features, student limits, and pricing as displayed on our pricing page.
            </p>

            <h3 className="legal-section__subtitle">3.2 Billing</h3>
            <ul className="legal-list">
              <li>Subscription fees are billed per term (3 terms per year) or annually</li>
              <li>Annual subscriptions receive a 25% discount</li>
              <li>Payments can be made via bank transfer, M-Pesa, or card</li>
              <li>Invoices are issued at the start of each term or billing cycle</li>
            </ul>

            <h3 className="legal-section__subtitle">3.3 Payment Terms</h3>
            <ul className="legal-list">
              <li>Payment is due within 7 days of invoice receipt</li>
              <li>Late payments may result in service suspension</li>
              <li>Failed payments will be retried after 7 days</li>
              <li>Refunds are available within the first 14-day trial period</li>
            </ul>

            <h3 className="legal-section__subtitle">3.4 Free Trial</h3>
            <p className="legal-text">
              New schools can access a 14-day free trial of any plan. During the trial, full platform features 
              are available. No credit card is required to start a trial.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section__title">4. Data Ownership</h2>
            <p className="legal-text legal-text--important">
              <strong>You (the school) own all data you enter into the platform.</strong> This includes all student 
              records, grades, attendance data, teacher information, and reports generated using the platform.
            </p>
            <p className="legal-text">
              We act as a data processor on your behalf. You retain full rights to access, export, and delete 
              your data at any time. Upon subscription cancellation, you may export all your data.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section__title">5. Acceptable Use</h2>
            <p className="legal-text">
              You agree not to use the Service in any way that violates these terms or applicable laws. Specifically, you shall not:
            </p>
            <ul className="legal-list">
              <li>Use the platform to store false or fraudulent student data</li>
              <li>Attempt to hack, reverse engineer, or compromise platform security</li>
              <li>Share login credentials with unauthorized persons</li>
              <li>Use the platform to discriminate against students based on race, religion, gender, or other protected characteristics</li>
              <li>Export student data for unauthorized third-party use</li>
              <li>Resell or redistribute our platform services without permission</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2 className="legal-section__title">6. Uptime Service Level Agreement (SLA)</h2>
            <p className="legal-text">
              We strive to maintain 99.5% uptime for our platform. Our uptime commitment:
            </p>
            <ul className="legal-list">
              <li>Platform availability: Monday to Saturday, 6:00 AM to 10:00 PM EAT</li>
              <li>Scheduled maintenance: Sundays between 2:00 AM and 6:00 AM EAT</li>
              <li>Emergency maintenance: Notified at least 24 hours in advance when possible</li>
            </ul>
            <p className="legal-text">
              If uptime falls below 99% in any calendar month, schools on the Secondary School or County Package 
              plans are eligible for a 10% credit on that month's subscription fee.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section__title">7. Performance Predictions Disclaimer</h2>
            <p className="legal-text legal-text--important">
              <strong>Our grade prediction feature provides estimates only.</strong> Predictions are generated using 
              statistical models based on historical data and current performance trends. They are:
            </p>
            <ul className="legal-list">
              <li>Not guaranteed outcomes</li>
              <li>Intended for educational planning purposes only</li>
              <li>Clearly labeled as predictions/estimates throughout the platform</li>
              <li>Not a substitute for professional educational assessment</li>
            </ul>
            <p className="legal-text">
              Schools should use predictions as one tool among many for identifying students who may need 
              additional support. Final grades are determined by examination bodies (KNEC, etc.) and school assessments.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section__title">8. WhatsApp Integration</h2>
            <p className="legal-text">
              Our platform can send report cards and notifications via WhatsApp to phone numbers you provide. 
              By providing WhatsApp numbers, you agree that:
            </p>
            <ul className="legal-list">
              <li>You have consent from the phone number owner to receive messages</li>
              <li>We may send automated messages via WhatsApp Business API</li>
              <li>Message delivery depends on WhatsApp's service availability</li>
              <li>You are responsible for any WhatsApp usage charges on your end</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2 className="legal-section__title">9. Limitation of Liability</h2>
            <p className="legal-text">
              To the maximum extent permitted by Kenyan law, Timothy Academy Dashboard shall not be liable for:
            </p>
            <ul className="legal-list">
              <li>Indirect, incidental, or consequential damages</li>
              <li>Loss of data, interruptions in service, or loss of profits</li>
              <li>Decisions made based on platform data or predictions</li>
              <li>Actions taken by teachers, parents, or students based on platform information</li>
            </ul>
            <p className="legal-text">
              Our total liability for any claim arising from these terms shall not exceed the total fees paid 
              by you in the 12 months preceding the claim.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section__title">10. Governing Law</h2>
            <p className="legal-text">
              These Terms of Service and any disputes arising from them shall be governed by and construed in 
              accordance with the laws of the Republic of Kenya.
            </p>
            <p className="legal-text">
              Any legal action or proceeding arising under these terms will be brought exclusively in the courts 
              of Nairobi, Kenya.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section__title">11. Changes to Terms</h2>
            <p className="legal-text">
              We may update these Terms from time to time. We will notify current subscribers of material changes 
              at least 30 days before they take effect. Continued use of the Service after changes constitutes 
              acceptance of the updated terms.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section__title">12. Contact Information</h2>
            <div className="legal-contact">
              <p>
                <strong>Timothy Academy Dashboard</strong><br />
                P.O. Box 4567 - 00100<br />
                Nairobi, Kenya
              </p>
              <p>
                <strong>Email:</strong> <a href="mailto:support@timothyacademy.co.ke">support@timothyacademy.co.ke</a>
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

export default Terms;
