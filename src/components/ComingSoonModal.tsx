"use client";

import { useEffect } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
};

export default function ComingSoonModal({
  open,
  onClose,
  title = "Coming Soon",
  description = "This demo is currently under maintenance. Please check back later.",
}: Props) {
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md" />

      <div
        className="
          relative z-10 w-full max-w-md
          bg-card border border-border
          rounded-2xl p-8
          shadow-2xl
          text-center
        "
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-semibold text-foreground">
          {title}
        </h2>

        <p className="mt-4 text-muted-foreground">
          {description}
        </p>

        <button
          onClick={onClose}
          className="
            btn-base
            mt-6 px-6 py-2.5 rounded-lg
            bg-primary
            text-dark font-medium
            transition-colors
            cursor-pointer
            border border-border
            shadow-lg shadow-indigo-500/20
          "
        >
          Got it
        </button>
      </div>
    </div>
  );
}