
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function LicensingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-primary mb-8 font-headline">Licensing Statement</h1>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Detailed licensing information for TruFarms will be provided here. This includes our Minnesota state license details and any other relevant regulatory compliance statements.
        </p>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          TruFarms operates in full compliance with all applicable state and local regulations for cannabis manufacturing in Minnesota.
        </p>
        <Button asChild>
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
}
