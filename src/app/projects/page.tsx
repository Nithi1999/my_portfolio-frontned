import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <main className="bg-black min-h-screen px-10">
      <Navbar />

      <h1 className="text-4xl font-bold text-white mt-20">Projects</h1>

      <div className="grid md:grid-cols-2 gap-8 mt-10">
        <ProjectCard
          title="Resume Parsing System"
          description="Built an NLP pipeline to extract structured data from resumes using spaCy and BERT, deployed via FastAPI."
          tech={["Python", "spaCy", "BERT", "FastAPI", "Docker"]}
        />

        <ProjectCard
          title="Resume–JD Matching Engine"
          description="Contextual similarity scoring using DeBERTa embeddings instead of keyword matching."
          tech={["DeBERTa", "Transformers", "Cosine Similarity"]}
        />

        <ProjectCard
          title="LLM Resume Analyzer"
          description="LLM-powered feedback system that analyzes resumes and suggests improvements."
          tech={["LLMs", "Prompt Engineering", "FastAPI"]}
        />

        <ProjectCard
          title="Async ML Processing Pipeline"
          description="Handled concurrent ML tasks using Celery and Redis for scalable inference."
          tech={["Celery", "Redis", "Docker"]}
        />
      </div>
    </main>
  );
}