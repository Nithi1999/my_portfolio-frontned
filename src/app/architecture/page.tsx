import Navbar from "@/components/Navbar";

export default function Architecture() {
  return (
    <main className="bg-black min-h-screen px-10">
      <Navbar />

      <h1 className="text-4xl font-bold text-white mt-20">
        System Architecture
      </h1>

      <p className="mt-6 text-gray-400 max-w-3xl">
        This portfolio demonstrates a production-style AI system using
        asynchronous processing, containerization, and scalable APIs.
      </p>

      <div className="mt-10 bg-zinc-900 p-8 rounded-lg text-gray-300">
        Frontend → FastAPI → Celery → ML Models → Database
      </div>
    </main>
  );
}