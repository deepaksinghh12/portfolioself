import { Card } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  grade: string;
}

export default function Education() {
  const education: EducationItem[] = [
    {
      degree: 'B.Tech in Computer Science',
      institution: 'Modern Institute of Technology and Research Centre (MITRC), Alwar',
      duration: '2022 – 2026',
      grade: 'CGPA: 8.9',
    },
    {
      degree: 'Class 12th (CBSE)',
      institution: 'Kendriya Vidyalaya, Ahmedabad',
      duration: '2021 – 2022',
      grade: '76%',
    },
    {
      degree: 'Class 10th (CBSE)',
      institution: 'Army Public School, Ahmedabad',
      duration: '2019 – 2020',
      grade: '84%',
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" data-testid="text-education-heading">
            Education
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="p-6 hover-elevate transition-all"
              data-testid={`card-education-${index}`}
            >
              <div className="flex flex-col h-full">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                
                <h3 className="text-lg font-bold mb-2" data-testid={`text-education-degree-${index}`}>
                  {edu.degree}
                </h3>
                
                <p className="text-muted-foreground mb-2 flex-1" data-testid={`text-education-institution-${index}`}>
                  {edu.institution}
                </p>
                
                <div className="space-y-1 pt-2 border-t">
                  <p className="text-sm text-muted-foreground" data-testid={`text-education-duration-${index}`}>
                    {edu.duration}
                  </p>
                  <p className="text-sm font-semibold text-primary" data-testid={`text-education-grade-${index}`}>
                    {edu.grade}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
