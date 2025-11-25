import { supabase } from "@/lib/supabase";
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  setIsSubmitting(true);

  const { error } = await supabase
    .from("messages")
    .insert([{ name, email, message }]);

  if (!error) {
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out.",
    });
    e.target.reset();
  } else {
    toast({
      title: "Error",
      description: "Something went wrong. Try again.",
    });
  }

  setIsSubmitting(false);
};

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>

            <div className="space-y-6">

  <div className="grid grid-cols-[48px_1fr] items-center gap-5">
    <div className="p-3 rounded-full bg-primary/10 flex items-center justify-center">
      <Mail className="h-6 w-6 text-primary" />
    </div>
    <div className= "-ml-14">
      <h4 className="font-medium leading-tight">Email</h4>
      <a
        href="mailto:alisaadaoui6@gmail.com"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        alisaadaoui6@gmail.com
      </a>
    </div>
  </div>

  <div className="grid grid-cols-[48px_1fr] items-center gap-4 ">
    <div className="p-3 rounded-full bg-primary/10 flex items-center justify-center">
      <Phone className="h-6 w-6 text-primary" />
    </div>
    <div className= "-ml-14">
      <h4 className="font-medium leading-tight">Phone</h4>
      <a
        href="tel:"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        Available on request
      </a>
    </div>
  </div>

  <div className="grid grid-cols-[48px_1fr] items-center gap-4">
    <div className="p-3 rounded-full bg-primary/10 flex items-center justify-center">
      <MapPin className="h-6 w-6 text-primary" />
    </div>
    <div className= "-ml-14">
      <h4 className="font-medium leading-tight">Location</h4>
      <span className="text-muted-foreground">
        Based in the UK
      </span>
    </div>
  </div>

</div>


            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/saadaoui-ali/" target="_blank">
                  <Linkedin />
                </a>
                <a href="https://github.com/alisaadaoui" target="_blank">
                  <Github />
                </a>
                <a href="https://www.instagram.com/ali__saadaoui?igsh=MWt6bWdqYTRtZ292OQ%3D%3D" target="_blank">
                  <Instagram />
                </a>
                <a
      href="https://discord.com/users/941002917165531176"
      target="_blank"
      className="hover:text-primary transition"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 245 240"
        fill="currentColor"
      >
        <path d="M104.4 104.4c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.8 0 10.4-5 10.3-11.1.1-6.1-4.5-11.1-10.3-11.1zm36.2 0c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.8 0 10.4-5 10.3-11.1.1-6.1-4.5-11.1-10.3-11.1z"/>
        <path d="M189.5 20h-134C24.2 20 10 34.2 10 52v135c0 18.5 15.3 33.5 34.2 33.5H157l-5.2-18.1 12.6 11.7 11.9 11.1L220 240V52c0-17.8-14.2-32-33.5-32zm-39.1 135s-3.7-4.4-6.8-8.3c13.5-3.8 18.6-12.3 18.6-12.3-4.2 2.7-8.2 4.6-11.8 5.9-5.1 2.1-10 3.5-14.8 4.4-9.8 1.8-18.8 1.3-26.4-.1-5.7-1.1-10.6-2.7-14.7-4.4-2.3-.9-4.7-2-7.2-3.4-.3-.2-.5-.3-.8-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.9 8.3 17.9 12.2c-3.1 3.9-6.9 8.6-6.9 8.6-22.7-.7-31.3-15.6-31.3-15.6 0-33.1 14.8-59.9 14.8-59.9 14.8-11.1 28.9-10.8 28.9-10.8l1 1.2c-18.5 5.3-27 13.4-27 13.4s2.3-1.3 6.1-3.1c11-4.8 19.7-6.1 23.3-6.4.6-.1 1.1-.2 1.7-.2 6.2-.8 13.3-1 20.8-.2 9.9 1.1 20.5 3.9 31.3 10.1 0 0-8.1-7.7-25.6-13l1.4-1.5s14.1-.3 28.9 10.8c0 0 14.8 26.8 14.8 59.9 0 .1-8.6 14.9-31.3 15.6z"/>
      </svg>
    </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">

            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="Name..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="Example@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};