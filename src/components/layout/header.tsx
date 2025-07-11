"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import TruFarmsLogo from '@/components/trufarms-logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const navItems = [
  { href: '/#home', label: 'Home' },
  { href: '/#products', label: 'Products' },
  { href: '/#services', label: 'Services' },
  { href: '/#quality', label: 'Quality Assurance' },
  { href: '/#about', label: 'About' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 shadow-md backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[1fr_auto_1fr] md:flex items-center justify-between h-24 md:h-20">
          <div className="md:hidden"></div> {/* Spacer for mobile grid */}
          <Link href="/#home" aria-label="TruFarms Home" className="justify-self-center md:justify-self-auto">
            <TruFarmsLogo className="h-10" />
          </Link>

          <nav className="hidden md:flex space-x-6 items-center">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="accent" size="sm">
              <Link href="/contact">Contact</Link>
            </Button>
          </nav>

          <div className="md:hidden justify-self-end">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
                <SheetHeader className="flex-row justify-center items-center space-y-0 mb-8">
                  <SheetTitle asChild>
                    <Link href="/#home" aria-label="TruFarms Home" onClick={() => setMobileMenuOpen(false)}>
                      <TruFarmsLogo className="h-8" />
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                   <Button asChild variant="accent" className="w-full mt-4" onClick={() => setMobileMenuOpen(false)}>
                    <Link href="/contact">Contact</Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
