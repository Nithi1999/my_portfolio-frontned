export default function Hero() {
  return (
    <section className="text-center py-32">
      <h1 className="text-5xl font-bold text-white">
        Backend & AI Engineer
      </h1>

      <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto">
        I design, build, and deploy scalable AI systems using
        FastAPI, BERT, spaCy, LLMs, Docker, and Celery.
      </p>

      <div className="mt-10 space-x-6">
        <a className="bg-indigo-600 px-6 py-3 rounded text-white" href="/demos">
          Live AI Demos
        </a>
        <a className="border border-gray-600 px-6 py-3 rounded text-gray-300" href="/projects">
          View Projects
        </a>
      </div>
    </section>
  );
}