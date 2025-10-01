import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, Code, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" data-testid="text-contact-heading">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground text-lg" data-testid="text-contact-subtitle">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-6" data-testid="text-contact-info-heading">
                  Get In Touch
                </h3>
                
                <div className="space-y-4">
                  <a
                    href="mailto:deepaksingh91065@gmail.com"
                    className="flex items-center gap-3 text-muted-foreground hover-elevate p-3 rounded-lg transition-colors group"
                    data-testid="link-email"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <span>deepaksingh91065@gmail.com</span>
                  </a>

                  <a
                    href="tel:+919978158483"
                    className="flex items-center gap-3 text-muted-foreground hover-elevate p-3 rounded-lg transition-colors group"
                    data-testid="link-phone"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <span>+91 9978158483</span>
                  </a>

                  <div className="flex items-center gap-3 text-muted-foreground p-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <span data-testid="text-location">Jaipur, Rajasthan, India</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-6" data-testid="text-social-heading">
                  Social Links
                </h3>
                
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    asChild
                    data-testid="button-contact-github"
                  >
                    <a href="https://github.com/deepaksinghh12" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-3 h-5 w-5" />
                      GitHub
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    asChild
                    data-testid="button-contact-linkedin"
                  >
                    <a href="https://linkedin.com/in/deepaksinghh12" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-3 h-5 w-5" />
                      LinkedIn
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    asChild
                    data-testid="button-contact-leetcode"
                  >
                    <a href="https://leetcode.com/deepaksinghh12" target="_blank" rel="noopener noreferrer">
                      <Code className="mr-3 h-5 w-5" />
                      LeetCode
                    </a>
                  </Button>
                </div>

                <div className="pt-6">
                  <Button
                    size="lg"
                    className="w-full"
                    asChild
                    data-testid="button-send-email"
                  >
                    <a href="mailto:deepaksingh91065@gmail.com">
                      <Mail className="mr-2 h-5 w-5" />
                      Send Email
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
