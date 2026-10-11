/**
 * Pricing Section Component
 * 3 tiers with monthly/annual toggle
 */

import React from 'react';

const PricingSection = ({ plans, annualDiscount }) => {
  const formatPrice = (price) => {
    if (annualDiscount) {
      return Math.round(price / 3);
    }
    return price;
  };

  return (
    <div className="pricing-grid">
      {plans.map((plan, index) => (
        <div
          key={plan.id}
          className={`pricing-card ${plan.popular ? 'pricing-card--featured' : ''}`}
          style={{
            transitionDelay: `${index * 100}ms`,
          }}
        >
          {plan.popular && <div className="pricing-card__badge">Most Popular</div>}

          <h3 className="pricing-card__name">{plan.name}</h3>
          <p className="pricing-card__description">{plan.description}</p>

          <div className="pricing-card__price">
            <span className="pricing-card__currency">KES</span>
            <span className="pricing-card__amount">{formatPrice(plan.price).toLocaleString()}</span>
          </div>
          <p className="pricing-card__period">
            {annualDiscount ? `/month, billed annually` : '/month'}
          </p>

          <p className="pricing-card__students">Up to {plan.students.toLocaleString()} students</p>

          <ul className="pricing-card__features">
            {plan.features.map((feature, i) => (
              <li key={i} className="pricing-card__feature">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>

          <div className="pricing-card__support">
            <strong>{plan.support}</strong>
          </div>

          <button className={`btn btn--${plan.popular ? 'primary' : 'outline'} pricing-card__cta`}>
            Sign Up - Free Trial
          </button>
        </div>
      ))}
    </div>
  );
};

export default PricingSection;
