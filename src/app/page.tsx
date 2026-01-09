import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-background px-6 md:px-10">
      <Navbar />
      <Hero />
    </main>
  );
}