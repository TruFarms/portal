
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <section id="about" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden pt-20">
          <div className="absolute inset-0 z-0">
            <Image
              src="/trufarmstest.png"
              alt="TruFarms laboratory background"
              fill
              style={{ objectFit: 'cover' }}
              sizes="100vw"
              className="opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-primary/20 to-background" />
          </div>
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="max-w-4xl mx-auto">
              <div className="opacity-0 animate-fade-in-down" style={{ animationDelay: '100ms' }}>
                <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6 font-headline" style={{ textShadow: '1px 1px 3px hsl(var(--background))' }}>
                  About TruFarms
                </h1>
                <p className="text-lg text-foreground mb-4">
                  TruFarms is a licensed microbusiness based in Rochester, Minnesota, dedicated to providing exceptional B2B cannabis manufacturing services. Our state-of-the-art, lab-focused operations ensure the highest standards of quality, safety, and compliance.
                </p>
                <p className="text-lg text-foreground mb-8">
                  We partner with dispensaries, cultivators, and other cannabis businesses to bring innovative and reliable products to the Minnesota market. Our commitment to transparency and scientific rigor underpins everything we do.
                </p>
              </div>
              <ul className="space-y-4 max-w-md mx-auto text-left">
                <li className="flex items-center text-foreground text-lg opacity-0 animate-fade-in-down" style={{ animationDelay: '300ms' }}>
                  <CheckCircle className="h-6 w-6 text-primary mr-3 shrink-0" />
                  Licensed Microbusiness in Rochester, MN
                </li>
                <li className="flex items-center text-foreground text-lg opacity-0 animate-fade-in-down" style={{ animationDelay: '400ms' }}>
                  <CheckCircle className="h-6 w-6 text-primary mr-3 shrink-0" />
                  Specialized Lab-Focused Operations
                </li>
                <li className="flex items-center text-foreground text-lg opacity-0 animate-fade-in-down" style={{ animationDelay: '500ms' }}>
                  <CheckCircle className="h-6 w-6 text-primary mr-3 shrink-0" />
                  Commitment to Quality, Safety, and Compliance
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
