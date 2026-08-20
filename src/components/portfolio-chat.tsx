"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles, Send, X, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PortfolioChat() {
  const [open, setOpen] = React.useState(false);
  const [question, setQuestion] = React.useState("");
  const [answer, setAnswer] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  async function handleAsk(e: React.FormEvent) {
    e.preventDefault();
    if (!question.trim() || loading) return;
    setLoading(true);
    setAnswer("");
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: question }),
      });
      const data = await res.json();
      setAnswer(data.reply ?? "Something went wrong — try again.");
    } catch {
      setAnswer("Something went wrong — try again.");
    } finally {
      setLoading(false);
    }
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className={cn(buttonVariants({ variant: "outline", size: "lg" }), "mt-4")}
      >
        <Sparkles className="h-5 w-5" /> Ask my AI assistant
      </button>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass mt-4 w-full max-w-lg rounded-2xl border border-border p-5"
    >
      <div className="mb-3 flex items-center justify-between">
        <p className="flex items-center gap-2 text-xl font-medium">
          <Sparkles className="h-4 w-4 text-brand-cyan" /> Ask about my work
        </p>
        <button onClick={() => setOpen(false)} aria-label="Close">
          <X className="h-4 w-4 text-muted-foreground" />
        </button>
      </div>

      <form onSubmit={handleAsk} className="flex gap-2">
        <Input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="e.g. What's your strongest AI project?"
          maxLength={300}
        />
        <button
          type="submit"
          disabled={loading}
          aria-label="Send"
          className={cn(buttonVariants({ size: "icon" }))}
        >
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        </button>
      </form>

      <AnimatePresence>
        {answer && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-4 text-sm leading-relaxed text-muted-foreground"
          >
            {answer}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}