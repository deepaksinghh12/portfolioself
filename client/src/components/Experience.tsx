import { Card } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  achievements: string[];
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      role: 'Full Stack Web Development Intern',
      company: 'CodeUnia',
      duration: 'Jul 2025 – Aug 2025',
      achievements: [
        'Engineered 5+ algorithm visualizations on AlgoQuest, improving user interaction by 40%',
        'Implemented JWT authentication, reducing user access issues',
        'Refined MongoDB queries, achieving a 25% boost in API responsiveness',
      ],
    },
    {
      role: 'Open Source Contributor',
      company: 'GirlScript Summer of Code (GSSoC)',
      duration: 'June 2025 – Present',
      achievements: [
        'Contributed to multiple open-source projects by fixing bugs, enhancing features, and improving documentation',
        'Collaborated with maintainers and fellow contributors using GitHub workflows',
        'Gained experience in collaborative development and code review processes',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" data-testid="text-experience-heading">
            Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="hidden md:block absolute left-8 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
                
                <Card className="md:ml-20 p-6 hover-elevate" data-testid={`card-experience-${index}`}>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg md:hidden">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1" data-testid={`text-experience-role-${index}`}>
                        {exp.role}
                      </h3>
                      <p className="text-primary font-medium mb-1" data-testid={`text-experience-company-${index}`}>
                        {exp.company}
                      </p>
                      <p className="text-sm text-muted-foreground mb-4" data-testid={`text-experience-duration-${index}`}>
                        {exp.duration}
                      </p>
                      
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li
                            key={achievementIndex}
                            className="text-muted-foreground flex items-start gap-2"
                            data-testid={`text-achievement-${index}-${achievementIndex}`}
                          >
                            <span className="text-primary mt-1.5">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
