import React, { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Logic for handling form data would go here
  };

  return (
    <section className="my-12">
      <h2 className="text-3xl font-semibold text-blue-600">Contact</h2>
      {submitted ? (
        <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg">
          Thanks for reaching out! I'll get back to you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 space-y-4 max-w-md">
          <input 
            type="email" 
            placeholder="Your Email" 
            required 
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      )}
    </section>
  );
};

export default Contact;