/**
 * Loading Screen Component (Timothy Academy Dashboard)
 * Pencil SVG draws a line graph from left to right
 * Wordmark appears below
 * Progress fills, skip at 3 seconds
 */

import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const LoadingScreen = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(true);
  const svgRef = useRef(null);
  const startTimeRef = useRef(Date.now());

  useEffect(() => {
    const maxDuration = 3000; // 3 seconds max
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const newProgress = Math.min(100, (elapsed / maxDuration) * 100);
      setProgress(newProgress);

      if (newProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setShow(false);
          navigate('/', { replace: true });
        }, 300);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [navigate]);

  const pathD = `M 30 ${200 - (progress / 100) * 150} L 60 ${200 - (progress / 100) * 150} L 90 ${200 - (progress / 100) * 180} L 120 ${200 - (progress / 100) * 120} L 150 ${200 - (progress / 100) * 160} L 180 ${200 - (progress / 100) * 140} L 210 ${200 - (progress / 100) * 170}`;

  return (
    <div className={`loading-screen ${show ? '' : 'hidden'}`} role="status" aria-live="polite">
      <svg
        ref={svgRef}
        className="loading-screen__pencil"
        viewBox="0 0 240 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Grid lines */}
        <line x1="30" y1="50" x2="210" y2="50" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <line x1="30" y1="100" x2="210" y2="100" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <line x1="30" y1="150" x2="210" y2="150" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <line x1="30" y1="200" x2="210" y2="200" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

        {/* Axes */}
        <line x1="30" y1="30" x2="30" y2="200" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
        <line x1="30" y1="200" x2="210" y2="200" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />

        {/* Animated data line */}
        <path
          d={pathD}
          stroke="#c1440e"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Data points */}
        <circle cx="30" cy={200 - (progress / 100) * 150} r="4" fill="#c1440e" />
        <circle cx="60" cy={200 - (progress / 100) * 150} r="4" fill="#c1440e" />
        <circle cx="90" cy={200 - (progress / 100) * 180} r="4" fill="#c1440e" />
        <circle cx="120" cy={200 - (progress / 100) * 120} r="4" fill="#c1440e" />
        <circle cx="150" cy={200 - (progress / 100) * 160} r="4" fill="#c1440e" />
        <circle cx="180" cy={200 - (progress / 100) * 140} r="4" fill="#c1440e" />
        <circle cx="210" cy={200 - (progress / 100) * 170} r="4" fill="#c1440e" />
      </svg>

      <div className="loading-screen__wordmark">
        Timothy Academy Dashboard
      </div>

      <div className="loading-screen__progress">
        <div
          className="loading-screen__progress-bar"
          style={{ width: `${progress}%` }}
          role="progressbar"
          aria-valuenow={Math.round(progress)}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>

      <div className="loading-screen__percentage">
        {Math.round(progress)}%
      </div>
    </div>
  );
};

export default LoadingScreen;
