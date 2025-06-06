
import { Button } from '@/components/ui/button';
import { Rss } from 'lucide-react';

export default function BlogPlaceholderSection() {
  return (
    <section id="blog" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Rss className="h-16 w-16 text-primary mx-auto mb-6 opacity-50" />
        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 font-headline">Knowledge Center & Insights</h2>
        <p className="text-lg text-foreground max-w-2xl mx-auto mb-8">
          Coming soon! Our blog will feature articles on extraction science, Minnesota compliance updates, product spotlights, and industry trends. Stay tuned for valuable insights from the TruFarms team.
        </p>
        <Button variant="outline" size="lg" disabled>
          Explore Our Blog (Coming Soon)
        </Button>
      </div>
    </section>
  );
}
