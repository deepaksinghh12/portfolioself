import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Trophy, Lightbulb, Users, Award, ExternalLink } from 'lucide-react';

interface Event {
  title: string;
  type: string;
  description: string;
  icon: typeof Trophy;
  highlights?: string[];
  linkedinUrl?: string;
}

export default function Events() {
  const events: Event[] = [
    {
      title: 'Smart India Hackathon (SIH) 2025 - Winner',
      type: 'National Win',
      description: 'Won SIH 2025 at the national level among 10,000+ teams. Developed an AI-based space-weather and CME risk-assessment platform.',
      icon: Trophy,
      highlights: [
        'National Level Winner',
        'AI/ML & Space Weather',
        'Full Stack & ML Integration',
      ],
      linkedinUrl: 'https://linkedin.com/in/deepaksinghh12',
    },
    {
      title: 'Bharatiya Antariksh Hackathon 2025',
      type: 'Hackathon',
      description: 'Participated in the Bharatiya Antariksh Hackathon 2025, a national-level competition focused on space technology and innovation, collaborating with teams to develop cutting-edge solutions.',
      icon: Trophy,
      highlights: [
        'Space technology and innovation',
        'Team collaboration and development',
        'National-level competition',
      ],
      linkedinUrl: 'https://www.linkedin.com/posts/deepaksinghh12_isro-indiainspace-hackathon-activity-7374389265537044480-lqr6?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD2R510BWGF6f0cr_DV60_wDWiXg4F6Nr-k',
    },
    {
      title: 'Google Cloud Agentic AI Day',
      type: 'Hackathon',
      description: 'Participated in Google Cloud Agentic AI Day hackathon, exploring advanced AI agent technologies and building intelligent solutions using Google Cloud AI platform.',
      icon: Trophy,
      highlights: [
        'Agentic AI and automation',
        'Google Cloud AI platform',
        'Hands-on development experience',
      ],
      linkedinUrl: 'https://www.linkedin.com/posts/deepaksinghh12_googlecloud-hack2skill-agenticai-activity-7371052297595858944-Ya_w?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD2R510BWGF6f0cr_DV60_wDWiXg4F6Nr-k',
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" data-testid="text-events-heading">
            Events & Activities
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground" data-testid="text-events-subtitle">
            Continuous learning through competitions and community events
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <Card
              key={index}
              className="p-6 hover-elevate transition-all"
              data-testid={`card-event-${index}`}
            >
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <event.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-xl font-bold" data-testid={`text-event-title-${index}`}>
                        {event.title}
                      </h3>
                      <Badge variant="secondary" data-testid={`badge-event-type-${index}`}>
                        {event.type}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-4" data-testid={`text-event-description-${index}`}>
                      {event.description}
                    </p>

                    {event.highlights && (
                      <ul className="space-y-2 mb-4">
                        {event.highlights.map((highlight, highlightIndex) => (
                          <li
                            key={highlightIndex}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                            data-testid={`text-highlight-${index}-${highlightIndex}`}
                          >
                            <span className="text-primary mt-0.5">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {event.linkedinUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        data-testid={`button-linkedin-${index}`}
                      >
                        <a href={event.linkedinUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Certificate/Post
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="p-6 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <div className="flex items-center gap-3">
                <Trophy className="h-8 w-8 text-primary" />
                <div className="text-left">
                  <p className="text-2xl font-bold" data-testid="text-events-stat-hackathons">Multiple</p>
                  <p className="text-sm text-muted-foreground">Hackathons</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Award className="h-8 w-8 text-primary" />
                <div className="text-left">
                  <p className="text-2xl font-bold" data-testid="text-events-stat-workshops">Tech</p>
                  <p className="text-sm text-muted-foreground">Workshops</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
