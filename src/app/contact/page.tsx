import Navbar from "@/components/Navbar";

export default function Contact() {
  return (
    <main className="bg-black min-h-screen px-10">
      <Navbar />

      <h1 className="text-4xl font-bold text-white mt-20">Contact</h1>

      <div className="mt-6 text-gray-400 space-y-4">
        <p>Email: nithinaravath1@gmail.com</p>
        <p>
          GitHub:{" "}
          <a className="text-indigo-400" href="#">
            github.com/yourprofile
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a className="text-indigo-400" href="#">
            linkedin.com/in/yourprofile
          </a>
        </p>
      </div>
    </main>
  );
}