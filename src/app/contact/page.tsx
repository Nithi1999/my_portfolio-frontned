import Navbar from "@/components/Navbar";

export default function Contact() {
  return (
    <main className="min-h-screen bg-background px-6 md:px-10">
      <Navbar />

      <div className="pt-20 pb-16">
        <h1 className="text-4xl md:text-4xl font-bold text-foreground">
          Contact
        </h1>

        <div className="mt-8 space-y-5 text-lg">
          <p>
            <span className="text-muted-foreground">Email:</span>{" "}
            <a 
              href="mailto:nithinaravath1@gmail.com" 
              className="text-primary hover:underline"
            >
              nithinaravath1@gmail.com
            </a>
          </p>

          <p>
            <span className="text-muted-foreground">GitHub:</span>{" "}
            <a 
              href="https://github.com/Nithi1999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-indigo-400 hover:underline"
            >
              Nithi1999
            </a>
          </p>

          <p>
            <span className="text-muted-foreground">LinkedIn:</span>{" "}
            <a 
              href="https://www.linkedin.com/in/nithin-a-286672164/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-indigo-400 hover:underline"
            >
              nithin-a
            </a>
          </p>

          <p>
            <span className="text-muted-foreground">HackerRank:</span>{" "}
            <a 
              href="https://www.hackerrank.com/profile/nithinaravath1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-indigo-400 hover:underline"
            >
              nithinaravath1
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}