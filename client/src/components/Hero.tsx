import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Github, Linkedin, Code, Mail, Sparkles, Terminal, GraduationCap } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-background via-background to-muted/30 pt-16 pb-12 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        {/* Availability Pill */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for Full Stack & SDE Roles</span>
          </div>
        </div>

        {/* Primary Headline & Identity */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground" data-testid="text-name">
            Deepak Singh
          </h1>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-300" data-testid="text-title">
            Full Stack Developer Building AI-Powered Products
          </p>
        </div>

        {/* Value Proposition Description */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed" data-testid="text-summary">
          B.Tech in Computer Science (<span className="text-foreground font-semibold">CGPA 9.03</span>) from MITRC Alwar. Specializing in high-performance web applications, edge AI integrations, and scalable cloud APIs with React, Node.js, Java, and Python.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
          <Button
            size="lg"
            onClick={() => scrollToSection('projects')}
            className="rounded-xl px-6 h-12 text-sm font-semibold shadow-md hover:shadow-lg transition-all"
            data-testid="button-view-projects"
          >
            Explore Projects
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            asChild
            className="rounded-xl px-6 h-12 text-sm font-semibold border-border/70 hover:bg-muted"
            data-testid="button-download-resume"
          >
            <a href="/Deepak_Singh_Resume.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </Button>

          <Button
            variant="ghost"
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="rounded-xl px-6 h-12 text-sm font-semibold text-muted-foreground hover:text-foreground"
          >
            Get in Touch
          </Button>
        </div>

        {/* Social Icons Ribbon */}
        <div className="flex items-center justify-center gap-3 pt-2">
          <Button variant="ghost" size="icon" asChild className="h-10 w-10 rounded-full border border-border/40 hover:text-primary" data-testid="button-hero-github">
            <a href="https://github.com/deepaksinghh12" target="_blank" rel="noopener noreferrer" aria-label="Deepak's GitHub Profile">
              <Github className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild className="h-10 w-10 rounded-full border border-border/40 hover:text-primary" data-testid="button-hero-linkedin">
            <a href="https://linkedin.com/in/deepaksinghh12" target="_blank" rel="noopener noreferrer" aria-label="Deepak's LinkedIn Profile">
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild className="h-10 w-10 rounded-full border border-border/40 hover:text-primary" data-testid="button-hero-leetcode">
            <a href="https://leetcode.com/deepaksinghh12" target="_blank" rel="noopener noreferrer" aria-label="Deepak's LeetCode Profile">
              <Code className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild className="h-10 w-10 rounded-full border border-border/40 hover:text-primary" data-testid="button-hero-email">
            <a href="mailto:deepaksingh91065@gmail.com" aria-label="Send an email to Deepak Singh">
              <Mail className="h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Interactive Engineering Quick Metrics Bar */}
        <div className="pt-8 max-w-3xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-card border border-border/60 shadow-xs">
            <div className="p-2 text-center">
              <div className="text-2xl font-bold text-foreground font-mono">1st Prize</div>
              <div className="text-xs text-muted-foreground mt-0.5">SIH '25 Winner</div>
            </div>
            <div className="p-2 text-center border-l border-border/40">
              <div className="text-2xl font-bold text-primary font-mono">9.03</div>
              <div className="text-xs text-muted-foreground mt-0.5">B.Tech CSE CGPA</div>
            </div>
            <div className="p-2 text-center border-t sm:border-t-0 sm:border-l border-border/40">
              <div className="text-2xl font-bold text-foreground font-mono">15+</div>
              <div className="text-xs text-muted-foreground mt-0.5">Merged OSS PRs</div>
            </div>
            <div className="p-2 text-center border-t sm:border-t-0 border-l border-border/40">
              <div className="text-2xl font-bold text-foreground font-mono">12+</div>
              <div className="text-xs text-muted-foreground mt-0.5">Algo Modules</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
