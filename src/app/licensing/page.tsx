
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function LicensingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-primary mb-4 font-headline">Licensing Status</h1>
        <p className="text-xl font-semibold text-accent mb-8">Pre-Approved for Extraction License</p>
        
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-left">
          <p>
            TruFarms LLC is proud to announce that we are pre-approved for a cannabis extraction license by the state of Minnesota. We are currently in the final stages of the licensing process and are awaiting the official issuance of our license.
          </p>
          <p>
            Our operations are designed to meet and exceed all state and local regulatory requirements for cannabis manufacturing. We are committed to full compliance and transparency in every aspect of our business.
          </p>
          <p>
            Further details, including our official license number, will be published on this page as soon as they become available. We appreciate your interest and look forward to serving the Minnesota cannabis market with the highest quality products.
          </p>
          <p>
            For any questions regarding our licensing status, please feel free to <Link href="/contact" className="text-primary hover:underline">contact us</Link>.
          </p>
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
