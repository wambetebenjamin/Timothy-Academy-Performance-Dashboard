/**
 * Newsletter Component
 * Email signup with reCAPTCHA
 */

import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [ subscribing, setSubscribing] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setError('Please enter your email');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email');
      return;
    }

    setSubscribing(true);
    setError('');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    setSubscribing(false);
    setSubscribed(true);
  };

  if (subscribed) {
    return (
      <div className="newsletter-form newsletter-form--success">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--ta-school-gold)" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
        <span>You're subscribed! Check your inbox for a welcome email.</span>
      </div>
    );
  }

  return (
    <form className="newsletter-form" onSubmit={handleSubmit} noValidate>
      <div className="newsletter-form__input-wrapper">
        <input
          type="email"
          className="newsletter-form__input"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError('');
          }}
          placeholder="Enter your email"
          aria-label="Email for newsletter"
          required
        />
        <button
          type="submit"
          className="btn btn--secondary newsletter-form__btn"
          disabled={subscribing}
          aria-label="Subscribe to newsletter"
        >
          {subscribing ? 'Subscribing...' : 'Subscribe'}
        </button>
      </div>
      {error && <span className="form-error newsletter-form__error">{error}</span>}
      <p className="newsletter-form__privacy">
        We respect your privacy. No spam, unsubscribe anytime.
        Student data never used for marketing.
      </p>
    </form>
  );
};

export default Newsletter;
