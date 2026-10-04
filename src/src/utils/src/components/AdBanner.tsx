import { useEffect, useRef } from 'react';

interface AdBannerProps {
  slot: string;
  className?: string;
  format?: 'horizontal' | 'vertical' | 'square';
}

export default function AdBanner({ slot, className = '', format = 'horizontal' }: AdBannerProps) {
  const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    try {
      // @ts-ignore
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      console.log('AdSense not loaded yet');
    }
  }, []);

  const sizeClasses = {
    horizontal: 'w-full h-[90px] md:h-[100px]',
    vertical: 'w-[160px] h-[600px]',
    square: 'w-[300px] h-[250px]',
  };

  const adFormat = {
    horizontal: 'auto',
    vertical: 'rectangle',
    square: 'rectangle',
  };

  return (
    <div className={`ad-container ${className}`}>
      <div className={`relative ${sizeClasses[format]} flex items-center justify-center bg-gray-50 border border-dashed border-gray-200 rounded overflow-hidden`}>
        <ins
          ref={adRef}
          className="adsbygoogle relative z-10"
          style={{ display: 'block', width: '100%', height: '100%' }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
          data-ad-slot={slot}
          data-ad-format={adFormat[format]}
          data-full-width-responsive="true"
        ></ins>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-300 pointer-events-none z-0">
          <i className="fas fa-ad text-2xl mb-1 opacity-50"></i>
          <span className="text-xs opacity-50">Publicidade</span>
        </div>
      </div>
    </div>
  );
}
