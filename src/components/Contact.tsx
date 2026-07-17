"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [phone, setPhone] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // const initialCaptcha = "NAX24B";
  // const generateCaptcha = () => {
  //   const chars =
  //     "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789";

  //   return Array.from({ length: 6 }, () =>
  //     chars[Math.floor(Math.random() * chars.length)]
  //   ).join("");
  // };

  // const buildCaptchaStyle = (text: string) =>
  //   text.split("").map((char, index) => {
  //     const seed = char.charCodeAt(0) + index * 17;
  //     return {
  //       rotate: (seed % 25) - 12,
  //       size: 20 + (seed % 5),
  //     };
  //   });

  // const buildCaptchaDots = (text: string) =>
  //   Array.from({ length: 20 }, (_, index) => {
  //     const seed = text.charCodeAt(index % text.length) + index * 29;
  //     return {
  //       left: `${(seed * 37) % 100}%`,
  //       top: `${(seed * 53) % 100}%`,
  //     };
  //   });

  // const [captcha, setCaptcha] = useState(initialCaptcha);
  // const [captchaInput, setCaptchaInput] = useState("");
  // const [captchaStyle, setCaptchaStyle] = useState(() =>
  //   buildCaptchaStyle(initialCaptcha)
  // );
  // const [captchaDots, setCaptchaDots] = useState(() =>
  //   buildCaptchaDots(initialCaptcha)
  // );
  // const refreshCaptcha = () => {
  //   const nextCaptcha = generateCaptcha();
  //   setCaptcha(nextCaptcha);
  //   setCaptchaStyle(buildCaptchaStyle(nextCaptcha));
  //   setCaptchaDots(buildCaptchaDots(nextCaptcha));
  //   setCaptchaInput("");
  // };

  // useEffect(() => {
  //   refreshCaptcha();
  // }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;

    setError(null);
    setErrors({});
    setIsSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const businessType = String(data.get("businessType") ?? "").trim();
    const budget = String(data.get("budget") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const newErrors: Record<string, string> = {};

    // if (captchaInput.trim() !== captcha) {
    //   newErrors.captcha = "Verification code is incorrect.";
    // }

    // Name
    if (!name) {
      newErrors.name = "Please enter your name.";
    } else if (name.length < 2) {
      newErrors.name = "Name must contain at least 2 characters.";
    }

    // Mobile
    if (!phone.trim()) {
      newErrors.phone = "Please enter your mobile number.";
    } else if (phone.replace(/\D/g, "").length < 10) {
      newErrors.phone = "Please enter a valid mobile number.";
    }

    // Email
    if (!email) {
      newErrors.email = "Please enter your email address.";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Company
    if (!company) {
      newErrors.company = "Please enter your company / organisation.";
    }

    // Business Type
    if (!businessType) {
      newErrors.businessType = "Please select your business type.";
    }

    // Budget
    if (!budget) {
      newErrors.budget = "Please select your budget.";
    }

    // Message
    if (!message) {
      newErrors.message = "Please enter your project details.";
    } else if (message.length < 30) {
      newErrors.message =
        "Message must contain at least 30 characters.";
    }

    // Stop if validation failed
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    const payload = {
      name,
      mobile: phone,
      email,
      company,
      businessType,
      budget,
      subject: "Project Inquiry",
      message,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => null);
        setError(body?.error ?? "Something went wrong. Please try again.");
        return;
      }

      form.reset();
      setPhone("");
      setErrors({});
      // refreshCaptcha();
      window.location.href = "/thank-you";
    } catch {
      setError("Network error. Please try again.");
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
            <h3 className="text-3xl md:text-4xl font-bold leading-tight">

              Let's Build Something Amazing Together

            </h3>

            <p className="mt-4 text-lg font-semibold text-primary">

              Professional Website & Software Development

              starting from just

              ₹14,999

            </p>
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
            className="glass-card p-5 rounded-3xl relative overflow-hidden">

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[14px] font-normal">Name *</label>
                  <input
                    name="name"
                    type="text"
                    minLength={2}
                    maxLength={60}
                    placeholder="John Doe"
                    className="w-full px-3 py-2 rounded-xl bg-white border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/15 outline-none transition-all shadow-sm hover:border-gray-400"
                    onChange={(e) => {
                      const value = e.target.value;

                      setErrors(prev => ({
                        ...prev,
                        name:
                          value.length === 0
                            ? "Please enter your name."
                            : value.length < 2
                              ? "Name must contain at least 2 characters."
                              : "",
                      }));
                    }}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div className="space-y-1">
                  <label className="text-[14px] font-normal">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>

                  <PhoneInput
                    country="in"
                    enableSearch
                    value={phone}
                    onChange={(value) => {
                      setPhone(value);

                      const digits = value.replace(/\D/g, "");

                      setErrors(prev => ({
                        ...prev,
                        phone:
                          digits.length === 0
                            ? "Please enter your mobile number."
                            : digits.length < 10
                              ? "Please enter a valid mobile number."
                              : "",
                      }));
                    }}
                    inputProps={{ name: "phone" }}
                    containerClass="w-full"
                    inputClass="!w-full !h-[42px] !rounded-xl !border !border-gray-300 !pl-12 !text-[14px] shadow-sm focus:!border-primary"
                    buttonClass="!border-gray-300 !rounded-l-xl"
                    dropdownClass="!text-sm"
                  />

                  {errors.phone && (
                    <p className="text-xs text-red-500">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[14px] font-normal">Email *</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    className="w-full px-3 py-2 rounded-xl bg-white border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/15 outline-none transition-all shadow-sm hover:border-gray-400"
                    onChange={(e) => {
                      const value = e.target.value;

                      setErrors(prev => ({
                        ...prev,
                        email:
                          value.length === 0
                            ? "Please enter your email address."
                            : !emailRegex.test(value)
                              ? "Please enter a valid email address."
                              : "",
                      }));
                    }}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div className="space-y-1">
                  <label className="text-[14px] font-normal">Company / Organisation *</label>
                  <input
                    name="company"
                    type="text"
                    placeholder="Company Name"
                    className="w-full px-3 py-2 rounded-xl bg-white border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/15 outline-none transition-all shadow-sm hover:border-gray-400"
                    onChange={(e) => {
                      setErrors(prev => ({
                        ...prev,
                        company: e.target.value.trim()
                          ? ""
                          : "Please enter your company / organisation.",
                      }));
                    }}
                  />
                  {errors.company && (
                    <p className="text-xs text-red-500">
                      {errors.company}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[14px] font-normal">
                    Type of Business *
                  </label>
                  <select
                    name="businessType"
                    className="w-full px-3 py-2 rounded-xl bg-white border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/15 outline-none transition-all appearance-none shadow-sm hover:border-gray-400"
                    onChange={(e) => {
                      setErrors(prev => ({
                        ...prev,
                        businessType: e.target.value
                          ? ""
                          : "Please select your business type.",
                      }));
                    }}
                  >
                    <option value="">Select Type of Business</option>
                    <option value="Startup">Startup</option>
                    <option value="Services">Services</option>
                    <option value="Retail / E-commerce">Retail / E-commerce</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.businessType && (
                    <p className="text-xs text-red-500">
                      {errors.businessType}
                    </p>
                  )}
                </div>
                <div className="space-y-1">
                  <label className="text-[14px] font-normal">Budget *</label>
                  <select
                    name="budget"
                    className="w-full px-3 py-2 rounded-xl bg-white border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/15 outline-none transition-all appearance-none shadow-sm hover:border-gray-400"
                    onChange={(e) => {
                      setErrors(prev => ({
                        ...prev,
                        budget: e.target.value
                          ? ""
                          : "Please select your budget.",
                      }));
                    }}
                  >
                    <option value="">Select Budget</option>
                    <option value="10000-25000">Rs 10,000 - Rs 25,000</option>
                    <option value="25000-50000">Rs 25,000 - Rs 50,000</option>
                    <option value="50000-100000">Rs 50,000 - Rs 1,00,000</option>
                    <option value="100000+">Rs 1,00,000+</option>
                  </select>
                  {errors.budget && (
                    <p className="text-xs text-red-500">
                      {errors.budget}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[14px] font-normal">Message *</label>
                <textarea
                  name="message"
                  rows={3}
                  className="w-full px-3 py-2 rounded-xl bg-white border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/15 outline-none transition-all resize-none shadow-sm hover:border-gray-400"
                  onChange={(e) => {
                    const value = e.target.value;

                    setErrors(prev => ({
                      ...prev,
                      message:
                        value.length === 0
                          ? "Please enter your project details."
                          : value.length < 30
                            ? "Message must contain at least 30 characters."
                            : "",
                    }));
                  }}
                />
                {errors.message && (
                  <p className="text-xs text-red-500">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* <div className="space-y-1">
                <label className="text-[14px] font-normal">
                  Human Verification <span className="text-red-500">*</span>
                </label>

                <div className="flex items-center gap-3">

                  <div className="relative h-10 w-36 overflow-hidden rounded-xl border border-sky-200 bg-gradient-to-br from-cyan-100 via-sky-50 to-white">
                    <div className="absolute inset-0">
                      {captchaDots.map((dot, i) => (
                        <span
                          key={i}
                          className="absolute h-1 w-1 rounded-full bg-sky-500/30"
                          style={{
                            left: dot.left,
                            top: dot.top,
                          }}
                        />
                      ))}
                    </div>

                    <div
                      className="absolute left-0 top-1/2 h-[2px] w-full bg-sky-500/60"
                      style={{
                        transform: "rotate(-10deg)",
                      }}
                    />

                    <div className="relative flex h-full items-center justify-center gap-[1px] font-serif font-bold">
                      {captcha.split("").map((char, i) => (
                        <span
                          key={i}
                          style={{
                            transform: `rotate(${captchaStyle[i].rotate}deg)`,
                            fontSize: captchaStyle[i].size,
                          }}
                        >
                          {char}
                        </span>
                      ))}
                    </div>
                  </div>

                  <input
                    type="text"
                    maxLength={6}
                    value={captchaInput}
                    onChange={(e) => {
                      setCaptchaInput(e.target.value);

                      setErrors((prev) => ({
                        ...prev,
                        captcha: "",
                      }));
                    }}
                    placeholder="Code"
                    className="h-10 w-36 rounded-xl border border-gray-300 px-4 text-center font-mono text-lg tracking-[0.35em] outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />

                  <button
                    type="button"
                    onClick={refreshCaptcha}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-300 bg-white transition hover:bg-gray-50"
                    title="Generate new code"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v6h6M20 20v-6h-6M20 8A8 8 0 006.3 5.3L4 8m16 8l-2.3 2.7A8 8 0 014 16"
                      />
                    </svg>
                  </button>

                </div>

                {errors.captcha && (
                  <p className="text-xs text-red-500">
                    {errors.captcha}
                  </p>
                )}
              </div> */}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary py-3 mt-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none"
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





