import React, { useState, useRef, useEffect } from 'react';
import { cn } from '../../lib/utils';
import { Button } from './Button';

export interface DropdownItem {
  value: string | number;
  label: string;
  disabled?: boolean;
}

export interface DropdownProps {
  items: DropdownItem[];
  value?: string | number;
  onValueChange?: (value: string | number) => void;
  placeholder?: string;
  className?: string;
}

export function Dropdown({ items, value, onValueChange, placeholder = 'Selecciona...', className }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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

  const selectedItem = items.find(item => item.value === value);

  return (
    <div ref={dropdownRef} className={cn('relative', className)}>
      <Button
        variant="outline"
        onClick={() => setOpen(!open)}
        className="w-full justify-between bg-[#12111F] border-[#222430] text-[#FCFEFA] hover:bg-[#222430] hover:border-[#EF5350]/50 h-12"
      >
        <span className="text-left font-light">{selectedItem ? selectedItem.label : placeholder}</span>
        <svg
          className={cn('ml-2 h-4 w-4 transition-transform text-[#4D5466]', open && 'rotate-180')}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </Button>
      {open && (
        <div className="absolute z-50 mt-2 w-full rounded-lg border border-[#222430] bg-[#12111F] shadow-2xl overflow-hidden">
          <div className="p-2">
            {items.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  onValueChange?.(item.value);
                  setOpen(false);
                }}
                disabled={item.disabled}
                className={cn(
                  'w-full rounded-md px-4 py-3 text-left text-sm transition-all duration-200 text-[#FCFEFA] font-light',
                  'hover:bg-[#222430]',
                  value === item.value && 'bg-[#EF5350] text-[#FCFEFA] font-medium',
                  item.disabled && 'opacity-30 cursor-not-allowed'
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

