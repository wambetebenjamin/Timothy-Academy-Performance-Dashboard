/**
 * WhatsApp Floating Button Component
 * For marketing site only (not in dashboard app)
 */

import React, { useState } from 'react';

const WhatsAppFloat = () => {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const handleClick = () => {
    window.open(
      'https://wa.me/254112272061?text=Hello!%20I%20am%20interested%20in%20Timothy%20Academy%20Dashboard%20for%20my%20school.',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div
      className="whatsapp-float"
      onClick={handleClick}
      onMouseEnter={() => setTooltipVisible(true)}
      onMouseLeave={() => setTooltipVisible(false)}
      onFocus={() => setTooltipVisible(true)}
      onBlur={() => setTooltipVisible(false)}
      role="button"
      tabIndex={0}
      aria-label="Book a demo or ask about the platform on WhatsApp"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.472 14.382c-2.106 1.458-4.864 2.005-7.721 1.587-3.133-.46-5.944-2.154-7.249-4.456-1.417-2.488-.574-5.287.809-7.122 1.385-1.835 3.48-2.904 5.657-3.027 2.562-.135 4.796.838 6.429 2.66 1.633-1.826 3.867-2.85 6.394-2.689 2.333.148 4.254 1.06 5.782 2.43 1.549-1.386 3.68-2.213 6.078-2.093 2.644.13 4.192 1.656 5.075 3.59 1.04-1.54 1.563-2.848 1.5-3.882-.167-2.72 1.094-4.778 2.74-6.21 2.035-1.798 4.626-2.435 7.041-1.766 1.899.55 3.378 1.826 4.057 3.392 1.03-.233 1.983-.73 2.954-1.073-2.44-1.402-5.28-2.16-8.217-2.289-.844-.04-1.72-.022-2.633.098m-5.654 6.44v-2.772c0-.837.466-1.334 1.21-1.385.482-.033.931.155 1.248.445a.34.34 0 0 1 .083.325c-.076.156-.184.29-.314.406-.387.303-.702.693-.792 1.264a9.103 9.103 0 0 1-.19 1.086c0 .408.204.662.545.76.462.13.85-.142 1.047-.458.116-.18.144-.422.144-.736v-1.36c0-.778-.432-1.205-1.09-1.255-.677-.05-1.295.22-1.672.66-.376.44-.601.957-.693 1.524-.117.712.123 1.342.664 1.756.398.31.826.469 1.26.465.844-.004 1.408-.522 1.653-1.186.245-.666.244-1.374.158-1.96-.055-.344-.14-.626-.254-.858a1.1 1.1 0 0 0-.416-.46" />
      </svg>

      <div
        className="whatsapp-float__tooltip"
        style={{ opacity: tooltipVisible ? 1 : 0 }}
      >
        Book a demo or ask about the platform
      </div>
    </div>
  );
};

export default WhatsAppFloat;
