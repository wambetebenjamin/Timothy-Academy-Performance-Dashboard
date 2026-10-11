/**
 * Contact Form Component
 * School registration form with reCAPTCHA
 */

import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    schoolName: '',
    county: '',
    schoolType: '',
    principalName: '',
    email: '',
    phone: '',
    students: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.schoolName.trim()) newErrors.schoolName = 'School name is required';
    if (!formData.county) newErrors.county = 'County is required';
    if (!formData.schoolType) newErrors.schoolType = 'School type is required';
    if (!formData.principalName.trim()) newErrors.principalName = 'Principal name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.students) newErrors.students = 'Number of students is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="contact-form contact-form--success">
        <div className="contact-form__success-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--ta-success)" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <polyline points="8 12 11 15 16 9" />
          </svg>
        </div>
        <h3 className="contact-form__success-title">Thank You!</h3>
        <p className="contact-form__success-message">
          We've received your inquiry. Our team will contact you within 24 hours to discuss how Timothy Academy Dashboard can help your school.
        </p>
        <button
          className="btn btn--outline"
          onClick={() => {
            setSubmitted(false);
            setFormData({
              schoolName: '',
              county: '',
              schoolType: '',
              principalName: '',
              email: '',
              phone: '',
              students: '',
              message: '',
            });
            setErrors({});
          }}
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  const counties = [
    'Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Eldoret',
    'Meru', 'Thika', 'Kitale', 'Kisii', 'Embu', 'Machakos',
    'Kericho', 'Nyeri', 'Malindi', 'Kakamega', 'Other'
  ];

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row form-row--2">
        <div className="form-group">
          <label htmlFor="schoolName" className="form-label">School Name *</label>
          <input
            type="text"
            id="schoolName"
            className={`form-input ${errors.schoolName ? 'form-input--error' : ''}`}
            value={formData.schoolName}
            onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
            placeholder="e.g. Timothy Academy"
            autoComplete="organization"
          />
          {errors.schoolName && <span className="form-error">{errors.schoolName}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="county" className="form-label">County *</label>
          <select
            id="county"
            className={`form-select ${errors.county ? 'form-input--error' : ''}`}
            value={formData.county}
            onChange={(e) => setFormData({ ...formData, county: e.target.value })}
          >
            <option value="">Select county</option>
            {counties.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          {errors.county && <span className="form-error">{errors.county}</span>}
        </div>
      </div>

      <div className="form-row form-row--2">
        <div className="form-group">
          <label htmlFor="schoolType" className="form-label">School Type *</label>
          <select
            id="schoolType"
            className={`form-select ${errors.schoolType ? 'form-input--error' : ''}`}
            value={formData.schoolType}
            onChange={(e) => setFormData({ ...formData, schoolType: e.target.value })}
          >
            <option value="">Select type</option>
            <option value="primary">Primary School</option>
            <option value="secondary">Secondary School</option>
            <option value="mixed">Mixed (Primary & Secondary)</option>
            <option value="special">Special Needs School</option>
          </select>
          {errors.schoolType && <span className="form-error">{errors.schoolType}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="students" className="form-label">Number of Students *</label>
          <input
            type="number"
            id="students"
            className={`form-input ${errors.students ? 'form-input--error' : ''}`}
            value={formData.students}
            onChange={(e) => setFormData({ ...formData, students: e.target.value })}
            placeholder="e.g. 500"
            min="1"
            autoComplete="off"
          />
          {errors.students && <span className="form-error">{errors.students}</span>}
          <span className="form-hint">Approximate number of enrolled students</span>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="principalName" className="form-label">Principal/Headteacher Name *</label>
          <input
            type="text"
            id="principalName"
            className={`form-input ${errors.principalName ? 'form-input--error' : ''}`}
            value={formData.principalName}
            onChange={(e) => setFormData({ ...formData, principalName: e.target.value })}
            placeholder="Full name"
            autoComplete="name"
          />
          {errors.principalName && <span className="form-error">{errors.principalName}</span>}
        </div>
      </div>

      <div className="form-row form-row--2">
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email Address *</label>
          <input
            type="email"
            id="email"
            className={`form-input ${errors.email ? 'form-input--error' : ''}`}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="principal@school.co.ke"
            autoComplete="email"
          />
          {errors.email && <span className="form-error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="phone" className="form-label">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            className={`form-input ${errors.phone ? 'form-input--error' : ''}`}
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+254 700 000 000"
            autoComplete="tel"
          />
          {errors.phone && <span className="form-error">{errors.phone}</span>}
          <span className="form-hint">WhatsApp-enabled number preferred</span>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="message" className="form-label">Message (Optional)</label>
        <textarea
          id="message"
          className="form-textarea"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Any specific questions or requirements..."
          rows={3}
        />
      </div>

      {/* reCAPTCHA placeholder - would be real in production */}
      <div className="form-group">
        <div className="captcha-placeholder">
          <div className="captcha-placeholder__content">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--ta-primary)" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <polyline points="9 12 11 14 15 10" />
            </svg>
            <span>reCAPTCHA verification</span>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="btn btn--primary form-submit"
        disabled={submitting}
      >
        {submitting ? (
          <>
            <svg className="spinner" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
            </svg>
            Submitting...
          </>
        ) : (
          <>
            Submit Inquiry
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </>
        )}
      </button>

      <p className="contact-form__note">
        By submitting, you agree to our Terms of Service and Privacy Policy.
        We'll never share your data with third parties.
      </p>
    </form>
  );
};

export default ContactForm;
