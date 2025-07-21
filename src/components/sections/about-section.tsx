
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <Card className="overflow-hidden rounded-xl shadow-2xl">
              <div className="relative aspect-square">
                <Image
                  src="/trufarmstest.png"
                  alt="TruFarms laboratory or team"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="transition-transform duration-500 hover:scale-105"
                />
              </div>
            </Card>
          </div>
          <div className="text-left">
            <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 font-headline">About TruFarms</h2>
              <p className="text-lg text-foreground mb-4">
                TruFarms is a licensed microbusiness based in Rochester, Minnesota, dedicated to providing exceptional B2B cannabis manufacturing services. Our state-of-the-art, lab-focused operations ensure the highest standards of quality, safety, and compliance.
              </p>
              <p className="text-lg text-foreground mb-8">
                We partner with dispensaries, cultivators, and other cannabis businesses to bring innovative and reliable products to the Minnesota market. Our commitment to transparency and scientific rigor underpins everything we do.
              </p>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center text-foreground text-lg opacity-0 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <CheckCircle className="h-6 w-6 text-primary mr-3 shrink-0" />
                Licensed Microbusiness in Rochester, MN
              </li>
              <li className="flex items-center text-foreground text-lg opacity-0 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <CheckCircle className="h-6 w-6 text-primary mr-3 shrink-0" />
                Specialized Lab-Focused Operations
              </li>
              <li className="flex items-center text-foreground text-lg opacity-0 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                <CheckCircle className="h-6 w-6 text-primary mr-3 shrink-0" />
                Commitment to Quality, Safety, and Compliance
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
