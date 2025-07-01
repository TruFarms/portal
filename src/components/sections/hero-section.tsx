import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import TruFarmsLogo from '@/components/trufarms-logo';

export default function HeroSection() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-background to-secondary min-h-[calc(100vh-5rem)] pt-20 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="mb-6 md:hidden flex justify-center">
              <TruFarmsLogo className="h-12 w-auto text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 font-headline">
              Elevating Cannabis Manufacturing Standards
            </h1>
            <p className="text-lg sm:text-xl text-foreground mb-8">
              TruFarms is your premier B2B partner for high-quality, compliant cannabis product manufacturing in Minnesota. We specialize in white-label, toll processing, and private labeling services.
            </p>
            <Button size="lg" asChild className="shadow-lg hover:shadow-xl transition-shadow">
              <Link href="/contact">
                B2B Inquiries <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/trufarmsproducts.png"
              alt="Professional laboratory or cannabis product"
              fill
              style={{ objectFit: 'cover' }}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
