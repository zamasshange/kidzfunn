'use client';

import { useState, type FormEvent } from 'react';
import { siteConfig } from '../lib/siteConfig';

type ContactInterestFormProps = {
  interest?: string;
  tier?: string;
  action?: string;
};

const interestLabels: Record<string, string> = {
  membership: 'Membership',
  'workshop-booking': 'Workshop Booking',
  'field-trip': 'Field Trip',
  'birthday-party': 'Birthday Party',
  donate: 'Donation',
  volunteer: 'Volunteer',
  'professional-development': 'Professional Development',
  general: 'General Inquiry',
};

function resolveSubject(interest?: string, tier?: string, action?: string) {
  if (action === 'gift') return 'Gift Membership';
  if (action === 'renew') return 'Membership Renewal';
  if (tier) return `Join as ${tier.charAt(0).toUpperCase()}${tier.slice(1)} Member`;
  if (interest && interestLabels[interest]) return interestLabels[interest];
  return 'Contact Request';
}

export default function ContactInterestForm({
  interest = 'general',
  tier,
  action,
}: ContactInterestFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const subject = resolveSubject(interest, tier, action);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '');
    const email = String(data.get('email') ?? '');
    const phone = String(data.get('phone') ?? '');
    const message = String(data.get('message') ?? '');

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      `Interest: ${subject}`,
      '',
      message,
    ]
      .filter(Boolean)
      .join('\n');

    const mailto = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p>
        Thank you! Your email app should open with your message ready to send. If it did not open,
        email us at{' '}
        <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="contact-interest-form">
      <p>
        <strong>Topic:</strong> {subject}
      </p>
      <p>
        <label htmlFor="contact-name">
          Name <span aria-hidden="true">*</span>
        </label>
        <br />
        <input id="contact-name" name="name" type="text" required />
      </p>
      <p>
        <label htmlFor="contact-email">
          Email <span aria-hidden="true">*</span>
        </label>
        <br />
        <input id="contact-email" name="email" type="email" required />
      </p>
      <p>
        <label htmlFor="contact-phone">Phone</label>
        <br />
        <input id="contact-phone" name="phone" type="tel" />
      </p>
      <p>
        <label htmlFor="contact-message">
          Message <span aria-hidden="true">*</span>
        </label>
        <br />
        <textarea id="contact-message" name="message" rows={5} required defaultValue="" />
      </p>
      <div className="wp-block-buttons is-layout-flex wp-block-buttons-is-layout-flex">
        <div className="wp-block-button">
          <button type="submit" className="wp-block-button__link wp-element-button">
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
}
