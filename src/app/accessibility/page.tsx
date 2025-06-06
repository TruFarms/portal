
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-primary mb-8 font-headline text-center">Accessibility Statement</h1>
        <div className="max-w-3xl mx-auto space-y-6 text-lg">
          <p>TruFarms is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.</p>
          
          <h2 className="text-2xl font-semibold text-primary font-headline mt-6">Measures to Support Accessibility</h2>
          <p>TruFarms takes the following measures to ensure accessibility of its website:</p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>Include accessibility as part of our design and development processes.</li>
            <li>Employ semantic HTML and ARIA attributes where appropriate.</li>
            <li>Ensure content is navigable via keyboard.</li>
            <li>Strive for sufficient color contrast.</li>
            <li>Provide alternative text for images.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-primary font-headline mt-6">Conformance Status</h2>
          <p>The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. We aim to conform with WCAG 2.1 Level AA.</p>
          
          <h2 className="text-2xl font-semibold text-primary font-headline mt-6">Feedback</h2>
          <p>We welcome your feedback on the accessibility of TruFarms' website. Please let us know if you encounter accessibility barriers:</p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>Phone: (507) 555-1234</li>
            <li>E-mail: <a href="mailto:accessibility@trufarms.com" className="text-primary hover:underline">accessibility@trufarms.com</a></li>
            <li>Address: 123 Lab Drive, Rochester, MN 55901</li>
          </ul>
          <p>We try to respond to feedback within 5 business days.</p>

          <h2 className="text-2xl font-semibold text-primary font-headline mt-6">Ongoing Effort</h2>
          <p>We view accessibility as an ongoing effort and are continuously seeking solutions that will bring all areas of our site to the same level of overall web accessibility.</p>
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
