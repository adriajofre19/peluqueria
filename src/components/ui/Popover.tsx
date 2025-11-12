import React, { useState, useRef, useEffect } from 'react';
import { cn } from '../../lib/utils';

export interface PopoverProps {
  children: React.ReactNode;
  content: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

export function Popover({ children, content, open: controlledOpen, onOpenChange, className }: PopoverProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  const open = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const setOpen = (value: boolean) => {
    if (controlledOpen === undefined) {
      setInternalOpen(value);
    }
    onOpenChange?.(value);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        triggerRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  return (
    <div className="relative">
      <div ref={triggerRef} onClick={() => setOpen(!open)}>
        {children}
      </div>
      {open && (
        <div
          ref={popoverRef}
          className={cn(
            'absolute z-50 w-72 rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--popover))] p-4 text-[hsl(var(--popover-foreground))] shadow-md outline-none',
            className
          )}
          style={{ top: '100%', left: 0, marginTop: '8px' }}
        >
          {content}
        </div>
      )}
    </div>
  );
}

