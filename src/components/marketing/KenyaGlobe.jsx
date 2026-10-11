/**
 * Kenya County Map Globe (EFFECT-01)
 * SVG-based interactive map showing schools across Kenya counties
 * Keyboard navigable with arrow keys
 * Poster fallback under prefers-reduced-motion
 */

import React, { useState, useEffect, useRef, useCallback } from 'react';

const KenyaGlobe = ({ counties }) => {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [hoveredCounty, setHoveredCounty] = useState(null);
  const [focusedCounty, setFocusedCounty] = useState(null);
  const containerRef = useRef(null);
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Auto-rotation animation
  useEffect(() => {
    if (isReducedMotion) return;

    let animationId;
    let velocity = 0.002;
    let lastTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const delta = (now - lastTime) / 1000;
      lastTime = now;

      setRotation(prev => {
        const newRotation = prev + velocity * delta * 60;
        // Slowly oscillate for visual interest
        velocity = 0.002 + Math.sin(now / 5000) * 0.001;
        return newRotation % 360;
      });

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isReducedMotion]);

  // Drag handling
  const handleMouseDown = useCallback((e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStart.x;
    setRotation(prev => prev + deltaX * 0.5);
    setDragStart({ x: e.clientX, y: e.clientY });
  }, [isDragging, dragStart]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Keyboard navigation
  const handleKeyDown = useCallback((e) => {
    const step = e.shiftKey ? 15 : 5;
    switch (e.key) {
      case 'ArrowLeft':
        setRotation(prev => prev - step);
        break;
      case 'ArrowRight':
        setRotation(prev => prev + step);
        break;
      default:
        break;
    }
  }, []);

  // Calculate county positions with rotation
  const getCountyPosition = (county, index) => {
    const baseX = 50 + Math.sin((index * 0.5) + rotation * 0.01) * 30;
    const baseY = 50 + Math.cos((index * 0.5) + rotation * 0.01) * 25;
    return {
      x: 250 * (baseX / 100),
      y: 250 * (baseY / 100),
      scale: 1 + Math.sin(index * 0.8 + rotation * 0.02) * 0.1,
    };
  };

  // Poster mode for reduced motion
  const renderPoster = () => (
    <svg viewBox="0 0 500 500" className="kenya-globe__poster" role="img" aria-label="Map of Kenya showing school distribution across counties">
      {/* Country outline */}
      <ellipse cx="250" cy="250" rx="200" ry="160" fill="none" stroke="var(--ta-primary)" strokeWidth="2" opacity="0.3" />
      <ellipse cx="250" cy="250" rx="180" ry="140" fill="none" stroke="var(--ta-primary)" strokeWidth="1.5" opacity="0.2" />

      {/* County markers */}
      {counties.map((county, index) => {
        const pos = getCountyPosition(county, index);
        const isHovered = hoveredCounty === county.name;
        return (
          <g key={county.name} style={{ transform: `translate(${pos.x - 250}px, ${pos.y - 250}px) scale(${pos.scale})`, transformOrigin: 'center' }}>
            <circle
              cx="0"
              cy="0"
              r={isHovered ? 12 : 8}
              fill={isHovered ? 'var(--ta-accent)' : 'var(--ta-primary)'}
              className="kenya-globe__dot"
              onMouseEnter={() => setHoveredCounty(county.name)}
              onMouseLeave={() => setHoveredCounty(null)}
              style={{ cursor: 'pointer', transition: 'r 0.2s ease, fill 0.2s ease' }}
            />
            <text
              x="0"
              y="-16"
              textAnchor="middle"
              className="kenya-globe__label"
              style={{
                fill: isHovered ? 'white' : 'var(--ta-school-navy)',
                fontSize: isHovered ? '11px' : '10px',
                fontWeight: '600',
                pointerEvents: 'none',
                transition: 'fill 0.2s ease, fontSize 0.2s ease',
              }}
            >
              {county.name}
            </text>
            <text
              x="0"
              y="8"
              textAnchor="middle"
              className="kenya-globe__count"
              style={{
                fill: isHovered ? 'white' : 'var(--ta-school-navy)',
                fontSize: '9px',
                fontWeight: '700',
                pointerEvents: 'none',
                transition: 'fill 0.2s ease',
              }}
            >
              {county.count} schools
            </text>
          </g>
        );
      })}
    </svg>
  );

  // Animated version
  const renderAnimated = () => (
    <svg
      viewBox="0 0 500 500"
      className="kenya-globe__animated"
      role="img"
      aria-label="Interactive map showing schools across Kenya counties"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onKeyDown={handleKeyDown}
      ref={containerRef}
      tabIndex={0}
      aria-label="Kenya county map. Use arrow keys to navigate. Drag to rotate."
    >
      {/* Glow effects for dots */}
      {counties.map((county, index) => {
        const pos = getCountyPosition(county, index);
        return (
          <circle
            key={`glow-${county.name}`}
            cx={pos.x}
            cy={pos.y}
            r={15}
            fill="var(--ta-primary)"
            opacity={0.2}
            className="kenya-globe__glow"
          />
        );
      })}

      {/* Kenya outline */}
      <ellipse cx="250" cy="250" rx="190" ry="155" fill="none" stroke="var(--ta-primary)" strokeWidth="1" opacity="0.4" strokeDasharray="4 4" />
      <ellipse cx="250" cy="250" rx="170" ry="135" fill="none" stroke="var(--ta-primary)" strokeWidth="0.5" opacity="0.2" />

      {/* County markers with animations */}
      {counties.map((county, index) => {
        const pos = getCountyPosition(county, index);
        const isHovered = hoveredCounty === county.name;

        return (
          <g key={county.name}>
            {/* Pulsing ring */}
            <circle
              cx={pos.x}
              cy={pos.y}
              r={isHovered ? 14 : 10}
              fill="none"
              stroke="var(--ta-primary)"
              strokeWidth="2"
              opacity={0.4}
              className="kenya-globe__pulse"
            />

            {/* Main dot */}
            <circle
              cx={pos.x}
              cy={pos.y}
              r={isHovered ? 10 : 7}
              fill={isHovered ? 'var(--ta-accent)' : 'var(--ta-primary)'}
              className="kenya-globe__dot"
              onMouseEnter={() => setHoveredCounty(county.name)}
              onMouseLeave={() => setHoveredCounty(null)}
              style={{
                cursor: 'pointer',
                transition: 'r 0.2s ease, fill 0.2s ease',
              }}
            />

            {/* Label */}
            <text
              x={pos.x}
              y={pos.y - 18}
              textAnchor="middle"
              className="kenya-globe__label"
              style={{
                fill: isHovered ? 'white' : 'var(--ta-school-navy)',
                fontSize: isHovered ? '12px' : '11px',
                fontWeight: '600',
                pointerEvents: 'none',
                transition: 'all 0.2s ease',
                textShadow: isHovered ? '0 1px 2px rgba(0,0,0,0.2)' : 'none',
              }}
            >
              {county.name}
            </text>

            {/* Count */}
            <text
              x={pos.x}
              y={pos.y + 10}
              textAnchor="middle"
              className="kenya-globe__count"
              style={{
                fill: isHovered ? 'white' : 'var(--ta-school-navy)',
                fontSize: '10px',
                fontWeight: '700',
                pointerEvents: 'none',
                transition: 'all 0.2s ease',
                textShadow: isHovered ? '0 1px 2px rgba(0,0,0,0.2)' : 'none',
              }}
            >
              {county.count} schools
            </text>
          </g>
        );
      })}

      {/* Decorative grid lines */}
      <line x1="0" y1="250" x2="500" y2="250" stroke="var(--ta-primary)" strokeWidth="0.5" opacity="0.1" strokeDasharray="2 4" />
      <line x1="250" y1="0" x2="250" y2="500" stroke="var(--ta-primary)" strokeWidth="0.5" opacity="0.1" strokeDasharray="2 4" />
    </svg>
  );

  return (
    <div className="kenya-globe" ref={containerRef}>
      {/* Screen reader announcement */}
      <div className="sr-only" aria-live="polite">
        {hoveredCounty && `Hovering ${hoveredCounty}. ${counties.find(c => c.name === hoveredCounty)?.count} schools subscribed.`}
      </div>

      {/* County info when hovered */}
      {hoveredCounty && (
        <div className="kenya-globe__tooltip">
          <div className="kenya-globe__tooltip-name">{hoveredCounty}</div>
          <div className="kenya-globe__tooltip-count">
            {counties.find(c => c.name === hoveredCounty)?.count} schools subscribed
          </div>
        </div>
      )}

      {isReducedMotion ? renderPoster() : renderAnimated()}
    </div>
  );
};

export default KenyaGlobe;
