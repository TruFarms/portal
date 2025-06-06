
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-primary mb-8 font-headline text-center">Privacy Policy</h1>
        <div className="max-w-3xl mx-auto space-y-6 text-lg">
          <p>This is a placeholder for TruFarms' Privacy Policy. This document will outline how we collect, use, protect, and handle personal information gathered through our website and services.</p>
          <h2 className="text-2xl font-semibold text-primary font-headline mt-6">Information Collection</h2>
          <p>We will detail the types of information collected (e.g., contact details, usage data).</p>
          <h2 className="text-2xl font-semibold text-primary font-headline mt-6">Use of Information</h2>
          <p>Explanation of how collected information is used (e.g., to provide services, communicate, improve offerings).</p>
          <h2 className="text-2xl font-semibold text-primary font-headline mt-6">Data Protection</h2>
          <p>Measures taken to secure user data.</p>
          <h2 className="text-2xl font-semibold text-primary font-headline mt-6">Third-Party Sharing</h2>
          <p>Policies regarding sharing data with third parties.</p>
          <h2 className="text-2xl font-semibold text-primary font-headline mt-6">User Rights</h2>
          <p>Information on how users can access, modify, or delete their personal data.</p>
          <p>Please check back later for the full Privacy Policy.</p>
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
