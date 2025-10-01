import { Github, Linkedin, Code, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4" data-testid="text-footer-name">
              Deepak Singh
            </h3>
            <p className="text-muted-foreground" data-testid="text-footer-tagline">
              Full Stack Developer passionate about building innovative solutions
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4" data-testid="text-footer-quick-links">
              Quick Links
            </h4>
            <div className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => scrollToSection(link.toLowerCase())}
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                  data-testid={`link-footer-${link.toLowerCase()}`}
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4" data-testid="text-footer-connect">
              Connect
            </h4>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" asChild data-testid="button-footer-github">
                <a href="https://github.com/deepaksinghh12" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild data-testid="button-footer-linkedin">
                <a href="https://linkedin.com/in/deepaksinghh12" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild data-testid="button-footer-leetcode">
                <a href="https://leetcode.com/deepaksinghh12" target="_blank" rel="noopener noreferrer">
                  <Code className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm" data-testid="text-footer-copyright">
            © {currentYear} Deepak Singh. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1" data-testid="text-footer-made-with">
            Made with <Heart className="h-4 w-4 text-red-500 fill-current" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
