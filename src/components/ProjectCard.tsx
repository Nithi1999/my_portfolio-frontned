type Props = {
  title: string;
  description: string;
  tech: string[];
};

export default function ProjectCard({ title, description, tech }: Props) {
  return (
    <div className={`
      bg-card p-6 rounded-lg 
      border border-zinc-800
      hover:border-indigo-500
      transition
      hover:shadow-lg hover:shadow-primary/10
    `}>
      <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      <p className="mt-3 text-muted-foreground">{description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="text-xs md:text-sm bg-muted px-3 py-1 rounded text-muted-foreground font-medium"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}