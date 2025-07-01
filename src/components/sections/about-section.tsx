
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="opacity-0 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6 font-headline">About TruFarms</h2>
            <p className="text-lg text-foreground mb-4">
              TruFarms is a licensed microbusiness based in Rochester, Minnesota, dedicated to providing exceptional B2B cannabis manufacturing services. Our state-of-the-art, lab-focused operations ensure the highest standards of quality, safety, and compliance.
            </p>
            <p className="text-lg text-foreground mb-6">
              We partner with dispensaries, cultivators, and other cannabis businesses to bring innovative and reliable products to the Minnesota market. Our commitment to transparency and scientific rigor underpins everything we do.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-foreground">
                <CheckCircle className="h-6 w-6 text-primary mr-3 shrink-0" />
                Licensed Microbusiness in Rochester, MN
              </li>
              <li className="flex items-center text-foreground">
                <CheckCircle className="h-6 w-6 text-primary mr-3 shrink-0" />
                Specialized Lab-Focused Operations
              </li>
              <li className="flex items-center text-foreground">
                <CheckCircle className="h-6 w-6 text-primary mr-3 shrink-0" />
                Commitment to Quality, Safety, and Compliance
              </li>
            </ul>
          </div>
          <div className="relative aspect-square rounded-lg overflow-hidden shadow-xl opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
             <Image
              src="/trufarmstest.png"
              alt="TruFarms laboratory or team"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
              className="transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
