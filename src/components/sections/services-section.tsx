
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Factory, Users, Briefcase, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'White-Label Manufacturing',
    description: 'Leverage our expertise and facilities to produce high-quality cannabis products under your brand.',
    icon: Factory,
  },
  {
    title: 'Toll Processing',
    description: 'Utilize our advanced extraction and processing capabilities for your cannabis biomass.',
    icon: Briefcase,
  },
  {
    title: 'Private Labeling',
    description: 'Develop custom formulations and unique product lines with our comprehensive private labeling services.',
    icon: Users,
  },
];

const industriesServed = [
  "Microbusinesses seeking to scale production.",
  "Licensed cultivators needing extraction and productization.",
  "Dispensary brands without in-house lab capabilities."
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 font-headline">B2B Manufacturing Services</h2>
          <p className="text-lg text-foreground max-w-3xl mx-auto">
            TruFarms offers a suite of specialized services to support cannabis businesses at every stage of product development and manufacturing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <Card key={service.title} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto bg-primary/10 text-primary rounded-full p-4 w-fit mb-4">
                  <service.icon className="h-10 w-10" />
                </div>
                <CardTitle className="text-2xl font-headline">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center bg-secondary p-8 md:p-12 rounded-lg shadow-md">
          <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-6 font-headline">Industries We Serve</h3>
          <ul className="space-y-3 max-w-xl mx-auto text-left mb-8 text-foreground">
            {industriesServed.map((industry, index) => (
              <li key={index} className="flex items-start">
                <ArrowRight className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" />
                {industry}
              </li>
            ))}
          </ul>
          <Button size="lg" asChild>
            <Link href="#contact">
              Discuss Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
