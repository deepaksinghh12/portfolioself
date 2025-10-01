import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, ExternalLink, FileText } from 'lucide-react';

export default function Resume() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="p-8 md:p-12 text-center bg-gradient-to-br from-card to-primary/5">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
              <FileText className="h-12 w-12 text-primary" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold" data-testid="text-resume-heading">
              View My Resume
            </h2>
            
            <p className="text-muted-foreground text-lg" data-testid="text-resume-description">
              Want to know more about my experience, skills, and certifications? Download or view my complete resume.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                asChild
                data-testid="button-view-resume"
              >
                <a href="/Deepak_Singh_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  View Resume
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                asChild
                data-testid="button-download-resume-section"
              >
                <a href="/Deepak_Singh_Resume.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download PDF
                </a>
              </Button>
            </div>
            
            <div className="pt-4 text-sm text-muted-foreground">
              <p data-testid="text-resume-info">Includes certifications from HackerRank, Skill Oceans, and Upflairs</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
