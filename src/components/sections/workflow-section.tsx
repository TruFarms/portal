
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, Beaker, ClipboardCheck, Truck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const workflowSteps = [
  {
    step: 1,
    title: 'Client Inquiry',
    description: 'Reach out to us with your project requirements and brand vision. We schedule an initial consultation to understand your needs.',
    icon: MessageCircle,
    href: '/contact',
  },
  {
    step: 2,
    title: 'Sample Formulation',
    description: 'Our lab experts work on formulating samples according to your specifications. We iterate until the product meets your approval.',
    icon: Beaker,
  },
  {
    step: 3,
    title: 'Compliance Testing',
    description: 'All formulations undergo rigorous 3rd-party lab testing to ensure they meet Minnesota compliance standards for safety and potency.',
    icon: ClipboardCheck,
  },
  {
    step: 4,
    title: 'Product Delivery',
    description: 'Once compliance is confirmed and final approvals are in, we move to full-scale production and deliver your market-ready products.',
    icon: Truck,
  },
];

export default function WorkflowSection() {
  return (
    <section id="workflow" className="py-16 lg:py-24 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 opacity-0 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 font-headline">Our B2B Process</h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            We follow a streamlined and transparent process to bring your cannabis product vision to life, ensuring quality and compliance every step of the way.
          </p>
        </div>
        <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {workflowSteps.map((step, index) => {
            const cardContent = (
              <Card className="flex-grow flex flex-col text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 z-10 h-full">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 text-primary rounded-full p-3 w-fit mb-3">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl font-headline">
                    <span className="text-primary mr-2">Step {step.step}:</span> {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-foreground">{step.description}</p>
                </CardContent>
              </Card>
            );

            return (
              <div key={step.step} className="relative flex flex-col opacity-0 animate-fade-in-up" style={{ animationDelay: `${index * 150 + 200}ms` }}>
                {step.href ? <Link href={step.href} className="flex flex-col h-full">{cardContent}</Link> : cardContent}
                {index < workflowSteps.length - 1 && (
                  <ArrowRight className="absolute top-1/2 -right-4 transform -translate-y-1/2 h-8 w-8 text-primary/50 hidden lg:block z-0" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
