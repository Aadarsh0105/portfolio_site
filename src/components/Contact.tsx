"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  SendIcon,
  CheckCircle2Icon } from
'lucide-react';
const CONTACT_INFO = [
{
  icon: MailIcon,
  label: 'Email us',
  value: 'hello@launchfast.io',
  href: 'mailto:hello@launchfast.io'
},
{
  icon: PhoneIcon,
  label: 'Call us',
  value: '+1 (555) 123-4567',
  href: 'tel:+15551234567'
},
{
  icon: MapPinIcon,
  label: 'Visit us',
  value: '123 Innovation Drive, SF',
  href: '#'
}];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;

    setError(null);
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get('name') ?? ''),
      email: String(data.get('email') ?? ''),
      subject: String(data.get('subject') ?? ''),
      message: String(data.get('message') ?? ''),
      budget: String(data.get('budget') ?? '')
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        setError(body?.error ?? 'Something went wrong. Please try again.');
        return;
      }

      form.reset();
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent-start/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-accent-end/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            className="text-3xl md:text-4xl font-bold mb-6">
            
            Get in <span className="text-gradient">touch</span>
          </motion.h2>
          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.1
            }}
            className="text-lg text-text-secondary">
            
            Have a project in mind? Drop us a message and we'll get back to you
            within 24 hours.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info Sidebar */}
          <motion.div
            initial={{
              opacity: 0,
              x: -20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            className="lg:col-span-2 space-y-4">
            
            <div className="p-8 rounded-2xl bg-surface border border-border h-full">
              <h3 className="text-xl font-bold mb-2">Let's talk</h3>
              <p className="text-text-secondary text-sm mb-8 leading-relaxed">
                Prefer a quick chat? Reach us through any of these channels.
              </p>

              <div className="space-y-5">
                {CONTACT_INFO.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-start gap-4 group">
                      
                      <div className="w-11 h-11 shrink-0 rounded-xl bg-background border border-border flex items-center justify-center text-text-primary group-hover:text-accent-start group-hover:border-accent-start/50 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-wider text-text-secondary font-medium mb-1">
                          {item.label}
                        </div>
                        <div className="text-text-primary font-medium group-hover:text-accent-start transition-colors">
                          {item.value}
                        </div>
                      </div>
                    </a>);

                })}
              </div>

              <div className="mt-10 pt-8 border-t border-border">
                <div className="flex items-center gap-3 text-sm text-text-secondary">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </span>
                  Available for new projects
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{
              opacity: 0,
              x: 20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            className="lg:col-span-3">
            
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl bg-surface border border-border space-y-5">
              
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2">
                    
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:border-accent-start focus:ring-2 focus:ring-accent-start/20 text-sm transition-all" />
                  
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2">
                    
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:border-accent-start focus:ring-2 focus:ring-accent-start/20 text-sm transition-all" />
                  
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2">
                  
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Project inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:border-accent-start focus:ring-2 focus:ring-accent-start/20 text-sm transition-all" />
                
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2">
                  
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:border-accent-start focus:ring-2 focus:ring-accent-start/20 text-sm transition-all resize-none" />
                
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">
                  Budget range
                </label>
                <div className="flex flex-wrap gap-2">
                  {['< $100', '$100 – $500', '$500 – $2k', '$2k+'].map(
                    (budget) =>
                    <label
                      key={budget}
                      className="px-4 py-2 rounded-full bg-background border border-border text-sm cursor-pointer hover:border-accent-start/50 transition-colors has-[:checked]:bg-text-primary has-[:checked]:text-background has-[:checked]:border-text-primary">
                      
                        <input
                        type="radio"
                        name="budget"
                        value={budget}
                        className="sr-only" />
                      
                        {budget}
                      </label>

                  )}
                </div>
              </div>

              <motion.button
                type="submit"
                whileTap={{
                  scale: 0.98
                }}
                disabled={submitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-accent text-white font-medium hover:shadow-lg hover:shadow-accent-start/25 transition-all">
                
                {submitted ?
                <>
                    <CheckCircle2Icon className="w-4 h-4" />
                    Message sent
                  </> :

                <>
                    {submitting ? 'Sending…' : 'Send message'}
                    <SendIcon className="w-4 h-4" />
                  </>
                }
              </motion.button>

              {error && (
                <div className="text-sm text-red-600">{error}</div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>);

}
