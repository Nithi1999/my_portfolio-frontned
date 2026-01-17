type Props = {
  title: string;
  description: string;
  onClick?: () => void;
};

export default function DemoCard({ title, description, onClick }: Props) {
  return (
    <div className={`
      bg-card p-6 rounded-lg  border border-zinc-800
      hover:border-primary/50 transition-all
    `}>
      <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      <p className="mt-3 text-muted-foreground">{description}</p>
      <button 
      onClick={onClick}
      className={`
        btn-base
        mt-6 bg-primary hover:bg-indigo-500
        px-5 py-2.5 rounded-lg text-dark 
        font-medium transition-colors
        disabled:opacity-50
        cursor-pointer
        border border-border
        shadow-lg shadow-indigo-500/20
      `}>
        Try Demo
      </button>
    </div>
  );
}