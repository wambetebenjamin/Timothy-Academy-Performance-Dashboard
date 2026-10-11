/**
 * Testimonials Component
 * School leaders and teachers testimonials
 */

import React, { useEffect, useRef, useState } from 'react';

const Testimonials = ({ testimonials: testimonialsData }) => {
  const [visible, setVisible] = useState(new Array(testimonialsData.length).fill(false));
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = testimonialsData.findIndex(t => t.id === parseInt(entry.target.dataset.index));
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
  }, [testimonialsData]);

  return (
    <div className="testimonials-grid" ref={sectionRef}>
      {testimonialsData.map((testimonial, index) => (
        <div
          key={testimonial.id}
          data-index={testimonial.id}
          className={`testimonial-card ${visible[index] ? 'is-visible' : ''}`}
          style={{
            transitionDelay: visible[index] ? `${index * 100}ms` : '0ms',
          }}
        >
          <div className="testimonial-card__quote">
            "{testimonial.quote}"
          </div>

          <div className="testimonial-card__author">
            <div className="testimonial-card__avatar">
              {testimonial.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)}
            </div>
            <div className="testimonial-card__author-info">
              <div className="testimonial-card__name">{testimonial.name}</div>
              <div className="testimonial-card__title">{testimonial.title}</div>
              <div className="testimonial-card__school">{testimonial.school}, {testimonial.county}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
