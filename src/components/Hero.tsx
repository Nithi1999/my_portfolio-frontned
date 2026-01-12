"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative py-28 md:py-36">
      <div
        className="
          max-w-7xl mx-auto
          grid grid-cols-1 md:grid-cols-2
          items-center
          gap-14
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="md:pr-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
            Backend & AI Engineer
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl">
            I design, build, and deploy scalable AI systems using
            FastAPI, BERT, spaCy, LLMs, Docker, and Celery.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <Link
              href="/demos"
              className="btn-hero border border-border hover:bg-indigo-500  px-8 py-4 rounded-xl text-foreground font-medium transition-colors">
              Live AI Demos
            </Link>

            <Link
              href="/projects"
              className="btn-hero border border-border hover:bg-indigo-500  px-8 py-4 rounded-xl text-foreground font-medium transition-colors">
              View Projects
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="flex justify-center md:justify-end"
        >
          <div
            className="
              relative
              w-64 h-80 md:w-72 md:h-[420px]
              rounded-2xl overflow-hidden
              border border-border
              bg-background/50 backdrop-blur-xl
              shadow-xl
            "
          >
            <Image
              src="/profile_photo.jpeg"
              alt="Nithin A — Backend & AI Engineer"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}