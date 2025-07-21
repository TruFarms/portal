
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, FlaskConical, Wind } from 'lucide-react'; // Wind for cleanroom/air quality
import Link from 'next/link';

const qualityAspects = [
  {
    title: '3rd-Party Lab Testing',
    description: 'All products undergo rigorous testing by independent, accredited laboratories to ensure potency, purity, and safety. Certificates of Analysis (COAs) are available for all batches.',
    icon: ShieldCheck,
  },
  {
    title: 'Closed-Loop Extraction',
    description: 'We utilize advanced closed-loop extraction systems to produce clean, high-quality cannabis extracts while maximizing efficiency and minimizing environmental impact.',
    icon: FlaskConical,
  },
  {
    title: 'Cleanroom Protocols',
    description: 'Our manufacturing processes adhere to strict cleanroom protocols, maintaining a sterile environment to prevent contamination and ensure product integrity.',
    icon: Wind,
  },
];

export default function QualitySection() {
  return (
    <section id="quality" className="py-16 lg:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 opacity-0 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 font-headline">Commitment to Quality & Safety</h2>
          <p className="text-lg text-foreground max-w-3xl mx-auto">
            At TruFarms, quality assurance is paramount. We implement comprehensive measures to guarantee the safety, consistency, and efficacy of every product we manufacture.
          </p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {qualityAspects.map((aspect, index) => (
            <div key={aspect.title} className="opacity-0 animate-fade-in-up" style={{ animationDelay: `${index * 150 + 200}ms` }}>
              <Link href="/contact" className="block h-full">
                <Card className="h-full shadow-lg hover:shadow-xl hover:-translate-y-2 transition-transform duration-300">
                  <CardHeader className="items-center text-center">
                    <div className="p-4 bg-primary/10 text-primary rounded-full w-fit mb-3 transition-transform hover:scale-110">
                      <aspect.icon className="h-10 w-10" />
                    </div>
                    <CardTitle className="text-2xl font-headline">{aspect.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-foreground">{aspect.description}</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
