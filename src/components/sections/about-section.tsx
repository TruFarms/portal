
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 lg:py-32 bg-background text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/trufarmstest.png"
          alt="TruFarms laboratory or team"
          fill
          style={{ objectFit: 'cover' }}
          sizes="100vw"
          className="opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="opacity-0 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 font-headline">About TruFarms</h2>
            <p className="text-lg text-foreground mb-4">
              TruFarms is a licensed microbusiness based in Rochester, Minnesota, dedicated to providing exceptional B2B cannabis manufacturing services. Our state-of-the-art, lab-focused operations ensure the highest standards of quality, safety, and compliance.
            </p>
            <p className="text-lg text-foreground mb-8">
              We partner with dispensaries, cultivators, and other cannabis businesses to bring innovative and reliable products to the Minnesota market. Our commitment to transparency and scientific rigor underpins everything we do.
            </p>
          </div>
          <ul className="space-y-4 inline-block text-left opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <li className="flex items-center text-foreground text-lg">
              <CheckCircle className="h-6 w-6 text-primary mr-3 shrink-0" />
              Licensed Microbusiness in Rochester, MN
            </li>
            <li className="flex items-center text-foreground text-lg">
              <CheckCircle className="h-6 w-6 text-primary mr-3 shrink-0" />
              Specialized Lab-Focused Operations
            </li>
            <li className="flex items-center text-foreground text-lg">
              <CheckCircle className="h-6 w-6 text-primary mr-3 shrink-0" />
              Commitment to Quality, Safety, and Compliance
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
