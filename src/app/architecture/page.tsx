import Navbar from "@/components/Navbar";

export default function Architecture() {
  return (
    <main className="min-h-screen bg-background px-6 md:px-10">
      <Navbar />

      <div className="pt-20 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">
          System Architecture
        </h1>

        <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
          This portfolio demonstrates a production-style AI system using
          asynchronous processing, containerization, and scalable APIs.
        </p>

        <div className="mt-10 bg-card p-8 rounded-xl border border-card-border text-foreground font-mono">
          Frontend → FastAPI → Celery → ML Models → Database
        </div>
      </div>
    </main>
  );
}