'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

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
      <div className="text-center p-12 bg-primary/8 border border-primary/25 rounded-xl mt-12 max-w-2xl mx-auto">
        <h3 className="text-xl font-bold text-primary mb-2.5">Thank you!</h3>
        <p className="text-sm text-text-inverse/70">We&apos;ve received your message and will be in touch within one business day.</p>
      </div>
    );
  }

  const inputClass = "w-full px-4 py-3.5 bg-white/5 border border-white/15 rounded-lg text-text-inverse text-sm transition-all focus:border-primary/55 focus:bg-white/8 outline-none placeholder:text-text-inverse/40";

  return (
    <form className="max-w-2xl mx-auto text-left bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10" onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-text-inverse/80" htmlFor="cf-first">
            First name <span className="text-primary">*</span>
          </label>
          <input id="cf-first" name="firstName" type="text" required
            className={inputClass} placeholder="Enter your first name" />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-text-inverse/80" htmlFor="cf-last">
            Last name <span className="text-primary">*</span>
          </label>
          <input id="cf-last" name="lastName" type="text" required
            className={inputClass} placeholder="Enter your last name" />
        </div>

        <div className="flex flex-col gap-2 md:col-span-2">
          <label className="text-sm font-semibold text-text-inverse/80" htmlFor="cf-company">
            Company name <span className="text-primary">*</span>
          </label>
          <input id="cf-company" name="company" type="text" required
            className={inputClass} placeholder="Enter a company name" />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-text-inverse/80" htmlFor="cf-email">
            Email <span className="text-primary">*</span>
          </label>
          <input id="cf-email" name="email" type="email" required
            className={inputClass} placeholder="Enter your email" />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-text-inverse/80" htmlFor="cf-phone">
            Phone <span className="text-primary">*</span>
          </label>
          <input id="cf-phone" name="phone" type="tel" required
            className={inputClass} placeholder="Enter your phone number" />
        </div>

        <div className="flex flex-col gap-2 md:col-span-2">
          <div className="text-sm font-semibold text-text-inverse/80 mb-3">
            What&apos;s stopping you from being a Tech-Forward Organization? <span className="text-primary">*</span>
          </div>
          <div className="flex flex-col gap-2.5">
            {stoppingOptions.map(opt => (
              <label
                key={opt}
                className={cn(
                  'flex items-center gap-3 cursor-pointer py-2.5 px-3.5 rounded-lg border transition-all text-sm',
                  checked.has(opt)
                    ? 'border-primary/55 bg-primary/10 text-text-inverse'
                    : 'border-white/10 bg-white/4 text-text-inverse/70 hover:border-primary/35 hover:bg-white/7',
                )}
              >
                <input
                  type="checkbox"
                  name="stopping"
                  value={opt}
                  checked={checked.has(opt)}
                  onChange={() => toggleOption(opt)}
                  className="appearance-none w-4.5 h-4.5 flex-shrink-0 border border-white/30 rounded bg-transparent cursor-pointer transition-all checked:bg-primary checked:border-primary relative"
                />
                {opt}
              </label>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 md:col-span-2">
          <label className="text-sm font-semibold text-text-inverse/80" htmlFor="cf-message">
            Message
          </label>
          <textarea id="cf-message" name="message"
            className={cn(inputClass, "resize-y min-h-[110px]")} placeholder="Tell us more about your goals..." />
        </div>

      </div>

      <button type="submit" className="mt-7 w-full py-4 px-6 bg-primary text-primary-contrast text-sm font-bold rounded-lg border-none cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary disabled:opacity-60 disabled:cursor-not-allowed" disabled={loading}>
        {loading ? 'Sending…' : 'Send Message →'}
      </button>
    </form>
  );
}
