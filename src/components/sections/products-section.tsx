
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Droplets, Pill, Leaf } from 'lucide-react'; // Using Leaf as a stand-in for gummies/edibles

const products = [
  {
    name: 'Vape Cartridges',
    description: 'Premium vape cartridges formulated for purity and potency, available in various strains and cannabinoid profiles.',
    icon: Droplets,
    imageSrc: '/trufarmscarts.png',
  },
  {
    name: 'Gummies & Edibles',
    description: 'Delicious and precisely dosed gummies and other edibles, crafted with high-quality extracts for consistent effects.',
    icon: Leaf,
    imageSrc: '/trufarmsgummies.png',
  },
  {
    name: 'Capsules & Tinctures',
    description: 'Discreet and convenient capsules and tinctures, offering controlled dosing and reliable cannabinoid delivery.',
    icon: Pill,
    imageSrc: '/trufarmscapsules.png',
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-16 lg:py-24 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 opacity-0 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 font-headline">Our Core Products</h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            We manufacture a range of high-quality cannabis products, customizable to meet your brand's specific needs.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={product.name} className="opacity-0 animate-fade-in-up" style={{ animationDelay: `${index * 150 + 200}ms` }}>
              <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-transform duration-300">
                <CardHeader className="p-0">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={product.imageSrc}
                      alt={product.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center mb-3">
                    <product.icon className="h-8 w-8 text-primary mr-3 shrink-0" />
                    <CardTitle className="text-2xl font-headline">{product.name}</CardTitle>
                  </div>
                  <CardDescription className="text-foreground flex-grow">{product.description}</CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
