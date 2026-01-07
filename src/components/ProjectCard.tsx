type Props = {
  title: string;
  description: string;
  tech: string[];
};

export default function ProjectCard({ title, description, tech }: Props) {
  return (
    <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-indigo-500 transition">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-gray-400">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="text-sm bg-zinc-800 px-2 py-1 rounded text-gray-300"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}