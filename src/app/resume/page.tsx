import Navbar from "@/components/Navbar";

export default function Resume() {
  return (
    <main className="bg-black min-h-screen px-10">
      <Navbar />

      <h1 className="text-4xl font-bold text-white mt-20">Resume</h1>

      <p className="mt-6 text-gray-400">
        Download my resume or view it directly.
      </p>

      <a
        href="/resume.pdf"
        className="inline-block mt-6 bg-indigo-600 px-6 py-3 rounded text-white"
      >
        Download Resume
      </a>
    </main>
  );
}