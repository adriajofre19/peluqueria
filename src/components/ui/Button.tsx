import React, { forwardRef } from 'react';
import { cn } from '../../lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
    const Comp = asChild ? 'a' : 'button';
    return (
      <Comp
        className={cn(
          'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF5350] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          {
            'bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:opacity-90': variant === 'default',
            'bg-[hsl(var(--destructive))] text-[hsl(var(--destructive-foreground))] hover:opacity-90': variant === 'destructive',
            'border border-[hsl(var(--input))] bg-[hsl(var(--background))] hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--accent-foreground))]': variant === 'outline',
            'bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] hover:opacity-80': variant === 'secondary',
            'hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--accent-foreground))]': variant === 'ghost',
            'text-[hsl(var(--primary))] underline-offset-4 hover:underline': variant === 'link',
          },
          {
            'h-10 px-4 py-2': size === 'default',
            'h-9 rounded-md px-3': size === 'sm',
            'h-11 rounded-md px-8': size === 'lg',
            'h-10 w-10': size === 'icon',
          },
          className
        )}
        ref={ref as any}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };

