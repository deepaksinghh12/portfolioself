import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Layout, Server, BrainCircuit, Wrench } from 'lucide-react';

interface SkillGroup {
  title: string;
  icon: React.ReactNode;
  skills: Array<{ name: string; icon: string; level?: string }>;
}

export default function Skills() {
  const skillGroups: SkillGroup[] = [
    {
      title: 'Languages',
      icon: <Code2 className="w-5 h-5 text-primary" />,
      skills: [
        { name: 'Java', icon: 'devicon-java-plain' },
        { name: 'Python', icon: 'devicon-python-plain' },
        { name: 'TypeScript', icon: 'devicon-typescript-plain' },
        { name: 'JavaScript', icon: 'devicon-javascript-plain' },
        { name: 'C / C++', icon: 'devicon-cplusplus-plain' },
      ],
    },
    {
      title: 'Backend & Systems',
      icon: <Server className="w-5 h-5 text-primary" />,
      skills: [
        { name: 'Spring Boot', icon: 'devicon-spring-plain' },
        { name: 'FastAPI', icon: 'devicon-fastapi-plain' },
        { name: 'Node.js', icon: 'devicon-nodejs-plain' },
        { name: 'Express.js', icon: 'devicon-express-original' },
        { name: 'REST APIs', icon: 'devicon-fastapi-plain' },
      ],
    },
    {
      title: 'Frontend & Mobile',
      icon: <Layout className="w-5 h-5 text-primary" />,
      skills: [
        { name: 'React', icon: 'devicon-react-original' },
        { name: 'Flutter', icon: 'devicon-flutter-plain' },
        { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain' },
        { name: 'HTML5 / CSS3', icon: 'devicon-html5-plain' },
      ],
    },
    {
      title: 'AI, ML & Databases',
      icon: <BrainCircuit className="w-5 h-5 text-primary" />,
      skills: [
        { name: 'PyTorch', icon: 'devicon-pytorch-plain' },
        { name: 'TensorFlow / TFLite', icon: 'devicon-tensorflow-original' },
        { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
        { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
        { name: 'MySQL', icon: 'devicon-mysql-plain' },
      ],
    },
    {
      title: 'DevOps & Tooling',
      icon: <Wrench className="w-5 h-5 text-primary" />,
      skills: [
        { name: 'Docker', icon: 'devicon-docker-plain' },
        { name: 'Git & GitHub', icon: 'devicon-git-plain' },
        { name: 'Firebase', icon: 'devicon-firebase-plain' },
        { name: 'Vercel', icon: 'devicon-vercel-original' },
        { name: 'Linux / Bash', icon: 'devicon-linux-plain' },
      ],
    },
  ];

  let cardIndex = 0;

  return (
    <section id="skills" className="py-24 bg-muted/20 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-3 px-3 py-1 font-mono text-xs uppercase tracking-wider">
            Technical Arsenal
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" data-testid="text-skills-heading">
            Skills & Core Technologies
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground font-mono text-sm max-w-xl mx-auto" data-testid="text-skills-subtitle">
            // Full-stack engineering, production AI integration, systems architecture & modern tooling
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, groupIdx) => (
            <Card
              key={groupIdx}
              className="p-6 border-border/80 bg-card/60 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-border/50">
                <div className="p-2 rounded-lg bg-primary/10">
                  {group.icon}
                </div>
                <h3 className="font-semibold text-lg">{group.title}</h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {group.skills.map((skill) => {
                  const currentIdx = cardIndex++;
                  return (
                    <div
                      key={skill.name}
                      data-testid={`card-skill-${currentIdx}`}
                      className="flex items-center gap-2.5 p-2.5 rounded-lg bg-muted/40 hover:bg-muted/80 border border-border/40 hover:border-border transition-all duration-150 group cursor-default"
                    >
                      <i
                        className={`${skill.icon} text-2xl group-hover:scale-110 transition-transform`}
                        style={{ color: 'hsl(var(--primary))' }}
                      />
                      <span className="text-xs font-medium text-foreground truncate">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
