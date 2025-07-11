
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-4 font-headline text-center">Terms of Use</h1>
          <p className="text-center text-muted-foreground mb-8">Effective Date: May 13, 2025</p>

          <div className="space-y-8 text-lg">
            <p>Welcome to the website of TruFarms LLC. By accessing or using our website ("Site"), you agree to be bound by the following Terms of Use ("Terms"). If you do not agree with these Terms, please do not use the Site.</p>

            <section>
              <h2 className="text-2xl font-semibold text-primary font-headline mt-6 mb-3">1. Eligibility</h2>
              <p>This website is intended for use by individuals who are 21 years of age or older and by business professionals or representatives of companies seeking B2B cannabis extraction services. By using this Site, you represent and warrant that you meet these eligibility requirements.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary font-headline mt-6 mb-3">2. Website Purpose</h2>
              <p>The TruFarms website is designed to:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Provide information about our cannabis extraction services</li>
                <li>Allow users to submit business inquiries via our contact form</li>
                <li>Inform visitors about our products, services, and operations</li>
                <li>Facilitate communication for potential partnerships</li>
              </ul>
              <p className="mt-4">The Site does not facilitate online orders, retail cannabis sales, or consumer-level transactions.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary font-headline mt-6 mb-3">3. Acceptable Use</h2>
              <p>You agree to use the Site only for lawful purposes and in accordance with these Terms. You shall not:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Use the Site in violation of any applicable federal, state, or local laws or regulations</li>
                <li>Submit false, misleading, or harmful information through any form</li>
                <li>Interfere with or disrupt the Site’s functionality or attempt unauthorized access</li>
                <li>Upload or transmit viruses, malware, or any harmful code</li>
                <li>Use the Site to harass, defame, abuse, or harm others</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-primary font-headline mt-6 mb-3">4. Intellectual Property</h2>
              <p>All content on the Site—including text, graphics, logos, images, layouts, and software—is the exclusive property of TruFarms LLC or its content providers and is protected under intellectual property laws. You may not copy, reproduce, republish, or distribute any content without prior written consent from TruFarms LLC.</p>
            </section>

             <section>
              <h2 className="text-2xl font-semibold text-primary font-headline mt-6 mb-3">5. Third-Party Services</h2>
              <p>This website integrates third-party services to operate effectively:</p>
               <ul className="list-disc list-inside ml-4 space-y-2">
                  <li><strong>Resend</strong> for managing form submissions and email communication</li>
                  <li><strong>Firebase (Google)</strong> for analytics and performance tracking</li>
                </ul>
              <p className="mt-4">By using the Site, you agree to the data practices outlined in our Privacy Policy.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary font-headline mt-6 mb-3">6. Disclaimer of Warranties</h2>
              <p>The Site and its contents are provided “as is” and “as available.” TruFarms LLC makes no warranties of any kind—express or implied—including but not limited to:</p>
               <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Fitness for a particular purpose</li>
                  <li>Merchantability</li>
                  <li>Non-infringement</li>
                  <li>Availability or error-free operation of the Site</li>
                </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary font-headline mt-6 mb-3">7. Limitation of Liability</h2>
              <p>To the fullest extent permitted by law, TruFarms LLC shall not be liable for any direct, indirect, incidental, consequential, or special damages resulting from your use of—or inability to use—the Site. This includes damages for lost profits, business interruption, or data loss.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-primary font-headline mt-6 mb-3">8. Indemnification</h2>
              <p>You agree to indemnify and hold harmless TruFarms LLC and its officers, directors, employees, and affiliates from any claims, losses, liabilities, damages, and expenses (including legal fees) arising from:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Your violation of these Terms</li>
                  <li>Your misuse of the Site</li>
                </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary font-headline mt-6 mb-3">9. Governing Law</h2>
              <p>These Terms shall be governed by the laws of the State of Minnesota. Any disputes arising under or in connection with these Terms shall be resolved exclusively in the courts located in Winona County, Minnesota.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary font-headline mt-6 mb-3">10. Changes to These Terms</h2>
              <p>We may revise these Terms of Use at any time. Updates will be posted on this page with a revised “Effective Date.” Continued use of the Site following such changes constitutes your acceptance of the new Terms.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-primary font-headline mt-6 mb-3">11. Contact Us</h2>
              <p>If you have any questions about these Terms of Use, please contact us:</p>
              <address className="not-italic mt-2">
                TruFarms LLC<br/>
                Rochester, MN<br/>
                📧 <a href="mailto:CustomerService@trufarms.net" className="text-primary hover:underline">CustomerService@trufarms.net</a><br/>
                📞 <a href="tel:+19194231506" className="text-primary hover:underline">(919) 423-1506</a>
              </address>
            </section>
          </div>
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
