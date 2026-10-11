/**
 * Flipbook Component (EFFECT-30)
 * 8-page guide explaining the platform
 * 3D CSS page-flip, keyboard navigable
 */

import React, { useState, useEffect, useCallback } from 'react';

const Flipbook = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [textMode, setTextMode] = useState(false);
  const [pageCount, setPageCount] = useState(0);

  const pages = [
    {
      title: 'Welcome',
      subtitle: 'How Timothy Academy Dashboard Works',
      content: (
        <div className="flipbook__page-content">
          <div className="flipbook__welcome-icon">
            <svg width="80" height="80" viewBox="0 0 40 40" fill="none">
              <rect width="40" height="40" rx="8" fill="var(--ta-primary)" />
              <path d="M20 8L20 20M20 20L12 15M20 20L28 15M20 20L12 25M20 20L28 25" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="20" cy="20" r="3" fill="var(--ta-accent)" />
            </svg>
          </div>
          <h3 className="flipbook__welcome-title">Welcome to Timothy Academy Dashboard</h3>
          <p className="flipbook__welcome-text">
            A complete guide to understanding how our platform transforms school performance tracking across Kenya.
          </p>
          <div className="flipbook__page-number">Page 1 of 8</div>
        </div>
      ),
    },
    {
      title: 'Step 1: Setup',
      subtitle: 'Configure Your School',
      content: (
        <div className="flipbook__page-content">
          <div className="flipbook__step-number">01</div>
          <h3 className="flipbook__step-title">School Configuration</h3>
          <ul className="flipbook__step-list">
            <li>Enter your school name and county</li>
            <li>Add KNEC registration number</li>
            <li>Configure academic calendar with term dates</li>
            <li>Set up subject list for your curriculum</li>
            <li>Define grading scale thresholds</li>
          </ul>
          <div className="flipbook__page-number">Page 2 of 8</div>
        </div>
      ),
    },
    {
      title: 'Step 2: Add Data',
      subtitle: 'Student & Staff Import',
      content: (
        <div className="flipbook__page-content">
          <div className="flipbook__step-number">02</div>
          <h3 className="flipbook__step-title">Data Import</h3>
          <ul className="flipbook__step-list">
            <li>Import student roster via CSV</li>
            <li>Add class assignments</li>
            <li>Enter staff members and roles</li>
            <li>Configure subject-teacher mappings</li>
            <li>Set up parent contact information</li>
          </ul>
          <div className="flipbook__page-number">Page 3 of 8</div>
        </div>
      ),
    },
    {
      title: 'Step 3: Track Grades',
      subtitle: 'Real-Time Performance',
      content: (
        <div className="flipbook__page-content">
          <div className="flipbook__step-number">03</div>
          <h3 className="flipbook__step-title">Grade Tracking</h3>
          <ul className="flipbook__step-list">
            <li>Enter grades per subject per term</li>
            <li>View class averages instantly</li>
            <li>Compare against school benchmarks</li>
            <li>Identify subject strengths and weaknesses</li>
            <li>Track improvement over time</li>
          </ul>
          <div className="flipbook__page-number">Page 4 of 8</div>
        </div>
      ),
    },
    {
      title: 'Step 4: Monitor Attendance',
      subtitle: 'Attendance Management',
      content: (
        <div className="flipbook__page-content">
          <div className="flipbook__step-number">04</div>
          <h3 className="flipbook__step-title">Attendance Tracking</h3>
          <ul className="flipbook__step-list">
            <li>Mark daily attendance by class</li>
            <li>View heatmap calendar of patterns</li>
            <li>Identify chronic absenteeism early</li>
            <li>Generate attendance reports</li>
            <li>Alert parents automatically</li>
          </ul>
          <div className="flipbook__page-number">Page 5 of 8</div>
        </div>
      ),
    },
    {
      title: 'Step 5: Predict Grades',
      subtitle: 'AI-Powered Predictions',
      content: (
        <div className="flipbook__page-content">
          <div className="flipbook__step-number">05</div>
          <h3 className="flipbook__step-title">Grade Predictions</h3>
          <ul className="flipbook__step-list">
            <li>AI predicts KCSE/CBC grades per student</li>
            <li>Based on current average and trend</li>
            <li>Identify students at risk of failing</li>
            <li>Suggest personalized interventions</li>
            <li>Track prediction accuracy over time</li>
          </ul>
          <div className="flipbook__page-number">Page 6 of 8</div>
        </div>
      ),
    },
    {
      title: 'Step 6: Generate Reports',
      subtitle: 'Automated Reports',
      content: (
        <div className="flipbook__page-content">
          <div className="flipbook__step-number">06</div>
          <h3 className="flipbook__step-title">Report Generation</h3>
          <ul className="flipbook__step-list">
            <li>Generate class, term, or subject reports</li>
            <li>Download as professional PDF</li>
            <li>Share via WhatsApp instantly</li>
            <li>Schedule weekly or termly reports</li>
            <li>Send to parents automatically</li>
          </ul>
          <div className="flipbook__page-number">Page 7 of 8</div>
        </div>
      ),
    },
    {
      title: 'Step 7: Grow',
      subtitle: 'Continuous Improvement',
      content: (
        <div className="flipbook__page-content">
          <div className="flipbook__step-number">07</div>
          <h3 className="flipbook__step-title">Continuous Improvement</h3>
          <ul className="flipbook__step-list">
            <li>Review performance trends term over term</li>
            <li>Benchmark against county averages</li>
            <li>Identify areas needing intervention</li>
            <li>Celebrate improvements with staff</li>
            <li>Make data-driven decisions</li>
          </ul>
          <div className="flipbook__page-number">Page 8 of 8</div>
        </div>
      ),
    },
  ];

  const totalPages = pages.length;

  // Auto-update page count
  useEffect(() => {
    setPageCount(totalPages);
  }, [totalPages]);

  // Keyboard navigation
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
      e.preventDefault();
      if (currentPage < totalPages - 1) {
        setFlipped(false);
        setTimeout(() => {
          setCurrentPage(prev => prev + 1);
          setFlipped(true);
        }, 300);
      }
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      if (currentPage > 0) {
        setFlipped(false);
        setTimeout(() => {
          setCurrentPage(prev => prev - 1);
          setFlipped(true);
        }, 300);
      }
    }
  }, [currentPage, totalPages]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Screen reader announcement
  const announcePage = () => {
    const announcement = `Page ${currentPage + 1} of ${totalPages}: ${pages[currentPage].title}`;
    const announcer = document.getElementById('flipbook-announcer');
    if (announcer) {
      announcer.textContent = announcement;
    }
  };

  useEffect(() => {
    announcePage();
  }, [currentPage]);

  const goToPage = (page) => {
    if (page >= 0 && page < totalPages) {
      setFlipped(false);
      setTimeout(() => {
        setCurrentPage(page);
        setFlipped(true);
      }, 300);
    }
  };

  return (
    <div className="flipbook-wrapper">
      {/* Screen reader announcement */}
      <div id="flipbook-announcer" className="sr-only" aria-live="polite" />

      <div className={`flipbook ${textMode ? 'flipbook--text-mode' : ''}`}>
        {/* Page content */}
        <div
          className={`flipbook__page-wrapper ${flipped ? 'is-flipped' : ''}`}
          style={{ transform: `rotateY(${flipped ? 180 : 0}deg)` }}
        >
          <div className="flipbook__page-inner">
            {textMode ? (
              <div className="flipbook__text-content">
                <h2>{pages[currentPage].title}</h2>
                <p className="flipbook__text-subtitle">{pages[currentPage].subtitle}</p>
                <div className="flipbook__text-divider" />
                {pages[currentPage].content}
              </div>
            ) : (
              pages[currentPage].content
            )}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flipbook__controls">
        <div className="flipbook__nav">
          <button
            className="flipbook__nav-btn flipbook__nav-btn--prev"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 0}
            aria-label="Previous page"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className="flipbook__page-indicator" aria-live="polite">
            <span className="flipbook__page-current">{currentPage + 1}</span>
            <span className="flipbook__page-separator">/</span>
            <span className="flipbook__page-total">{totalPages}</span>
          </div>

          <button
            className="flipbook__nav-btn flipbook__nav-btn--next"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages - 1}
            aria-label="Next page"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        <div className="flipbook__options">
          <button
            className={`flipbook__option-btn ${textMode ? 'is-active' : ''}`}
            onClick={() => setTextMode(!textMode)}
            aria-pressed={textMode}
          >
            {textMode ? 'Visual Mode' : 'Text Mode'}
          </button>
        </div>

        {/* Dots for each page */}
        <div className="flipbook__dots" role="tablist" aria-label="Flipbook pages">
          {pages.map((_, index) => (
            <button
              key={index}
              role="tab"
              className={`flipbook__dot ${index === currentPage ? 'is-active' : ''}`}
              onClick={() => goToPage(index)}
              aria-selected={index === currentPage}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Instructions for keyboard users */}
      <p className="flipbook__hint">
        Use <kbd>←</kbd> <kbd>→</kbd> arrow keys or swipe to navigate pages
      </p>
    </div>
  );
};

export default Flipbook;
