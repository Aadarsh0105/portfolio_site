"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PhoneIcon,
  MessageSquareTextIcon,
} from "lucide-react";
import { ChatbotWidget } from "./ChatbotWidget";

const PHONE_NUMBER = process.env.NEXT_PUBLIC_PHONE_NUMBER;
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

export function FloatingActions() {
  const [chatOpen, setChatOpen] = useState(false);

  const actions = [
    {
      label: "Call us",
      href: `tel:${PHONE_NUMBER}`,
      type: "phone" as const,
      icon: PhoneIcon,
      bg: "bg-gradient-accent",
      hover: "hover:opacity-90",
      ring: "bg-accent-start/40",
    },
    {
      label: "WhatsApp",
      href: `https://wa.me/${WHATSAPP_NUMBER}`,
      type: "whatsapp" as const,
      bg: "bg-[#25D366]",
      hover: "hover:bg-[#20ba5a]",
      ring: "bg-[#25D366]/40",
    },
  ];

  return (
    <AnimatePresence>
      <motion.div
        key="floating-actions"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 20 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3"
      >
        {actions.map((action, index) => (
          <motion.a
            key={action.label}
            href={action.href}
            target={action.type === "whatsapp" ? "_blank" : undefined}
            rel={
              action.type === "whatsapp"
                ? "noopener noreferrer"
                : undefined
            }
            aria-label={action.label}
            initial={{
              opacity: 0,
              scale: 0.5,
              y: 10,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.5,
              y: 10,
            }}
            transition={{
              delay: index * 0.05,
            }}
            className="group flex items-center gap-3"
          >
            <span className="hidden sm:block px-3 py-1.5 rounded-full bg-surface border border-border text-sm font-medium shadow-md text-text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
              {action.label}
            </span>

            <span className="relative">
              <span
                className={`absolute inset-0 rounded-full ${action.ring} animate-ping opacity-50`}
              />

              <span
                className={`relative w-14 h-14 rounded-full ${action.bg} ${action.hover} text-white flex items-center justify-center shadow-lg transition-all`}
              >
                {action.type === "whatsapp" ? (
                  <Image
                    src="/whatsapp.svg"
                    alt="WhatsApp"
                    width={30}
                    height={30}
                    className="w-[28px] h-[28px] brightness-0 invert"
                  />
                ) : (
                  <PhoneIcon className="w-6 h-6" />
                )}
              </span>
            </span>
          </motion.a>
        ))}

        {/* Chatbot */}
        <motion.button
          type="button"
          onClick={() => setChatOpen((prev) => !prev)}
          aria-label={chatOpen ? "Close chatbot" : "Open chatbot"}
          initial={{ opacity: 0, scale: 0.5, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 10 }}
          transition={{ delay: actions.length * 0.05 }}
          className="group flex items-center gap-3"
        >
          <span className="hidden sm:block px-3 py-1.5 rounded-full bg-surface border border-border text-sm font-medium shadow-md text-text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
            Chatbot
          </span>

          <span className="relative">
            <span className="absolute inset-0 rounded-full bg-sky-500/40 animate-ping opacity-50" />

            <span className="relative w-14 h-14 rounded-full bg-sky-500 hover:bg-sky-600 text-white flex items-center justify-center shadow-lg transition-all">
              <MessageSquareTextIcon className="w-6 h-6" />
            </span>
          </span>
        </motion.button>
      </motion.div>

      <ChatbotWidget
        open={chatOpen}
        onClose={() => setChatOpen(false)}
      />
    </AnimatePresence>
  );
}