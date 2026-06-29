"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { CheckCircle2, Mail, MapPin, Phone, Send } from 'lucide-react';

export function Contact() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setError(null);
    setIsSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    const company = String(data.get('company') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    const payload = {
      name: String(data.get('name') ?? '').trim(),
      email: String(data.get('email') ?? '').trim(),
      budget: String(data.get('budget') ?? '').trim(),
      subject: company ? `Project inquiry from ${company}` : 'Project inquiry',
      message: company ? `Company: ${company}\n\n${message}` : message
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const body = await response.json().catch(() => null);
        setError(body?.error ?? 'Something went wrong. Please try again.');
        return;
      }

      form.reset();
      // setIsSuccess(true);
      // const body = await response.json().catch(() => null);
      // window.dataLayer = window.dataLayer || [];

      // window.dataLayer.push({
      //   event: "lead_form_submit",
      //   value: 1,
      //   currency: "INR"
      // });
      // router.push("/thank-you");
      window.location.href = "/thank-you"
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="pt-10 pb-5 md:pt-16 bg-gray-50/50 dark:bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">
              Contact Us
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Let&apos;s Build Something Amazing Together
            </h3>
            <p className="text-light dark:text-gray-400 mb-10 text-lg">
              Ready to transform your business? Fill out the form and our team
              will get back to you within 24 hours to schedule a discovery call.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  title: 'Email',
                  detail: 'contact@naxoratechnology.com'
                },
                {
                  icon: Phone,
                  title: 'Phone',
                  detail: '+91 9232784935'
                },
                {
                  icon: MapPin,
                  title: 'Office',
                  detail: 'Vrindavan Nagar, Ayodhya Bypass, Bhopal, 462022'
                }
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center shrink-0 shadow-sm">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold mb-1">{item.title}</div>
                    <div className="text-light dark:text-gray-400">{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-3xl relative overflow-hidden"
          >
            {/* {isSuccess ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/95 dark:bg-navy/95 backdrop-blur-sm z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4"
                >
                  <CheckCircle2 className="w-8 h-8 text-green-500" />
                </motion.div>
                <h4 className="text-2xl font-bold mb-2">Message Sent!</h4>
                <p className="text-light text-center px-6">
                  We&apos;ll be in touch shortly to discuss your project.
                </p>
              </div>
            ) : null} */}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium">Name *</label>
                  <input
                    name="name"
                    required
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/15 outline-none transition-all shadow-sm hover:border-gray-400"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium">Email *</label>
                  <input
                    name="email"
                    required
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/15 outline-none transition-all shadow-sm hover:border-gray-400"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium">Company</label>
                  <input
                    name="company"
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/15 outline-none transition-all shadow-sm hover:border-gray-400"
                    placeholder="Company Name"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium">Budget</label>
                  <select
                    name="budget"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/15 outline-none transition-all appearance-none shadow-sm hover:border-gray-400"
                  >
                    <option value="">Select Budget</option>
                    <option value="10000-25000">Rs 10,000 - Rs 25,000</option>
                    <option value="25000-50000">Rs 25,000 - Rs 50,000</option>
                    <option value="50000-100000">Rs 50,000 - Rs 1,00,000</option>
                    <option value="100000+">Rs 1,00,000+</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium">Message *</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/15 outline-none transition-all resize-none shadow-sm hover:border-gray-400"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary py-4 mt-2"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Submit Inquiry <Send className="w-4 h-4" />
                  </span>
                )}
              </button>

              {error ? <p className="text-sm text-red-500">{error}</p> : null}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
