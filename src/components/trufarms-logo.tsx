import type { ImgHTMLAttributes } from 'react';

const TruFarmsLogo = (props: ImgHTMLAttributes<HTMLImageElement>) => (
<img
  src="/trufarms_trans2.png"
  alt="TruFarms Logo"
  className="w-[200px] h-auto" // Tailwind example
/>
);

export default TruFarmsLogo;
