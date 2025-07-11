
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import TruFarmsLogo from '@/components/trufarms-logo';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/trufarmsproducts.png"
          alt="Professional laboratory or cannabis product"
          fill
          style={{ objectFit: 'cover' }}
          priority
          className="opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-primary mb-6 font-headline opacity-0 animate-fade-in-down" style={{ animationDelay: '0.1s', textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
            Elevating Cannabis Manufacturing Standards
          </h1>
          <p className="text-lg sm:text-xl text-foreground mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in-down" style={{ animationDelay: '0.2s' }}>
            TruFarms is your premier B2B partner for high-quality, compliant cannabis product manufacturing in Minnesota. We specialize in white-label, toll processing, and private labeling services.
          </p>
          <div className="opacity-0 animate-fade-in-down" style={{ animationDelay: '0.3s' }}>
            <Button size="lg" asChild variant="accent" className="shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105">
              <Link href="/contact">
                B2B Inquiries <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
