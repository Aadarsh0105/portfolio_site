"use client"

import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SendIcon, XIcon } from 'lucide-react';

type ChatMessage = {
  id: string;
  role: 'user' | 'bot';
  text: string;
};

function uid() {
  return `${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

export function ChatbotWidget({
  open,
  onClose
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [input, setInput] = useState('');
  const [pending, setPending] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: uid(),
      role: 'bot',
      text: 'Hi! How can I help you today?'
    }
  ]);

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => {
      containerRef.current?.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }, 0);
    return () => clearTimeout(t);
  }, [open, messages.length]);

  const initialSuggestions = useMemo(
    () => ['Pricing', 'Refund policy', 'Login help'],
    []
  );

  useEffect(() => {
    if (!open) return;
    setSuggestions(initialSuggestions);
  }, [open, initialSuggestions]);

  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    if (pending) return;

    setPending(true);
    setMessages((prev) => [
      ...prev,
      { id: uid(), role: 'user', text: trimmed }
    ]);
    setInput('');

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: trimmed })
      });

      const data = (await res.json().catch(() => null)) as
        | { ok: true; answer: string; suggestions?: string[] }
        | { ok: false; error?: string };

      if (!res.ok || !data || data.ok === false) {
        setMessages((prev) => [
          ...prev,
          {
            id: uid(),
            role: 'bot',
            text: 'Sorry — I had trouble answering that. Please try again.'
          }
        ]);
        setSuggestions(initialSuggestions);
        return;
      }

      setMessages((prev) => [
        ...prev,
        { id: uid(), role: 'bot', text: data.answer }
      ]);
      setSuggestions(data.suggestions ?? []);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: uid(),
          role: 'bot',
          text: 'Network error. Please try again.'
        }
      ]);
      setSuggestions(initialSuggestions);
    } finally {
      setPending(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          className="fixed bottom-24 right-6 z-50 w-[92vw] max-w-sm"
        >
          <div className="rounded-2xl border border-border bg-surface shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-border">
              <div>
                <p className="font-heading font-semibold leading-none">
                  Chatbot
                </p>
                <p className="text-xs text-text-secondary mt-1">
                  Typically replies in seconds
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-background/60 transition-colors"
                aria-label="Close chatbot"
              >
                <XIcon className="w-4 h-4 text-text-secondary" />
              </button>
            </div>

            <div ref={containerRef} className="max-h-[45vh] overflow-auto p-4 space-y-3">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={
                      m.role === 'user'
                        ? 'max-w-[85%] rounded-2xl rounded-br-md px-3 py-2 text-sm bg-gradient-accent text-white shadow'
                        : 'max-w-[85%] rounded-2xl rounded-bl-md px-3 py-2 text-sm bg-background border border-border text-text-primary shadow-sm'
                    }
                  >
                    {m.text}
                  </div>
                </div>
              ))}

              {pending && (
                <div className="flex justify-start">
                  <div className="max-w-[85%] rounded-2xl rounded-bl-md px-3 py-2 text-sm bg-background border border-border text-text-secondary shadow-sm">
                    Typing…
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-2 pt-2">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => send(s)}
                    className="px-3 py-1.5 rounded-full text-xs bg-background border border-border text-text-secondary hover:text-text-primary hover:border-accent-start/40 transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <form
              className="p-3 border-t border-border flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message…"
                className="flex-1 px-3 py-2 rounded-xl bg-background border border-border focus:outline-none focus:border-accent-start text-sm"
              />
              <button
                type="submit"
                disabled={pending}
                className="w-11 h-11 rounded-xl bg-gradient-accent text-white flex items-center justify-center shadow hover:opacity-90 transition-opacity"
                aria-label="Send message"
              >
                <SendIcon className="w-5 h-5" />
              </button>
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
