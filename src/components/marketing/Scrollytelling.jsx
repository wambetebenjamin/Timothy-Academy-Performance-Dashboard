/**
 * Scrollytelling Section (EFFECT-02)
 * 4-beat pinned chapter showing school transformation
 * IntersectionObserver, never hijacks wheel speed
 * Flat article under reduced-motion
 */

import React, { useState, useEffect, useRef } from 'react';

const Scrollytelling = () => {
  const [activeBeat, setActiveBeat] = useState(0);
  const scrollContainerRef = useRef(null);
  const beatsRef = useRef([]);
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Intersecting beats
  useEffect(() => {
    const beats = beatsRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = beats.indexOf(entry.target);
            if (index !== -1) {
              setActiveBeat(index);
            }
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '-50% 0px -50% 0px',
      }
    );

    beats.forEach((beat, index) => {
      if (index > 0) { // Skip the pinned visual
        observer.observe(beat);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Window resize handler to recalculate positions
  useEffect(() => {
    // Re-observe on resize if needed
  }, []);

  // Visual states for each beat
  const beats = [
    {
      id: 1,
      title: 'Before',
      visual: (
        <div className="scrollytelling__visual-beat scrollytelling__visual-beat--before">
          <div className="scrollytelling__visual-content">
            <div className="scrollytelling__teacher">
              <div className="scrollytelling__teacher-avatar">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="14" r="8" fill="var(--ta-primary)" />
                  <path d="M6 40c0-8 6-14 14-14s14 6 14 14" fill="var(--ta-primary)" />
                </svg>
              </div>
              <div className="scrollytelling__teacher-content">
                <div className="scrollytelling__papers">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="scrollytelling__paper" style={{
                      transform: `rotate(${Math.random() * 20 - 10}deg)`,
                      left: `${20 + Math.random() * 60}%`,
                      bottom: `${20 + Math.random() * 40}%`,
                      opacity: 0.8,
                    }} />
                  ))}
                </div>
                <p className="scrollytelling__visual-text">
                  Marking papers manually...
                </p>
                <p className="scrollytelling__visual-subtext">
                  No data overview
                </p>
              </div>
            </div>
            <div className="scrollytelling__status-badge scrollytelling__status-badge--negative">
              No visibility into performance
            </div>
          </div>
        </div>
      ),
      text: (
        <div>
          <h4>Manual Process</h4>
          <p className="scrollytelling__step-description">
            Teachers spend hours marking papers by hand. No centralized data. No way to spot trends across the school.
          </p>
          <ul className="scrollytelling__step-list">
            <li><span className="scrollytelling__step-icon scrollytelling__step-icon--negative">X</span> Grades recorded on paper</li>
            <li><span className="scrollytelling__step-icon scrollytelling__step-icon--negative">X</span> No real-time insights</li>
            <li><span className="scrollytelling__step-icon scrollytelling__step-icon--negative">X</span> Can't identify struggling students early</li>
          </ul>
        </div>
      ),
    },
    {
      id: 2,
      title: 'The Problem',
      visual: (
        <div className="scrollytelling__visual-beat scrollytelling__visual-beat--problem">
          <div className="scrollytelling__visual-content">
            <div className="scrollytelling__principal">
              <div className="scrollytelling__principal-avatar">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="14" r="8" fill="var(--ta-warning)" />
                  <path d="M6 40c0-8 6-14 14-14s14 6 14 14" fill="var(--ta-warning)" />
                </svg>
              </div>
              <div className="scrollytelling__principal-content">
                <p className="scrollytelling__visual-text">
                  Principal making decisions...
                </p>
                <p className="scrollytelling__visual-subtext">
                  Without data
                </p>
                <div className="scrollytelling__confusion-icons">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--ta-warning)" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--ta-warning)" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      text: (
        <div>
          <h4>Decisions Without Data</h4>
          <p className="scrollytelling__step-description">
            School leaders make important decisions without reliable data. Resources may not go where they're needed most.
          </p>
          <ul className="scrollytelling__step-list">
            <li><span className="scrollytelling__step-icon scrollytelling__step-icon--negative">X</span> Guess which subjects need help</li>
            <li><span className="scrollytelling__step-icon scrollytelling__step-icon--negative">X</span> Can't track improvement over time</li>
            <li><span className="scrollyteaching__step-icon scrollytelling__step-icon--negative">X</span> Reactive instead of proactive</li>
          </ul>
        </div>
      ),
    },
    {
      id: 3,
      title: 'The Solution',
      visual: (
        <div className="scrollytelling__visual-beat scrollytelling__visual-beat--solution">
          <div className="scrollytelling__visual-content">
            <div className="scrollytelling__dashboard-mockup">
              <div className="scrollytelling__dashboard-header">
                <div className="scrollytelling__dashboard-dots">
                  <span /><span /><span />
                </div>
                <div className="scrollytelling__dashboard-title">Timothy Academy Dashboard</div>
              </div>
              <div className="scrollytelling__dashboard-body">
                <div className="scrollytelling__kpi-mini">
                  <div className="scrollytelling__kpi-value" style={{ color: 'var(--ta-success)' }}>847</div>
                  <div className="scrollytelling__kpi-label">Students Tracked</div>
                </div>
                <div className="scrollytelling__mini-chart">
                  <svg viewBox="0 0 120 60" className="scrollytelling__mini-chart-svg">
                    <path d="M0 50 L20 40 L40 35 L60 30 L80 25 L100 20 L120 15" stroke="var(--ta-primary)" strokeWidth="2" fill="none" />
                    <path d="M0 50 L20 40 L40 35 L60 30 L80 25 L100 20 L120 15 L120 60 L0 60 Z" fill="var(--ta-primary)" opacity="0.2" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="scrollytelling__status-badge scrollytelling__status-badge--positive">
              Dashboard installed
            </div>
          </div>
        </div>
      ),
      text: (
        <div>
          <h4>Timothy Academy Dashboard</h4>
          <p className="scrollytelling__step-description">
            Real-time student performance tracking, predictive insights, and automated reports for Kenyan schools.
          </p>
          <ul className="scrollytelling__step-list">
              <li><span className="scrollytelling__step-icon scrollytelling__step-icon--positive">+</span> Live grade tracking</li>
              <li><span className="scrollytelling__step-icon scrollytelling__step-icon--positive">+</span> Attendance heatmaps</li>
              <li><span className="scrollytelling__step-icon scrollytelling__step-icon--positive">+</span> Grade predictions</li>
            </ul>
          <div className="scrollytelling__highlight-box">
            <strong>150+</strong> schools already using the platform
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: 'Results',
      visual: (
        <div className="scrollytelling__visual-beat scrollytelling__visual-beat--results">
          <div className="scrollytelling__visual-content">
            <div className="scrollytelling__teachers-grid">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="scrollytelling__teacher-mini">
                  <div className="scrollytelling__teacher-mini-avatar">
                    <svg width="24" height="24" viewBox="0 0 40 40" fill="none">
                      <circle cx="20" cy="14" r="8" fill="var(--ta-success)" />
                      <path d="M6 40c0-8 6-14 14-14s14 6 14 14" fill="var(--ta-success)" />
                    </svg>
                  </div>
                  <div className="scrollytelling__teacher-mini-data">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ta-success)" strokeWidth="2">
                      <polyline points="22 12 18 12 15 9 9 15 6 12 2 12" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
            <p className="scrollytelling__visual-text">
              Every teacher sees their class data
            </p>
            <p className="scrollytelling__visual-subtext scrollytelling__visual-subtext--positive">
              Results improve significantly
            </p>
            <div className="scrollytelling__results-stats">
              <div className="scrollytelling__result-stat">
                <span className="scrollytelling__result-number">15%</span>
                <span className="scrollytelling__result-label">Higher pass rate</span>
              </div>
              <div className="scrollytelling__result-stat">
                <span className="scrollytelling__result-number">60%</span>
                <span className="scrollytelling__result-label">Fewer parent inquiries</span>
              </div>
              <div className="scrollytelling__result-stat">
                <span className="scrollytelling__result-number">3hr</span>
                <span className="scrollytelling__result-label">Saved per teacher/week</span>
              </div>
            </div>
          </div>
        </div>
      ),
      text: (
        <div>
          <h4>Data-Driven Teaching</h4>
          <p className="scrollytelling__step-description">
            Teachers access their class performance data instantly. Principals make informed decisions. Students benefit from targeted interventions.
          </p>
          <ul className="scrollytelling__step-list">
            <li><span className="scrollytelling__step-icon scrollytelling__step-icon--positive">+</span> Every teacher empowered with data</li>
            <li><span className="scrollytelling__step-icon scrollytelling__step-icon--positive">+</span> Early intervention for at-risk students</li>
            <li><span className="scrollytelling__step-icon scrollytelling__step-icon--positive">+</span> Measurable improvement in results</li>
          </ul>
        </div>
      ),
    },
  ];

  // If reduced motion, show all visuals stacked
  if (isReducedMotion) {
    return (
      <section className="scrollytelling scrollytelling--flat">
        <div className="scrollytelling__container">
          <div className="scrollytelling__header">
            <span className="scrollytelling__eyebrow">Scrollytelling</span>
            <h2 className="scrollytelling__title">How Timothy Academy Dashboard Transforms Schools</h2>
          </div>

          <div className="scrollytelling__flat-content">
            {beats.map((beat, index) => (
              <div key={beat.id} className="scrollytelling__flat-beat">
                <div className="scrollytelling__flat-visual">
                  {beat.visual}
                </div>
                <div className="scrollytelling__flat-text">
                  <span className="scrollytelling__beat-number">Beat {beat.id}</span>
                  <h3>Beat {beat.id}: {beat.title}</h3>
                  {beat.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="scrollytelling">
      <div className="scrollytelling__container">
        <div className="scrollytelling__header">
          <span className="scrollytelling__eyebrow">Scrollytelling</span>
          <h2 className="scrollytelling__title">How Timothy Academy Dashboard Transforms Schools</h2>
        </div>

        {/* Pinned visual */}
        <div className="scrollytelling__sticky">
          {beats[activeBeat].visual}
        </div>

        {/* Steps that trigger as you scroll */}
        <div className="scrollytelling__steps">
          {beats.map((beat, index) => (
            <div
              key={beat.id}
              ref={(el) => { beatsRef.current[index] = el; }}
              className={`scrollytelling__step ${index === activeBeat ? 'is-active' : ''}`}
            >
              <div className="scrollytelling__step-indicator">
                <span className="scrollytelling__step-number">{beat.id}</span>
              </div>
              {beat.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Scrollytelling;
