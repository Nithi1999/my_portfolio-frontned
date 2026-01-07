type Props = {
  title: string;
  description: string;
};

export default function DemoCard({ title, description }: Props) {
  return (
    <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
      <h3 className="text-xl text-white font-semibold">{title}</h3>
      <p className="mt-3 text-gray-400">{description}</p>
      <button className="mt-6 bg-indigo-600 px-4 py-2 rounded text-white">
        Try Demo
      </button>
    </div>
  );
}