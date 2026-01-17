"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";

type Props = {
  title: string;
  description: string;
  tech: string[];
};

export default function ProjectCard({ title, description, tech }: Props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [6, -6]);
  const rotateY = useTransform(x, [-50, 50], [-6, 6]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY }}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className="
        relative
        bg-card p-6 rounded-xl
        border border-zinc-800
        cursor-default
        will-change-transform
      "
    >
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-xl"
        style={{
          background:
            "radial-gradient(600px at var(--x) var(--y), rgba(99,102,241,0.12), transparent 40%)",
        }}
      />

      <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      <p className="mt-3 text-muted-foreground">{description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="text-xs md:text-sm bg-muted px-3 py-1 rounded text-muted-foreground font-medium"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}