
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero-section';
import ProductsSection from '@/components/sections/products-section';
import ServicesSection from '@/components/sections/services-section';
import QualitySection from '@/components/sections/quality-section';
import WorkflowSection from '@/components/sections/workflow-section';
import IndustriesSection from '@/components/sections/industries-section';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ProductsSection />
        <WorkflowSection />
        <IndustriesSection />
        <ServicesSection />
        <QualitySection />
      </main>
      <Footer />
    </div>
  );
}
