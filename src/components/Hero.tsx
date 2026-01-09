import Link from "next/link";
export default function Hero() {
  return (
    <section className="text-center py-32 md:py-40">
      <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
        Backend & AI Engineer
      </h1>

      <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
        I design, build, and deploy scalable AI systems using
        FastAPI, BERT, spaCy, LLMs, Docker, and Celery.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">
        <Link href="/demos" className="btn-hero border border-border hover:bg-indigo-500  px-8 py-4 rounded-xl text-foreground font-medium transition-colors">
          Live AI Demos
        </Link>
        <Link href="/projects" className="btn-hero border border-border hover:bg-indigo-500  px-8 py-4 rounded-xl text-foreground font-medium transition-colors">
          View Projects
        </Link>
      </div>
    </section>
  );
}