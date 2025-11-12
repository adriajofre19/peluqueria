import React from 'react';
import { cn } from '../../lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        {
          'border-transparent bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:opacity-90': variant === 'default',
          'border-transparent bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] hover:opacity-80': variant === 'secondary',
          'border-transparent bg-[hsl(var(--destructive))] text-[hsl(var(--destructive-foreground))] hover:opacity-90': variant === 'destructive',
          'text-[hsl(var(--foreground))] border-[hsl(var(--border))]': variant === 'outline',
        },
        className
      )}
      {...props}
    />
  );
}

