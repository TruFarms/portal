
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const industriesServed = [
  "Microbusinesses seeking to scale production.",
  "Licensed cultivators needing extraction and productization.",
  "Dispensary brands without in-house lab capabilities."
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-16 lg:py-24 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center bg-secondary p-8 md:p-12 rounded-lg opacity-0 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-6 font-headline">Industries We Serve</h3>
          <ul className="space-y-3 max-w-xl mx-auto text-left mb-8 text-foreground">
            {industriesServed.map((industry, index) => (
              <li key={index} className="flex items-start">
                <ArrowRight className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" />
                {industry}
              </li>
            ))}
          </ul>
          <Button size="lg" asChild variant="accent" className="transform hover:scale-105 transition-transform duration-300">
            <Link href="/contact">
              Discuss Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
