"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Mail,
  MessageCircle,
  Phone,
  Send,
  X,
} from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ContactModal({
  open,
  onClose,
}: ContactModalProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [phone, setPhone] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const PHONE =
    process.env.NEXT_PUBLIC_PHONE ?? "+919232784935";

  /*
   * Prevent background scrolling while modal is open
   */
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /*
   * Close modal with ESC
   */
  useEffect(() => {
    if (!open) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose]);

  /*
   * Form submission
   * Same API + validation logic as your existing Contact component
   */
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
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
    const businessType = String(
      data.get("businessType") ?? ""
    ).trim();
    const budget = String(data.get("budget") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const newErrors: Record<string, string> = {};

    /*
     * Name
     */
    if (!name) {
      newErrors.name = "Please enter your name.";
    } else if (name.length < 2) {
      newErrors.name =
        "Name must contain at least 2 characters.";
    }

    /*
     * Mobile
     */
    if (!phone.trim()) {
      newErrors.phone =
        "Please enter your mobile number.";
    } else if (
      phone.replace(/\D/g, "").length < 10
    ) {
      newErrors.phone =
        "Please enter a valid mobile number.";
    }

    /*
     * Email
     */
    if (!email) {
      newErrors.email =
        "Please enter your email address.";
    } else if (!emailRegex.test(email)) {
      newErrors.email =
        "Please enter a valid email address.";
    }

    /*
     * Company
     */
    if (!company) {
      newErrors.company =
        "Please enter your company / organisation.";
    }

    /*
     * Business Type
     */
    if (!businessType) {
      newErrors.businessType =
        "Please select your business type.";
    }

    /*
     * Budget
     */
    if (!budget) {
      newErrors.budget =
        "Please select your budget.";
    }

    /*
     * Message
     */
    if (!message) {
      newErrors.message =
        "Please enter your project details.";
    } else if (message.length < 30) {
      newErrors.message =
        "Message must contain at least 30 characters.";
    }

    /*
     * Stop if validation failed
     */
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    /*
     * Same payload as your existing Contact form
     */
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
        const body = await response
          .json()
          .catch(() => null);

        setError(
          body?.error ??
            "Something went wrong. Please try again."
        );

        return;
      }

      /*
       * Same successful submission behavior
       */
      form.reset();
      setPhone("");
      setErrors({});

      window.location.href = "/thank-you";
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/80 p-3 backdrop-blur-md sm:p-6"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              onClose();
            }
          }}
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.97,
            }}
            transition={{
              duration: 0.25,
            }}
            className="relative flex max-h-[94vh] w-full max-w-3xl flex-col overflow-hidden rounded-[28px] bg-white shadow-[0_30px_100px_rgba(0,0,0,.45)]"
          >
            {/* =========================
                HEADER
            ========================= */}

            <div className="relative shrink-0 overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 px-6 py-5 text-white sm:px-8">
              {/* Glow */}

              <div className="pointer-events-none absolute -right-20 -top-24 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

              <button
                type="button"
                onClick={onClose}
                aria-label="Close contact form"
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative">
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-green-300" />

                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-50">
                    Free Consultation
                  </span>
                </div>

                <h2 className="pr-10 text-2xl font-black sm:text-3xl">
                  Let's Build Something Amazing
                </h2>

                <p className="mt-1.5 text-sm text-blue-50">
                  Tell us about your project and we'll get
                  back to you within 24 hours.
                </p>
              </div>
            </div>

            {/* =========================
                FORM
            ========================= */}

            <div className="overflow-y-auto">
              <form
                onSubmit={handleSubmit}
                className="space-y-4 p-5 sm:p-7"
              >
                {/* Name + Mobile */}

                <div className="grid gap-4 sm:grid-cols-2">
                  {/* Name */}

                  <div className="space-y-1">
                    <label className="text-[14px] font-medium text-slate-800">
                      Name *
                    </label>

                    <input
                      name="name"
                      type="text"
                      minLength={2}
                      maxLength={60}
                      placeholder="John Doe"
                      className="h-[42px] w-full rounded-xl border border-gray-300 bg-white px-3 text-[14px] text-slate-900 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15"
                      onChange={(e) => {
                        const value = e.target.value;

                        setErrors((prev) => ({
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

                  {/* Mobile */}

                  <div className="space-y-1">
                    <label className="text-[14px] font-medium text-slate-800">
                      Mobile Number *
                    </label>

                    <PhoneInput
                      country="in"
                      enableSearch
                      value={phone}
                      onChange={(value) => {
                        setPhone(value);

                        const digits =
                          value.replace(/\D/g, "");

                        setErrors((prev) => ({
                          ...prev,
                          phone:
                            digits.length === 0
                              ? "Please enter your mobile number."
                              : digits.length < 10
                                ? "Please enter a valid mobile number."
                                : "",
                        }));
                      }}
                      inputProps={{
                        name: "phone",
                      }}
                      containerClass="w-full"
                      inputClass="!w-full !h-[42px] !rounded-xl !border !border-gray-300 !pl-12 !text-[14px] shadow-sm focus:!border-blue-500"
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

                {/* Email + Company */}

                <div className="grid gap-4 sm:grid-cols-2">
                  {/* Email */}

                  <div className="space-y-1">
                    <label className="text-[14px] font-medium text-slate-800">
                      Email *
                    </label>

                    <input
                      name="email"
                      type="email"
                      placeholder="john@company.com"
                      className="h-[42px] w-full rounded-xl border border-gray-300 bg-white px-3 text-[14px] text-slate-900 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15"
                      onChange={(e) => {
                        const value = e.target.value;

                        setErrors((prev) => ({
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

                  {/* Company */}

                  <div className="space-y-1">
                    <label className="text-[14px] font-medium text-slate-800">
                      Company / Organisation *
                    </label>

                    <input
                      name="company"
                      type="text"
                      placeholder="Company Name"
                      className="h-[42px] w-full rounded-xl border border-gray-300 bg-white px-3 text-[14px] text-slate-900 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15"
                      onChange={(e) => {
                        setErrors((prev) => ({
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

                {/* Business + Budget */}

                <div className="grid gap-4 sm:grid-cols-2">
                  {/* Business Type */}

                  <div className="space-y-1">
                    <label className="text-[14px] font-medium text-slate-800">
                      Type of Business *
                    </label>

                    <select
                      name="businessType"
                      defaultValue=""
                      className="h-[42px] w-full appearance-none rounded-xl border border-gray-300 bg-white px-3 text-[14px] text-slate-900 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15"
                      onChange={(e) => {
                        setErrors((prev) => ({
                          ...prev,
                          businessType:
                            e.target.value
                              ? ""
                              : "Please select your business type.",
                        }));
                      }}
                    >
                      <option value="">
                        Select Type of Business
                      </option>

                      <option value="Startup">
                        Startup
                      </option>

                      <option value="Services">
                        Services
                      </option>

                      <option value="Retail / E-commerce">
                        Retail / E-commerce
                      </option>

                      <option value="Manufacturing">
                        Manufacturing
                      </option>

                      <option value="Other">
                        Other
                      </option>
                    </select>

                    {errors.businessType && (
                      <p className="text-xs text-red-500">
                        {errors.businessType}
                      </p>
                    )}
                  </div>

                  {/* Budget */}

                  <div className="space-y-1">
                    <label className="text-[14px] font-medium text-slate-800">
                      Budget *
                    </label>

                    <select
                      name="budget"
                      defaultValue=""
                      className="h-[42px] w-full appearance-none rounded-xl border border-gray-300 bg-white px-3 text-[14px] text-slate-900 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15"
                      onChange={(e) => {
                        setErrors((prev) => ({
                          ...prev,
                          budget:
                            e.target.value
                              ? ""
                              : "Please select your budget.",
                        }));
                      }}
                    >
                      <option value="">
                        Select Budget
                      </option>

                      <option value="10000-25000">
                        Rs 10,000 - Rs 25,000
                      </option>

                      <option value="25000-50000">
                        Rs 25,000 - Rs 50,000
                      </option>

                      <option value="50000-100000">
                        Rs 50,000 - Rs 1,00,000
                      </option>

                      <option value="100000+">
                        Rs 1,00,000+
                      </option>
                    </select>

                    {errors.budget && (
                      <p className="text-xs text-red-500">
                        {errors.budget}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}

                <div className="space-y-1">
                  <label className="text-[14px] font-medium text-slate-800">
                    Message *
                  </label>

                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Tell us about your project, required features, timeline, etc."
                    className="w-full resize-none rounded-xl border border-gray-300 bg-white px-3 py-2 text-[14px] text-slate-900 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15"
                    onChange={(e) => {
                      const value = e.target.value;

                      setErrors((prev) => ({
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

                {/* Error */}

                {error && (
                  <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                    {error}
                  </div>
                )}

                {/* Submit */}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center rounded-full bg-blue-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="h-5 w-5 animate-spin"
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
                      Submit Inquiry
                      <Send className="h-4 w-4" />
                    </span>
                  )}
                </button>

                {/* Alternative contact */}

                <div className="flex flex-col items-center justify-center gap-2 pt-1 text-sm text-slate-500 sm:flex-row sm:gap-5">
                  <a
                    href={`tel:${PHONE}`}
                    className="inline-flex items-center gap-1.5 font-medium transition hover:text-blue-600"
                  >
                    <Phone className="h-4 w-4" />
                    Call us
                  </a>

                  <span className="hidden text-slate-300 sm:block">
                    •
                  </span>

                  <span className="inline-flex items-center gap-1.5">
                    <Mail className="h-4 w-4" />
                    contact@naxoratechnology.com
                  </span>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}