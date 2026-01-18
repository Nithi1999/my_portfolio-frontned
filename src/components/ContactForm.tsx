"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="
        relative
        w-full max-w-lg
        p-8
        rounded-3xl
        overflow-hidden
        border border-border
        bg-background/40
        backdrop-blur-xl
        shadow-2xl shadow-indigo-500/10
      "
        >
            {/* Hidden iframe must be always present for targeting, but we can hide it */}
            <iframe
                name="hidden_iframe"
                id="hidden_iframe"
                style={{ display: "none" }}
                onLoad={() => {
                    if (isSubmitting) {
                        setSubmitted(true);
                        setIsSubmitting(false);
                    }
                }}
            />

            {submitted ? (
                <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center space-y-4">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-4"
                    >
                        <svg
                            className="w-10 h-10 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                    <p className="text-muted-foreground">
                        Thanks for reaching out. I'll get back to you soon.
                    </p>
                    <button
                        onClick={() => {
                            setSubmitted(false);
                            setIsSubmitting(false);
                        }}
                        className="
                            mt-6
                            px-6 py-2
                            rounded-xl
                            bg-muted/50
                            text-sm font-medium
                            hover:bg-muted
                            transition-colors
                            cursor-pointer
                        "
                    >
                        Send another message
                    </button>
                </div>
            ) : (
                <form
                    className="space-y-6"
                    action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfA9DYFU1CwnKhBYjM4R4PWPhAQFHPKFCyJD38EEdqQD_BE2A/formResponse"
                    method="POST"
                    target="hidden_iframe"
                    onSubmit={() => {
                        setIsSubmitting(true);
                    }}
                >
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="entry.351288536"
                            required
                            placeholder="John Doe"
                            className="
                  w-full
                  bg-muted/50
                  border border-border
                  rounded-xl
                  px-4 py-3
                  text-foreground
                  placeholder:text-muted-foreground/50
                  focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary
                  transition-all
                "
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                            Your Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="entry.2119788655"
                            required
                            placeholder="john@example.com"
                            className="
                  w-full
                  bg-muted/50
                  border border-border
                  rounded-xl
                  px-4 py-3
                  text-foreground
                  placeholder:text-muted-foreground/50
                  focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary
                  transition-all
                "
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                            Your Message
                        </label>
                        <textarea
                            id="message"
                            name="entry.811323357"
                            required
                            rows={4}
                            placeholder="Type your message here..."
                            className="
                  w-full
                  bg-muted/50
                  border border-border
                  rounded-xl
                  px-4 py-3
                  text-foreground
                  placeholder:text-muted-foreground/50
                  focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary
                  transition-all
                  resize-none
                "
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`
                w-full
                btn-hero
                bg-primary text-primary
                hover:bg-primary-dark
                border border-border
                shadow-lg shadow-indigo-500/25
                flex items-center justify-center
                cursor-pointer
                ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}
              `}
                    >
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                </form>
            )}
        </motion.div>
    );
}
