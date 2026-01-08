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
      title: 'SAT-VEX',
      description: 'Satellite Tracking & Footprint Prediction System (Oct 2025 – Present). Engineered a TLE + SGP4 based tracking system with 3D visualization in CesiumJS. Integrated ML-based correction models reducing prediction deviation by 10–15% and added ground-footprint estimation.',
      techStack: ['CesiumJS', 'Machine Learning', 'SGP4/TLE', 'React'],
      githubUrl: 'https://github.com/deepaksinghh12/Satvex',
      liveUrl: 'https://sat-vex.vercel.app/', // Placeholder
    },
    {
      title: 'CME Detection (SIH 2025 Winner)',
      description: 'AI-based space-weather and CME risk-assessment platform. Won Smart India Hackathon 2025 at the national level among 10,000+ teams. Designed backend APIs and contributed to Python ML and Flutter modules.',
      techStack: ['Python', 'Machine Learning', 'Flutter', 'FastAPI'],
      githubUrl: 'https://github.com/deepaksinghh12/CME_Detection',
    },
    {
      title: 'City Guardian',
      description: 'AI-Based Civic Monitoring App. Developed a Flutter app with TFLite for real-time pothole detection (90%+ accuracy). Visualized 50+ potholes using Google Maps API and integrated Firebase for seamless reporting.',
      techStack: ['Flutter', 'TFLite', 'Firebase', 'Google Maps API'],
      githubUrl: 'https://github.com/deepaksinghh12/City_Guardian',
    },
    {
      title: 'AgriMitra',
      description: 'Smart Farming & Crop Advisory Platform. Designed MERN platform for AI crop recommendations (90%+ accuracy). Processed plant disease images in 1–2 seconds using ML inference and improved UI/UX via React + Tailwind.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Machine Learning'],
      githubUrl: 'https://github.com/deepaksinghh12/Project-Kisan-Agrimitra',
      liveUrl: 'https://agrimitra-kisan.vercel.app/',
    },
    {
      title: 'AlgoQuest',
      description: 'MERN-based platform for visualizing sorting, searching, and graph algorithms. Implemented 12+ interactive modules with Monaco editor, difficulty filters, and step-by-step highlights.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Monaco Editor'],
      githubUrl: 'https://github.com/deepaksinghh12/algoquest',
    },
    {
      title: 'Quotely',
      description: 'Quotely is a user-friendly web application that allows users to design customized quotes or text over visually appealing background templates.',
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
