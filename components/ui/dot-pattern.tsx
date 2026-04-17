'use client';
import { useId } from 'react';
import { cn } from '@/lib/utils';

type ColorVariant = 'primary' | 'secondary' | 'accent' | 'neutral';

interface DotPatternProps {
  variant?: ColorVariant;
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  cx?: number;
  cy?: number;
  cr?: number;
  opacity?: number;
  className?: string;
}

const variantClasses: Record<ColorVariant, string> = {
  primary: 'fill-primary',
  secondary: 'fill-secondary',
  accent: 'fill-accent',
  neutral: 'fill-slate-500',
};

export function DotPattern({
  variant = 'neutral',
  width = 24,
  height = 24,
  x = 0,
  y = 0,
  cx = 1,
  cy = 0.5,
  cr = 0.5,
  opacity,
  className,
  ...props
}: DotPatternProps) {
  const id = useId();

  return (
    <svg
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute inset-0 h-full w-full',
        className,
      )}
      style={opacity !== undefined ? { opacity } : undefined}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <circle
            id="pattern-circle"
            cx={cx}
            cy={cy}
            r={cr}
            className={cn(variantClasses[variant], 'opacity-50 md:opacity-70')}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
    </svg>
  );
}

export default DotPattern;
