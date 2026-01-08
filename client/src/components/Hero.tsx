import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Github, Linkedin, Code, Mail } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background via-background to-primary/5">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center space-y-6">
          <p className="text-primary text-lg font-medium animate-fade-in" data-testid="text-greeting">
            Hi, I'm
          </p>
          
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary animate-fade-in">
              🏆 SIH 2025 Winner
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold animate-fade-in-up" data-testid="text-name">
            Deepak Singh
          </h1>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground animate-fade-in-up" data-testid="text-title">
            Full Stack Developer
          </h2>
          
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground animate-fade-in-up" data-testid="text-summary">
            Final-year B.Tech student and SIH 2025 Winner with hands-on experience in Java, MERN, Flutter, REST APIs, SQL, and DSA. Skilled in building cross-platform applications, integrating cloud services, and contributing to open-source projects.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 animate-fade-in-up">
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              data-testid="button-view-projects"
            >
              View Projects
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              asChild
              data-testid="button-download-resume"
            >
              <a href="/Deepak_Singh_Resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-3 pt-6 animate-fade-in-up">
            <Button variant="ghost" size="icon" asChild data-testid="button-hero-github">
              <a href="https://github.com/deepaksinghh12" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild data-testid="button-hero-linkedin">
              <a href="https://linkedin.com/in/deepaksinghh12" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild data-testid="button-hero-leetcode">
              <a href="https://leetcode.com/deepaksinghh12" target="_blank" rel="noopener noreferrer">
                <Code className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild data-testid="button-hero-email">
              <a href="mailto:deepaksingh91065@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="text-muted-foreground hover-elevate p-2 rounded-full"
          data-testid="button-scroll-down"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
}
