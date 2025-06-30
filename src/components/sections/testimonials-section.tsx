import { Card, CardContent } from '@/components/ui/card';
import { BadgeCheck, Star } from 'lucide-react'; // BadgeCheck for compliance, Star for testimonials
import Image from 'next/image';

const testimonials = [
  {
    quote: "TruFarms has been an invaluable partner in developing our product line. Their attention to detail and commitment to quality are second to none.",
    name: "Jane Doe",
    company: "GreenLeaf Dispensaries",
  },
  {
    quote: "The consistency and reliability of TruFarms' manufacturing have allowed us to scale our brand confidently. Highly recommended!",
    name: "John Smith",
    company: "Roots Cultivation",
  },
];

const partners = [
  { name: "Lab Partner A", logoSrc: "https://placehold.co/150x60.png", imageHint: "lab partner" },
  { name: "Lab Partner B", logoSrc: "https://placehold.co/150x60.png", imageHint: "lab partner" },
  { name: "MN OCM Compliant", logoSrc: "https://placehold.co/150x60.png", imageHint: "compliance badge" },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 font-headline">Trusted by Industry Leaders</h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Hear what our partners say about working with TruFarms and see our commitment to excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-foreground italic mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold text-primary">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-primary mb-8 font-headline">Our Partners & Compliance</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <div key={index} className="text-center" title={partner.name}>
                <Image 
                  src={partner.logoSrc} 
                  alt={partner.name} 
                  data-ai-hint={partner.imageHint}
                  width={150} 
                  height={60} 
                  style={{objectFit: "contain"}} 
                  className="opacity-75 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
