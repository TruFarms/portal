
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import ProductsSection from '@/components/sections/products-section';
import ServicesSection from '@/components/sections/services-section';
import QualitySection from '@/components/sections/quality-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import WorkflowSection from '@/components/sections/workflow-section';
import BlogPlaceholderSection from '@/components/sections/blog-placeholder-section';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <ServicesSection />
        <QualitySection />
        <TestimonialsSection />
        <WorkflowSection />
        <BlogPlaceholderSection />
      </main>
      <Footer />
    </div>
  );
}
