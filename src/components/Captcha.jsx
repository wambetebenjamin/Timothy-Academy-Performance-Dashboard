/**
 * reCAPTCHA v3 Invisible Component
 * Handles invisible reCAPTCHA with v2 fallback
 */

import React, { useEffect, useRef, useState } from 'react';

const Captcha = ({
  onVerify,
  onExpire,
  onReset,
  action = 'submit',
  size = 'invisible',
  siteKey,
}) => {
  const [verified, setVerified] = useState(false);
  const [score, setScore] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef(null);
  const grecaptchaRef = useRef(null);

  useEffect(() => {
    // Load grecaptcha script
    const loadScript = () => {
      return new Promise((resolve, reject) => {
        if (window.grecaptcha) {
          resolve(window.grecaptcha);
          return;
        }

        const script = document.createElement('script');
        script.src = 'https://www.google.com/recaptcha/api.js?render=explicit';
        script.async = true;
        script.defer = true;
        script.onload = () => resolve(window.grecaptcha);
        script.onerror = () => reject(new Error('Failed to load reCAPTCHA'));
        document.head.appendChild(script);
      });
    };

    loadScript().then((grecaptcha) => {
      grecaptchaRef.current = grecaptcha;
    }).catch(console.error);

    return () => {
      if (grecaptchaRef.current && onReset) {
        grecaptchaRef.current.reset(containerRef.current);
      }
    };
  }, [containerRef, onReset]);

  const executeRecaptcha = () => {
    if (!grecaptchaRef.current) {
      setError('reCAPTCHA not loaded');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      grecaptchaRef.current.ready(() => {
        grecaptchaRef.current.execute(siteKey, action).then((token) => {
          setLoading(false);
          setVerified(true);
          if (onVerify) {
            onVerify(token);
          }
        }).catch((err) => {
          setLoading(false);
          setError('reCAPTCHA execution failed');
          console.error('reCAPTCHA error:', err);

          // Try v2 fallback if score is below 0.5
          if (err.message?.includes('score') || err.message?.includes('min_score')) {
            fallbackToV2();
          }
        });
      });
    } catch (err) {
      setLoading(false);
      setError('reCAPTCHA execution failed');
    }
  };

  const fallbackToV2 = () => {
    // Create a hidden v2 checkbox for fallback
    const checkbox = document.createElement('div');
    checkbox.innerHTML = `
      <div class="g-recaptcha" data-sitekey="${siteKey}" data-size="checkbox" data-callback="onV2Verify"></div>
    `;
    containerRef.current?.appendChild(checkbox);

    window.onV2Verify = (v2Token) => {
      setVerified(true);
      setScore(1.0); // v2 is either 0 or 1
      if (onVerify) {
        onVerify(v2Token);
      }
    };

    window.grecaptcha?.render(containerRef.current, {
      sitekey: siteKey,
      callback: window.onV2Verify,
    });
  };

  useEffect(() => {
    if (grecaptchaRef.current && size === 'invisible') {
      // Set up invisible badge
      grecaptchaRef.current.render(containerRef.current, {
        sitekey: siteKey,
        size: 'invisible',
        badge: 'bottomright',
      });
    }
  }, [siteKey, size]);

  // Auto-execute for invisible mode
  useEffect(() => {
    if (size === 'invisible' && grecaptchaRef.current) {
      const timer = setTimeout(() => {
        executeRecaptcha();
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [size]);

  const reset = () => {
    setVerified(false);
    setScore(null);
    setError(null);
    if (grecaptchaRef.current) {
      grecaptchaRef.current.reset(containerRef.current);
    }
  };

  return (
    <div ref={containerRef} className="captcha-container">
      {error && (
        <div className="form-error" role="alert">
          {error}
        </div>
      )}

      {/* Hidden div for reCAPTCHA badge */}
      <div aria-hidden="true" style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}>
        {size === 'invisible' && (
          <div
            id="g-recaptcha-invisible"
            data-sitekey={siteKey}
            data-size="invisible"
            data-badge="bottomright"
          />
        )}
      </div>

      {/* Manual trigger button (for visible mode or when auto fails) */}
      {(size === 'visible' || (!verified && !loading)) && siteKey && (
        <button
          type="button"
          onClick={executeRecaptcha}
          disabled={loading}
          aria-label="Verify you are human"
          style={{
            padding: '8px 16px',
            background: '#fff',
            border: '1px solid #d1d5db',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer',
          }}
        >
          {loading ? 'Verifying...' : 'Verify'}
        </button>
      )}

      {/* Status indicator */}
      {verified && (
        <div className="captcha-badge" aria-live="polite">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          <span>
            {score !== null ? `Verified (score: ${score})` : 'Verified'}
          </span>
        </div>
      )}
    </div>
  );
};

export default Captcha;
