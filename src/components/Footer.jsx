import { ArrowUp, Github, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-10 px-6 mt-24">
      <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left side */}
        <div className="text-center md:text-left space-y-2">
          <h4 className="font-semibold text-lg">Ali Saadaoui</h4>
          <p className="text-sm text-muted-foreground">
            Software Engineering Student · Frontend Developer
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/alisaadaoui"
            target="_blank"
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition"
          >
            <Github size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/saadaoui-ali/"
            target="_blank"
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition"
          >
            <Linkedin size={20} />
          </a>

          {/* Back to top */}
          <a
            href="#hero"
            className="ml-2 p-2 rounded-full bg-primary text-background hover:bg-primary/90 transition"
          >
            <ArrowUp size={20} />
          </a>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="text-center mt-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Ali Saadaoui. All rights reserved.
      </div>
    </footer>
  );
};
