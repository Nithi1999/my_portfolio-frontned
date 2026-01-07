"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import DemoCard from "@/components/DemoCard";
import { parseResume } from "@/services/resumeParser";

export default function Demos() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");

  const handleParse = async () => {
    if (!file) return;

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const data = await parseResume(file);
      setResult(data);
    } catch (err) {
      setError("Failed to parse resume");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-black min-h-screen px-10">
      <Navbar />

      <h1 className="text-4xl font-bold text-white mt-20">
        Live AI Demos
      </h1>

      {/* 🔥 REAL AI DEMO */}
      <div className="mt-10 bg-zinc-900 p-6 rounded-lg">
        <h2 className="text-xl text-white font-semibold">
          Resume Parser (Live)
        </h2>

        <p className="mt-2 text-gray-400">
          Upload a PDF resume to extract structured information using NLP.
        </p>

        <input
          type="file"
          accept=".pdf"
          className="mt-4 text-gray-300"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />

        <button
          onClick={handleParse}
          disabled={loading}
          className="mt-4 bg-indigo-600 px-4 py-2 rounded text-white disabled:opacity-50"
        >
          {loading ? "Processing..." : "Parse Resume"}
        </button>

        {error && <p className="mt-4 text-red-400">{error}</p>}

        {result && (
          <pre className="mt-4 text-sm text-gray-300 overflow-auto max-h-96">
            {JSON.stringify(result, null, 2)}
          </pre>
        )}
      </div>

      {/* 🚧 UPCOMING DEMOS */}
      <div className="grid md:grid-cols-3 gap-8 mt-16">
        <DemoCard
          title="Resume vs JD Matcher"
          description="Compare a resume against a job description using contextual embeddings."
        />
        <DemoCard
          title="LLM Resume Feedback"
          description="Get AI-generated feedback to improve resumes."
        />
      </div>
    </main>
  );
}