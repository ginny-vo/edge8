'use client';

import { useState } from 'react';

const stoppingOptions = [
  "I need to find a community of Tech-Forward people",
  "My organization doesn't have an aligned approach to AI",
  "I want to achieve more with AI by implementing a program.",
  "I need to build AI Agents",
  "We want to hire Global Talent",
  "My company is ready to scale our AI Efforts",
  "I have a large scale systems integration project",
  "It's time to build my own personal brand.",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const toggleOption = (opt: string) => {
    setChecked(prev => {
      const next = new Set(prev);
      if (next.has(opt)) next.delete(opt);
      else next.add(opt);
      return next;
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="contact-form-success">
        <h3>Thank you!</h3>
        <p>We&rsquo;ve received your message and will be in touch within one business day.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form-grid">

        <div className="contact-form-group">
          <label className="contact-form-label" htmlFor="cf-first">
            First name <span>*</span>
          </label>
          <input id="cf-first" name="firstName" type="text" required
            className="contact-form-input" placeholder="Enter your first name" />
        </div>

        <div className="contact-form-group">
          <label className="contact-form-label" htmlFor="cf-last">
            Last name <span>*</span>
          </label>
          <input id="cf-last" name="lastName" type="text" required
            className="contact-form-input" placeholder="Enter your last name" />
        </div>

        <div className="contact-form-group full">
          <label className="contact-form-label" htmlFor="cf-company">
            Company name <span>*</span>
          </label>
          <input id="cf-company" name="company" type="text" required
            className="contact-form-input" placeholder="Enter a company name" />
        </div>

        <div className="contact-form-group">
          <label className="contact-form-label" htmlFor="cf-email">
            Email <span>*</span>
          </label>
          <input id="cf-email" name="email" type="email" required
            className="contact-form-input" placeholder="Enter your email" />
        </div>

        <div className="contact-form-group">
          <label className="contact-form-label" htmlFor="cf-phone">
            Phone <span>*</span>
          </label>
          <input id="cf-phone" name="phone" type="tel" required
            className="contact-form-input" placeholder="Enter your phone number" />
        </div>

        <div className="contact-form-group full">
          <div className="contact-form-label" style={{ marginBottom: '12px' }}>
            What&rsquo;s stopping you from being a Tech-Forward Organization? <span style={{ color: 'rgb(111,242,193)' }}>*</span>
          </div>
          <div className="contact-form-checkbox-list">
            {stoppingOptions.map(opt => (
              <label
                key={opt}
                className={`contact-form-checkbox-item${checked.has(opt) ? ' checked' : ''}`}
              >
                <input
                  type="checkbox"
                  name="stopping"
                  value={opt}
                  checked={checked.has(opt)}
                  onChange={() => toggleOption(opt)}
                />
                {opt}
              </label>
            ))}
          </div>
        </div>

        <div className="contact-form-group full">
          <label className="contact-form-label" htmlFor="cf-message">
            Message
          </label>
          <textarea id="cf-message" name="message"
            className="contact-form-textarea" placeholder="Tell us more about your goals..." />
        </div>

      </div>

      <button type="submit" className="contact-form-submit" disabled={loading}>
        {loading ? 'Sending…' : 'Send Message →'}
      </button>
    </form>
  );
}
