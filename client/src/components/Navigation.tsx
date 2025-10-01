import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md border-b' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
<div
            onClick={() => scrollToSection('home')}
            className="portfolio-name-container cursor-pointer"
            data-testid="link-home"
          >
            <span className="bracket">&lt;</span>
            <span className="name">Deepak Singh</span>
            <span className="pipe">|</span>
            <span className="bracket">&gt;</span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Button
                key={link.id}
                variant="ghost"
                onClick={() => scrollToSection(link.id)}
                data-testid={`link-${link.id}`}
              >
                {link.name}
              </Button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              asChild
              data-testid="button-github"
            >
              <a href="https://github.com/deepaksinghh12" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              data-testid="button-linkedin"
            >
              <a href="https://linkedin.com/in/deepaksinghh12" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              data-testid="button-leetcode"
            >
              <a href="https://leetcode.com/deepaksinghh12" target="_blank" rel="noopener noreferrer">
                <Code className="h-5 w-5" />
              </a>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-card border-t">
          <div className="px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <Button
                key={link.id}
                variant="ghost"
                className="w-full justify-start"
                onClick={() => scrollToSection(link.id)}
                data-testid={`link-mobile-${link.id}`}
              >
                {link.name}
              </Button>
            ))}
            <div className="flex gap-2 pt-2 border-t">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/deepaksinghh12" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com/in/deepaksinghh12" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://leetcode.com/deepaksinghh12" target="_blank" rel="noopener noreferrer">
                  <Code className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
