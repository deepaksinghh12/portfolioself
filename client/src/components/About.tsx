import { Card } from '@/components/ui/card';
import { Code, Layers, Zap } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'MERN stack expertise with modern frameworks',
    },
    {
      icon: Layers,
      title: 'Mobile Development',
      description: 'Flutter-based Android applications',
    },
    {
      icon: Zap,
      title: 'Problem Solving',
      description: 'Strong foundation in DSA and algorithms',
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" data-testid="text-about-heading">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground" data-testid="text-about-intro">
              Hi, I'm <span className="text-foreground font-semibold">Deepak Singh</span>, nice to meet you. Please take a look around.
            </p>
            
            <p className="text-muted-foreground" data-testid="text-about-description">
              I am a passionate and dynamic software engineer with a strong foundation in both front-end and back-end development. My technical expertise spans multiple programming languages, libraries, and frameworks, with a keen interest in web design, cloud security, and software engineering.
            </p>
            
            <p className="text-muted-foreground" data-testid="text-about-passion">
              I thrive in environments that challenge my problem-solving skills and offer opportunities for continuous learning and growth. Currently pursuing my B.Tech in Computer Science with a CGPA of 8.9, I'm focused on building innovative solutions that make a real impact.
            </p>
          </div>

          <div className="space-y-4">
            {highlights.map((item, index) => (
              <Card key={index} className="p-6 hover-elevate" data-testid={`card-highlight-${index}`}>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
