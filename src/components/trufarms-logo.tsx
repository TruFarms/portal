import Image from 'next/image';
import { cn } from '@/lib/utils';

const TruFarmsLogo = ({ className }: { className?: string }) => (
    <Image
      src="/trufarms_trans.png"
      alt="TruFarms Logo"
      width={225} 
      height={60}
      className={cn("w-auto", className)}
      priority
    />
);

export default TruFarmsLogo;
