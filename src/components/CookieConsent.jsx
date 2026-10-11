/**
 * Cookie Consent Banner Component
 * Kenya Data Protection Act 2019 compliant
 * localStorage based, no repeat
 * Modal with category preferences
 */

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CookieConsent = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // Cookie categories
  const categories = [
    {
      id: 'necessary',
      name: 'Necessary',
      locked: true,
      description: 'Required for the dashboard to function. These cookies enable basic features like page navigation and access to secure areas. The website cannot function properly without these cookies.',
      accepted: true,
    },
    {
      id: 'functional',
      name: 'Functional',
      locked: false,
      description: 'Enable enhanced functionality and personalization. These cookies allow the dashboard to remember your preferences and settings.',
      accepted: false,
    },
    {
      id: 'analytics',
      name: 'Analytics',
      locked: false,
      description: 'Help us understand how the dashboard is used. We use this data to improve performance and user experience. Student data is never used for analytics.',
      accepted: false,
    },
    {
      id: 'marketing',
      name: 'Marketing',
      locked: false,
      description: 'Used to deliver relevant content and measure campaign effectiveness. Note: Student data is NEVER used for third-party marketing purposes.',
      accepted: false,
    },
  ];

  useEffect(() => {
    const consent = localStorage.getItem('timothy-cookie-consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const consent = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
      timestamp: Date.now(),
    };
    localStorage.setItem('timothy-cookie-consent', JSON.stringify(consent));
    setVisible(false);
  };

  const handleManagePreferences = () => {
    setModalOpen(true);
  };

  const handleSavePreferences = (selected) => {
    const consent = {
      ...selected,
      timestamp: Date.now(),
    };
    localStorage.setItem('timothy-cookie-consent', JSON.stringify(consent));
    setModalOpen(false);
    setVisible(false);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  if (!visible && !modalOpen) return null;

  return (
    <>
      {/* Cookie Consent Banner */}
      <div className="cookie-consent" role="alert" aria-live="polite">
        <div className="cookie-consent__inner">
          <div className="cookie-consent__message">
            <strong>Timothy Academy Dashboard</strong> uses cookies to personalise your
            dashboard experience and measure platform performance.{' '}
            <a href="/legal/cookie-policy">See our Cookie Policy</a>.
            <br />
            <span style={{ fontSize: '0.8em', opacity: 0.8 }}>
              Student data never used for third-party marketing. Kenya Data Protection Act 2019 compliant.
            </span>
          </div>
          <div className="cookie-consent__actions">
            <button
              className="cookie-consent__btn cookie-consent__btn--secondary"
              onClick={handleManagePreferences}
              aria-label="Manage cookie preferences"
            >
              Manage Preferences
            </button>
            <button
              className="cookie-consent__btn cookie-consent__btn--primary"
              onClick={handleAcceptAll}
              aria-label="Accept all cookies"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>

      {/* Cookie Preferences Modal */}
      {modalOpen && (
        <div className="cookie-modal" role="dialog" aria-modal="true" aria-labelledby="cookie-modal-title">
          <div className="cookie-modal__content">
            <h3 id="cookie-modal-title" className="cookie-modal__title">
              Cookie Preferences
            </h3>

            {categories.map((category) => (
              <div key={category.id} className="cookie-modal__category">
                <input
                  type="checkbox"
                  id={`cookie-${category.id}`}
                  className="cookie-modal__checkbox"
                  checked={category.accepted}
                  disabled={category.locked}
                  aria-describedby={`cookie-${category.id}-desc`}
                />
                <div className="cookie-modal__category-info">
                  <label
                    htmlFor={`cookie-${category.id}`}
                    className="cookie-modal__category-name"
                    style={{ cursor: category.locked ? 'default' : 'pointer' }}
                  >
                    {category.name}
                    {category.locked && (
                      <span style={{ fontSize: '0.7em', color: '#6b7280', marginLeft: '8px' }}>
                        (Required)
                      </span>
                    )}
                  </label>
                  <p
                    id={`cookie-${category.id}-desc`}
                    className="cookie-modal__category-desc"
                  >
                    {category.description}
                  </p>
                </div>
              </div>
            ))}

            <div className="cookie-modal__footer">
              <button
                className="cookie-consent__btn cookie-consent__btn--secondary"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
              <button
                className="cookie-consent__btn cookie-consent__btn--primary"
                onClick={() => {
                  const selected = {};
                  categories.forEach(cat => {
                    selected[cat.id] = cat.locked ? true : document.getElementById(`cookie-${cat.id}`).checked;
                  });
                  handleSavePreferences(selected);
                }}
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
