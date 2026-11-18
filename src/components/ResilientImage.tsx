import { useState } from 'react';
import { Sprout } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
}

export function ResilientImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  loading = 'lazy',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#E9EFEA] via-[#DCE6DE] to-[#CBD9CE] text-[#2E7E3A] p-6 text-center ${className}`}
      >
        <Sprout className="w-8 h-8 mb-2 opacity-80" aria-hidden="true" />
        <span className="text-xs font-medium text-[#2A3B2D] max-w-[24ch] leading-snug">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
