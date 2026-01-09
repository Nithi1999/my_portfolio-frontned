import Navbar from "@/components/Navbar";

export default function Resume() {
  return (
    <main className="min-h-screen bg-background px-6 md:px-10">
      <Navbar />

      <div className="pt-20 pb-16">
        <h1 className="text-4xl md:text-4xl font-bold text-foreground">
          Resume
        </h1>

        <p className="mt-6 text-lg text-muted-foreground">
          Download my resume or view it directly.
        </p>

        <a
          href="/resume.pdf"
          download
          className="
            btn-base
            inline-block mt-6
            bg-primary hover:bg-indigo-500
            text-dark font-medium
            px-6 py-2.5 rounded-lg
            transition-colors
          "
        >
          Download Resume
        </a>
      </div>
    </main>
  );
}