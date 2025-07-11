
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-4 font-headline text-center">Privacy Policy</h1>
          <p className="text-center text-muted-foreground mb-8">Effective Date: May 13, 2025</p>
          
          <div className="space-y-8 text-lg">
            <p>TruFarms LLC is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website and use our services. This policy applies to all users and visitors of our website.</p>
            
            <section>
              <h2 className="text-2xl font-semibold text-primary font-headline mt-6 mb-3">1. Information We Collect</h2>
              <h3 className="text-xl font-semibold text-foreground font-headline mt-4 mb-2">Information You Provide</h3>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Full Name (required)</li>
                <li>Email Address (required)</li>
                <li>Phone Number (optional)</li>
                <li>Company Name (optional)</li>
                <li>“How Did You Hear About Us?” (optional)</li>
                <li>Message Content (freeform)</li>
              </ul>
              <h3 className="text-xl font-semibold text-foreground font-headline mt-4 mb-2">Automatically Collected Information</h3>
              <p>Technical and usage data (e.g., browser type, device type, pages visited, time on site) collected via Google Firebase Analytics.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary font-headline mt-6 mb-3">2. How We Use Your Information</h2>
              <p>We use the collected information for the following purposes:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>To respond to inquiries and contact you upon request</li>
                <li>To evaluate business opportunities or partnerships</li>
                <li>To improve website design and functionality (based on Firebase usage data)</li>
                <li>To detect and prevent security incidents and ensure site stability</li>
              </ul>
              <p className="mt-4">We do not sell or share your personal information with third parties for marketing or advertising purposes.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary font-headline mt-6 mb-3">3. Data Handling and Third-Party Services</h2>
              <p><strong>Resend:</strong> We use Resend to manage contact form submissions and email communications. Resend serves as a data processor on our behalf and adheres to current data security practices.</p>
              <p className="mt-2"><strong>Firebase (Google Analytics):</strong> Firebase collects anonymous usage data such as IP address, browser type, and interaction with website features to help us understand user behavior.</p>
              <p className="mt-2">Both providers have their own privacy policies and follow industry-standard security protocols.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary font-headline mt-6 mb-3">4. Data Retention</h2>
              <p>We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy or as required by law. After that period, we securely delete or anonymize the data.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary font-headline mt-6 mb-3">5. Legal and Regulatory Compliance</h2>
              <p>As a licensed cannabis business, TruFarms may be subject to regulatory oversight. We will comply with any lawful obligations to disclose data when required by a legal authority or court order. We do not disclose customer or visitor data unless legally required to do so.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary font-headline mt-6 mb-3">6. Data Security</h2>
              <p>We implement industry-standard technical and organizational measures to secure your personal information. While we strive to protect your data, no method of internet transmission is 100% secure, and we cannot guarantee absolute protection.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary font-headline mt-6 mb-3">7. Your Rights and Choices</h2>
              <p>You may request to:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Access, correct, or delete your personal information</li>
                <li>Opt out of future email communications</li>
                <li>Withdraw consent to data processing where applicable</li>
              </ul>
              <p className="mt-2">To make a request, please contact us at <a href="mailto:CustomerService@trufarms.net" className="text-primary hover:underline">CustomerService@trufarms.net</a> or use our website’s contact form.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary font-headline mt-6 mb-3">8. Children’s Privacy</h2>
              <p>This website is intended for business use only and is not directed to individuals under 21 years of age. We do not knowingly collect personal data from children.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-primary font-headline mt-6 mb-3">9. Updates to This Policy</h2>
              <p>We may revise this Privacy Policy periodically. Any changes will be posted on this page with an updated effective date. We encourage users to review this policy regularly.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary font-headline mt-6 mb-3">10. Contact Us</h2>
              <p>If you have questions or concerns regarding this Privacy Policy or our data practices, please contact:</p>
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
