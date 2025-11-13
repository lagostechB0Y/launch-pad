
import React from 'react';

const SubscriptionForm: React.FC = () => {
  return (
    <div className="w-full max-w-md my-10">
      <p className="text-navy font-bold mb-3">Be first to know when we launch.</p>
      <form 
        action="https://formspree.io/f/your_form_id" // Replace with your Formspree ID
        method="POST"
        className="flex flex-col sm:flex-row items-center gap-3 w-full"
      >
        <label htmlFor="email-address" className="sr-only">Email address</label>
        <input
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="appearance-none relative block w-full px-4 py-3 border border-navy/20 placeholder-navy/40 text-navy rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold sm:text-sm transition"
          placeholder="Enter your email address"
        />
        <button
          type="submit"
          className="group relative w-full sm:w-auto flex justify-center py-3 px-6 border border-transparent text-sm font-bold rounded-md text-white bg-navy hover:bg-navy/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy transition-colors whitespace-nowrap"
        >
          Notify Me
        </button>
      </form>
    </div>
  );
};

export default SubscriptionForm;
