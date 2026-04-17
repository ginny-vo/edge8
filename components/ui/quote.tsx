'use client';

import { DotPattern } from '@/components/ui/dot-pattern';
import { ReactNode } from 'react';

interface QuoteProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'neutral';
  className?: string;
  children: ReactNode;
}

const variantAccentClasses = {
  primary: 'bg-primary border-primary',
  secondary: 'bg-secondary border-secondary',
  accent: 'bg-accent border-accent',
  neutral: 'bg-slate-500 border-slate-500',
};

export function Quote({
  variant = 'secondary',
  className,
  children,
}: QuoteProps) {
  return (
    <div className={`mx-auto w-full flex items-center mb-10 max-w-7xl px-6 md:mb-20 xl:px-0 ${className ?? ''}`}>
      <div className="relative w-fit flex flex-col items-center border border-border">
        <DotPattern
          variant={variant}
          width={6}
          height={6}
          className="opacity-60"
        />

        <div className={`absolute -left-1.5 -top-1.5 h-3 w-3 ${variantAccentClasses[variant]}`} />
        <div className={`absolute -bottom-1.5 -left-1.5 h-3 w-3 ${variantAccentClasses[variant]}`} />
        <div className={`absolute -right-1.5 -top-1.5 h-3 w-3 ${variantAccentClasses[variant]}`} />
        <div className={`absolute -bottom-1.5 -right-1.5 h-3 w-3 ${variantAccentClasses[variant]}`} />

        <div className="relative z-20 w-fit">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Quote;
