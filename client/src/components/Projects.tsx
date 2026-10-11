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
      title: 'CME Detection & Space Weather Platform (SIH 2025 Winner)',
      description: 'AI-based coronal mass ejection (CME) risk assessment and space-weather forecasting platform built for an ISRO problem statement. Won Smart India Hackathon 2025 at the national level among 50,000+ teams. Designed FastAPI ML backend for solar event classification and automated reporting workflows.',
      techStack: ['Python', 'FastAPI', 'Machine Learning', 'Flutter', 'REST APIs'],
      githubUrl: 'https://github.com/deepaksinghh12/CME_Detection',
      liveUrl: 'https://cme-detection.vercel.app/',
    },
    {
      title: 'AgriMitra',
      description: 'Smart farming and crop advisory progressive web application (PWA). Delivers multilingual crop recommendations (90%+ accuracy), weather forecasts, and dynamic market prices. Integrated a FastAPI microservice running a PyTorch MobileNetV2 model for real-time plant disease detection from leaf images.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'FastAPI', 'PyTorch', 'MobileNetV2', 'Tailwind CSS'],
      githubUrl: 'https://github.com/deepaksinghh12/Agrimitra',
      liveUrl: 'https://agrimitra-kisan.vercel.app/',
    },
    {
      title: 'City Guardian',
      description: 'AI-based civic monitoring mobile application engineered with Flutter and TensorFlow Lite for real-time pothole detection (90%+ accuracy). Integrates Google Maps APIs and Firebase for authentication, real-time sync, and location-based civic reporting.',
      techStack: ['Flutter', 'TensorFlow Lite', 'Firebase', 'Google Maps API', 'Dart'],
      githubUrl: 'https://github.com/deepaksinghh12/City_Guardian',
    },
    {
      title: 'AlgoQuest',
      description: 'MERN-based interactive algorithm visualization platform engineered during full-stack internship at CodeUnia. Features 12+ interactive modules for sorting, searching, and graph algorithms with custom step-by-step execution highlights, Monaco editor, and difficulty filters.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'Monaco Editor'],
      githubUrl: 'https://github.com/deepaksinghh12/algoquest',
    },
    {
      title: 'SAT-VEX',
      description: 'Satellite tracking and footprint prediction system using TLE + SGP4 with real-time 3D orbital visualization in CesiumJS. Integrated ML-based correction models trained on 500+ TLE samples, reducing prediction deviation by 10–15% for ground-footprint coverage analysis.',
      techStack: ['CesiumJS', 'React', 'Machine Learning', 'SGP4/TLE', 'Python'],
      githubUrl: 'https://github.com/deepaksinghh12/Satvex',
    },
    {
      title: 'Quotely',
      description: 'Interactive web application allowing users to design and customize quotes and typography over curated visual background templates with responsive export options.',
      techStack: ['React', 'Vite', 'Tailwind CSS'],
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
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View source code for ${project.title} on GitHub`}
                        >
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
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View live demo for ${project.title}`}
                        >
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
