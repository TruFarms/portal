import type { ImgHTMLAttributes } from 'react';

const TruFarmsLogo = (props: ImgHTMLAttributes<HTMLImageElement>) => (
<img
  src="/trufarms_trans.png"
  alt="TruFarms Logo"
  className="w-[370px] h-auto" // Tailwind example
/>
);

export default TruFarmsLogo;
