
import Link from 'next/link';
import { Linkedin, Facebook, Instagram, Mail, Phone } from 'lucide-react';
import TruFarmsLogo from '@/components/trufarms-logo';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 text-center md:text-left">
          <div className="flex justify-center md:justify-start">
            <Link href="/#home" aria-label="TruFarms Home" className="inline-block">
              <TruFarmsLogo className="h-12" />
            </Link>
          
          </div>

          <div>
            <h3 className="text-lg font-headline font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/#products" className="hover:text-primary transition-colors">Products</Link></li>
              <li><Link href="/#services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-headline font-semibold mb-3">Contact Us</h3>
            <address className="not-italic text-sm space-y-2">
              <p>Rochester, MN</p>
              <p className="flex items-center justify-center md:justify-start">
                <Mail className="h-4 w-4 mr-2 shrink-0" />
                <a href="mailto:info@trufarms.com" className="hover:text-primary transition-colors">CustomerService@trufarms.net</a>
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <Phone className="h-4 w-4 mr-2 shrink-0" />
                <a href="tel:+15075551234" className="hover:text-primary transition-colors">(919) 423-1506</a>
              </p>
            </address>
            <div className="flex space-x-4 mt-4 justify-center md:justify-start">
              <a href="#" aria-label="LinkedIn" className="text-secondary-foreground hover:text-primary transition-colors"><Linkedin size={20} /></a>
              <a href="#" aria-label="Facebook" className="text-secondary-foreground hover:text-primary transition-colors"><Facebook size={20} /></a>
              <a href="https://www.instagram.com/trufarmsllc?igsh=MWV2ZGZmY2Mxcjc0bQ==" aria-label="Instagram" className="text-secondary-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-sm text-muted-foreground">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-center md:text-left">&copy; {new Date().getFullYear()} TruFarms. All rights reserved.</p>
            <ul className="flex flex-wrap justify-center md:justify-start space-x-4">
              <li><Link href="/licensing" className="hover:text-primary transition-colors">Licensing Statement</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Use</Link></li>
              <li><Link href="/accessibility" className="hover:text-primary transition-colors">ADA Accessibility</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
