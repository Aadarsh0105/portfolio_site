"use client"

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PhoneIcon, MessageCircleIcon, PlusIcon, XIcon } from 'lucide-react';
export function FloatingActions() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const actions = [
  {
    label: 'WhatsApp',
    icon: MessageCircleIcon,
    href: 'https://wa.me/15551234567',
    bg: 'bg-emerald-500',
    hover: 'hover:bg-emerald-600',
    ring: 'bg-emerald-500/40'
  },
  {
    label: 'Call us',
    icon: PhoneIcon,
    href: 'tel:+15551234567',
    bg: 'bg-gradient-accent',
    hover: 'hover:opacity-90',
    ring: 'bg-accent-start/40'
  }];

  return (
    <AnimatePresence>
      {visible &&
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
          y: 20
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0
        }}
        exit={{
          opacity: 0,
          scale: 0.8,
          y: 20
        }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20
        }}
        className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        
          <AnimatePresence>
            {open &&
          actions.map((action, index) => {
            const Icon = action.icon;
            return (
              <motion.a
                key={action.label}
                href={action.href}
                target={
                action.href.startsWith('http') ? '_blank' : undefined
                }
                rel={
                action.href.startsWith('http') ?
                'noopener noreferrer' :
                undefined
                }
                aria-label={action.label}
                initial={{
                  opacity: 0,
                  scale: 0.5,
                  y: 10
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0
                }}
                exit={{
                  opacity: 0,
                  scale: 0.5,
                  y: 10
                }}
                transition={{
                  delay: index * 0.05
                }}
                className="group flex items-center gap-3">
                
                    <span className="hidden sm:block px-3 py-1.5 rounded-full bg-surface border border-border text-sm font-medium shadow-md text-text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                      {action.label}
                    </span>
                    <span className="relative">
                      <span
                    className={`absolute inset-0 rounded-full ${action.ring} animate-ping opacity-50`} />
                  
                      <span
                    className={`relative w-12 h-12 rounded-full ${action.bg} ${action.hover} text-white flex items-center justify-center shadow-lg transition-all`}>
                    
                        <Icon className="w-5 h-5" />
                      </span>
                    </span>
                  </motion.a>);

          })}
          </AnimatePresence>

          <button
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close contact options' : 'Open contact options'}
          aria-expanded={open}
          className="w-14 h-14 rounded-full bg-text-primary text-background flex items-center justify-center shadow-xl hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-accent-start focus:ring-offset-2 focus:ring-offset-background">
          
            <motion.div
            animate={{
              rotate: open ? 45 : 0
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 20
            }}>
            
              {open ?
            <XIcon className="w-6 h-6" /> :

            <PlusIcon className="w-6 h-6" />
            }
            </motion.div>
          </button>
        </motion.div>
      }
    </AnimatePresence>);

}