import React from 'react'

import { useState } from 'react';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    // Create mailto link for newsletter signup
    const subject = 'Newsletter Signup - Street Level Pulse';
    const body = `I would like to subscribe to the Street Level Pulse newsletter.\n\nEmail: ${email}`;
    const mailtoLink = `mailto:info@streetlevelentrepreneur.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(mailtoLink, '_blank');
    setIsSubmitted(true);
    setEmail('');

    // Reset the submitted state after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          required
          className="flex-1 px-3 py-2 text-gray-900 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-sle-gold focus:border-transparent font-open-sans text-sm"
        />
        <button
          type="submit"
          disabled={isSubmitted}
          className={`px-4 py-2 rounded-md font-semibold font-nunito transition-colors text-sm ${
            isSubmitted
              ? 'bg-green-600 text-white cursor-not-allowed'
              : 'bg-sle-gold hover:bg-sle-brown text-white'
          }`}
        >
          {isSubmitted ? '✓ Sent!' : 'Subscribe'}
        </button>
      </div>

      {isSubmitted && (
        <p className="text-sm text-green-400 font-open-sans">
          Thank you! Please check your email to complete the signup.
        </p>
      )}
    </form>
  );
};

export default NewsletterForm;
