export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6">
      <h1 className="text-xl font-bold text-white">Nithin A</h1>
      <div className="space-x-6 text-gray-300">
        <a href="/projects">Projects</a>
        <a href="/demos">Demos</a>
        <a href="/architecture">Architecture</a>
        <a href="/resume">Resume</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
}