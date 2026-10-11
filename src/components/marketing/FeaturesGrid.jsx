/**
 * Features Grid Component
 * 8 feature cards with icons from inline SVG
 * Stagger fade-up on scroll
 */

import React, { useEffect, useRef, useState } from 'react';

const FeaturesGrid = ({ features }) => {
  const [visible, setVisible] = useState(new Array(features.length).fill(false));
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = features.findIndex(f => f.id === parseInt(entry.target.dataset.index));
            if (index !== -1) {
              setVisible(prev => {
                const newVisible = [...prev];
                newVisible[index] = true;
                return newVisible;
              });
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('[data-index]');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [features]);

  const featureIcons = {
    chart: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M18 9l-5 5-4-4-3 3" />
      </svg>
    ),
    trending: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    target: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    calendar: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    users: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    'file-text': (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    map: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
        <line x1="8" y1="2" x2="8" y2="18" />
        <line x1="16" y1="6" x2="16" y2="22" />
      </svg>
    ),
    school: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63 1.06 19.5 19.5 0 0 1-8.06-1.87 19.79 19.79 0 0 1-6.66-5.05 19.76 19.76 0 0 1-2.52-7.02A2 2 0 0 1 4.69 2.5H2a2 2 0 0 1 2-2h4.68a2 2 0 0 1 1.41.59 19.76 19.76 0 0 1 2.52 7.02 19.79 19.79 0 0 1 6.66 5.05 19.5 19.5 0 0 1 8.06 1.87 19.79 19.79 0 0 1 8.63-1.06 2 2 0 0 1 2.18-2z" />
      </svg>
    ),
  };

  return (
    <div className="features-grid" ref={sectionRef}>
      {features.map((feature, index) => (
        <div
          key={feature.id}
          data-index={feature.id}
          className={`feature-card ${visible[index] ? 'is-visible' : ''}`}
          style={{
            transitionDelay: visible[index] ? `${index * 100}ms` : '0ms',
          }}
        >
          <div className="feature-card__icon">
            {featureIcons[feature.icon] || featureIcons.chart}
          </div>
          <h3 className="feature-card__title">{feature.title}</h3>
          <p className="feature-card__description">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturesGrid;
