import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <main className="min-h-screen bg-background px-6 md:px-10">
      <Navbar />

      <div className="pt-32 pb-16 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
          Contact
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Contact Info */}
          <div className="space-y-6">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Feel free to reach out for collaborations, questions, or just to say hi!
            </p>

            <div className="space-y-4 text-lg mt-8">
              <p className="flex items-center gap-3">
                <span className="text-muted-foreground font-medium min-w-[100px]">Email:</span>
                <a
                  href="mailto:nithinaravath1@gmail.com"
                  className="text-primary hover:underline"
                >
                  nithinaravath1@gmail.com
                </a>
              </p>

              <p className="flex items-center gap-3">
                <span className="text-muted-foreground font-medium min-w-[100px]">GitHub:</span>
                <a
                  href="https://github.com/Nithi1999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:underline"
                >
                  Nithi1999
                </a>
              </p>

              <p className="flex items-center gap-3">
                <span className="text-muted-foreground font-medium min-w-[100px]">LinkedIn:</span>
                <a
                  href="https://www.linkedin.com/in/nithin-a-286672164/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:underline"
                >
                  nithin-a
                </a>
              </p>

              <p className="flex items-center gap-3">
                <span className="text-muted-foreground font-medium min-w-[100px]">HackerRank:</span>
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

          {/* Right: Form */}
          <div className="w-full flex justify-center lg:justify-end">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}