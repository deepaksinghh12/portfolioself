import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'City Guardian',
      description: 'AI-Based Civic Monitoring App with automated pothole detection using AI/ML. Features real-time incident reporting via Firebase, reduced false positives by 40% through fine-tuned detection models, and captured 50+ pothole entries with live map tracking.',
      techStack: ['Flutter', 'Firebase', 'AI/ML', 'Maps API'],
      githubUrl: 'https://github.com/deepaksinghh12/city-guardian',
    },
    {
      title: 'AlgoQuest',
      description: 'Algorithm Visualizer & Coding Practice Platform built with MERN stack. Visualize algorithms (sorting, searching, graphs) and solve coding challenges. Integrated code editor (Monaco/CodeMirror) with problem categories, difficulty filters, and scoring system.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Monaco Editor'],
      githubUrl: 'https://github.com/deepaksinghh12/algoquest',
    },
    {
      title: 'AgriMitra',
      description: 'An intelligent web application providing farmers with AI-powered tools for crop management, disease detection, and market insights.',
      techStack: ['React', 'Node.js', 'Tailwind', 'MongoDb'],
      githubUrl: 'https://github.com/deepaksinghh12/Project-Kisan-Agrimitra',
      liveUrl: 'https://agrimitra-kisan.vercel.app/',
    },
    {
      title: 'Quotely',
      description: 'Quotely is a user-friendly web application that allows users to design customized quotes or text over visually appealing background templates. ',
      techStack: ['React', 'Vite', 'Vercel', 'Tailwind'],
      githubUrl: 'https://github.com/deepaksinghh12/Quotely-Turn-your-text-into-stunning-visual-posts.',
      liveUrl: 'https://quotely-turn-your-text-into-stunnin.vercel.app/',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" data-testid="text-projects-heading">
            Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground font-mono" data-testid="text-projects-subtitle">
            // Check out some of my recent work
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 hover-elevate transition-all"
              data-testid={`card-project-${index}`}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2" data-testid={`text-project-title-${index}`}>
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground" data-testid={`text-project-description-${index}`}>
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="font-mono text-xs"
                        data-testid={`badge-tech-${index}-${techIndex}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        asChild
                        data-testid={`button-github-${index}`}
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button
                        asChild
                        data-testid={`button-live-${index}`}
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
