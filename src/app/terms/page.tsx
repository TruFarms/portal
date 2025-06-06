
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-primary mb-8 font-headline text-center">Terms of Use</h1>
        <div className="max-w-3xl mx-auto space-y-6 text-lg">
          <p>This is a placeholder for TruFarms' Terms of Use. This document will govern your use of our website and services.</p>
          <h2 className="text-2xl font-semibold text-primary font-headline mt-6">Acceptance of Terms</h2>
          <p>By accessing or using our services, you agree to be bound by these terms.</p>
          <h2 className="text-2xl font-semibold text-primary font-headline mt-6">Use of Services</h2>
          <p>Guidelines for acceptable use of our website and services, including prohibited activities.</p>
          <h2 className="text-2xl font-semibold text-primary font-headline mt-6">Intellectual Property</h2>
          <p>Information regarding ownership of content and materials on the site.</p>
          <h2 className="text-2xl font-semibold text-primary font-headline mt-6">Disclaimers and Limitation of Liability</h2>
          <p>Standard disclaimers related to the information and services provided.</p>
          <h2 className="text-2xl font-semibold text-primary font-headline mt-6">Governing Law</h2>
          <p>Jurisdiction and applicable laws.</p>
          <p>Please check back later for the full Terms of Use.</p>
        </div>
        <div className="text-center mt-12">
          <Button asChild>
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
