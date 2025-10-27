import { Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10 px-6 text-center">
      <h4 className="text-xl font-semibold mb-2 text-white">Brightstar Tech</h4>
      <p className="mb-6 text-gray-400">
        Empowering Youth Through Digital Skills & Knowledge
      </p>

      <div className="flex justify-center gap-6 mb-6">
        <a
          href="#ebooks"
          className="hover:text-teal-400 transition-colors"
        >
          Ebooks
        </a>
        <a
          href="#testimonials"
          className="hover:text-teal-400 transition-colors"
        >
          Testimonials
        </a>
        <a
          href="#contact"
          className="hover:text-teal-400 transition-colors"
        >
          Contact
        </a>
      </div>

      <div className="flex justify-center gap-4 mb-6">
        <a href="https://www.facebook.com/profile.php?id=100075277795478" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        
          <Facebook className="w-5 h-5 hover:text-teal-400 transition-colors" />
        </a>
        <a href="https://x.com/BrightstarMoxiz" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <Twitter className="w-5 h-5 hover:text-teal-400 transition-colors" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin className="w-5 h-5 hover:text-teal-400 transition-colors" />
        </a>
      </div>

      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()} Brightstar Tech. All rights reserved.
      </p>
    </footer>
  );
}
