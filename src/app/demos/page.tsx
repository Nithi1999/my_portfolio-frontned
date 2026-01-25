"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import DemoCard from "@/components/DemoCard";
import { parseResume } from "@/services/resumeParser";
import ComingSoonModal from "@/components/ComingSoonModal";
import ResumeResult from "@/components/ResumeResult";
import { downloadResumePdf } from "@/services/downloadPdf";

export default function Demos() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [pdfLoading, setPdfLoading] = useState(false);
  const [pdfEstimate, setPdfEstimate] = useState<string | null>(null);
  const [showPdfEstimate, setShowPdfEstimate] = useState(false);
  const [pdfEstimateSeconds, setPdfEstimateSeconds] = useState<number | null>(null);
  const [countdown, setCountdown] = useState<number | null>(null);

  const handleParse = async () => {
    if (!file) return;

    setLoading(true);
    setError("");
    setResult(null);
    setPdfEstimate(null);

    try {
      const data = await parseResume(file);
      setResult(data);
      if (data.pdf_estimate) {
        setPdfEstimateSeconds(Math.max(data.pdf_estimate, 8));
    }
    } catch (err) {
      setError("Failed to parse resume");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
     <ComingSoonModal
      open={showComingSoon}
      onClose={() => setShowComingSoon(false)}
      title="Demo Under Maintenance"
      description="This AI demo is currently being improved and will be available soon."
    />
    <main className="min-h-screen bg-background px-6 md:px-10">
      <Navbar />

      <div className="pt-20 pb-16">
        <h1 className="text-4xl md:text-4xl font-bold text-foreground">
          Live AI Demos
        </h1>

        <div className="mt-12 bg-card p-7 rounded-lg border border-zinc-800">
          <h2 className="text-2xl font-semibold text-foreground">
            Resume Parser (Live)
          </h2>

          <p className="mt-3 text-muted-foreground">
            Upload a PDF resume to extract structured information using NLP.
          </p>

          <div className="mt-6 space-y-4">
            <input
              type="file"
              accept=".pdf"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="
                btn-base
                block w-full text-sm text-muted-foreground
                file:mr-4 file:py-2.5 file:px-5
                file:rounded file:border-1
                file:text-sm file:font-medium
                file:bg-primary/10 file:text-primary
                hover:file:bg-primary/20
                file:cursor-pointer cursor-pointer
              "
            />

            <button
              onClick={handleParse}
              disabled={loading || !file}
              className="
                btn-base
                mt-2 bg-primary
                text-dark font-medium
                px-6 py-2.5 rounded-lg
                disabled:opacity-50 disabled:cursor-not-allowed
                cursor-pointer
                transition-colors
                border border-border
                shadow-lg shadow-indigo-500/20
              "
            >
              {loading ? "Processing..." : "Parse Resume"}
            </button>
          </div>

          {error && (
            <p className="mt-6 text-red-500 font-medium">{error}</p>
          )}

          {result?.data && (
            <div className="mt-10 space-y-8">
              <div
                className="
                bg-muted p-5 rounded-lg overflow-auto
                text-sm text-foreground font-mono
                max-h-[500px]
                "
              >
                <ResumeResult data={result.data} />
              </div>

              <div className="flex justify-start">
                <button
                  onClick={() => {
                    setShowPdfEstimate(true); 
                    setCountdown(pdfEstimateSeconds ?? 8);
                    const interval = setInterval(() => {
                      setCountdown((prev) => {
                        if (!prev || prev <= 1) {
                          clearInterval(interval);
                          return null;
                        }
                        return prev - 1;
                      });
                    }, 1000);
                    downloadResumePdf(
                      result.data,
                      () => setPdfLoading(true),
                      () => {
                        setPdfLoading(false);
                        setShowPdfEstimate(false);
                        setCountdown(null);
                      },
                      (msg) => {
                        setPdfLoading(false);
                        setShowPdfEstimate(false);
                        alert(msg);
                      }
                    );
                  }}
                  disabled={pdfLoading}
                  className={`
                    btn-hero
                    flex items-center gap-3
                    bg-primary text-dark 
                    shadow-lg shadow-indigo-500/30
                    cursor-pointer
                    border border-border
                    transition-all
                    disabled:opacity-50 disabled:cursor-not-allowed
                  `}
                >
                  {pdfLoading && (
                    <span
                      className="
                        w-4 h-4
                        border-2 border-white/60 border-t-white
                        rounded-full
                        animate-spin
                      "
                    />
                  )}

                  {pdfLoading ? "Generating PDF..." : "Download PDF Report"}
                </button>
                {pdfLoading && showPdfEstimate && countdown !== null && (
                  <p className="text-sm text-foreground font-mono">
                    ⏳ Generating PDF… {countdown > 2 ? `${countdown}s remaining` : "Almost done…"}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-16">
          <DemoCard
            title="Resume vs JD Matcher"
            description="Compare a resume against a job description using contextual embeddings."
            onClick={() => setShowComingSoon(true)}
          />
          <DemoCard
            title="LLM Resume Feedback"
            description="Get AI-generated feedback to improve resumes."
            onClick={() => setShowComingSoon(true)}
          />
        </div>
      </div>
    </main>
  </>
  );
}