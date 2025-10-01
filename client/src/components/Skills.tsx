import { Card } from '@/components/ui/card';

interface Skill {
  name: string;
  icon: string;
}

export default function Skills() {
  const skills: Skill[] = [
    { name: 'Java', icon: 'devicon-java-plain' },
    { name: 'Spring Boot', icon: 'devicon-spring-plain' },
    { name: 'Python', icon: 'devicon-python-plain' },
    { name: 'React', icon: 'devicon-react-original' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain' },
    { name: 'Express', icon: 'devicon-express-original' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
    { name: 'MySQL', icon: 'devicon-mysql-plain' },
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
    { name: 'Hibernate', icon: 'devicon-hibernate-plain' },
    { name: 'Firebase', icon: 'devicon-firebase-plain' },
    { name: 'Tailwind', icon: 'devicon-tailwindcss-plain' },
    { name: 'Git', icon: 'devicon-git-plain' },
    { name: 'Figma', icon: 'devicon-figma-plain' },
    { name: 'Docker', icon: 'devicon-docker-plain' },
    { name: 'Flutter', icon: 'devicon-flutter-plain' },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" data-testid="text-skills-heading">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground font-mono" data-testid="text-skills-subtitle">
            // These are the technologies I've worked with
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="p-6 hover-elevate active-elevate-2 transition-transform hover:-translate-y-1 cursor-pointer"
              data-testid={`card-skill-${index}`}
            >
              <div className="flex flex-col items-center gap-3">
                <i className={`${skill.icon} text-5xl`} style={{ color: 'hsl(var(--primary))' }}></i>
                <p className="font-medium text-center">{skill.name}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
