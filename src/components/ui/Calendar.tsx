import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, addMonths, subMonths, isToday } from 'date-fns';
import { ca } from 'date-fns/locale';
import { cn } from '../../lib/utils';
import { Button } from './Button';

export interface CalendarProps {
  selected?: Date;
  onSelect?: (date: Date) => void;
  minDate?: Date;
  className?: string;
}

export function Calendar({ selected, onSelect, minDate = new Date(), className }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(selected || new Date());

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  // Afegir dies de la setmana anterior per completar la primera fila
  const firstDayOfWeek = monthStart.getDay();
  const daysToAdd = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;
  const previousDays = Array.from({ length: daysToAdd }, (_, i) => {
    const date = new Date(monthStart);
    date.setDate(date.getDate() - daysToAdd + i);
    return date;
  });

  const allDays = [...previousDays, ...daysInMonth];

  const isDateDisabled = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const handlePreviousMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  return (
    <div className={cn('rounded-lg p-6', className)}>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <Button
          variant="ghost"
          size="icon"
          onClick={handlePreviousMonth}
          className="h-10 w-10 text-[#4D5466] hover:text-[#FCFEFA] hover:bg-[#12111F] rounded-lg"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Button>
        <h3 className="text-2xl font-light text-[#FCFEFA] capitalize tracking-wide">
          {format(currentMonth, 'MMMM yyyy', { locale: ca })}
        </h3>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleNextMonth}
          className="h-10 w-10 text-[#4D5466] hover:text-[#FCFEFA] hover:bg-[#12111F] rounded-lg"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Button>
      </div>

      {/* Days of week */}
      <div className="grid grid-cols-7 gap-2 mb-4">
        {['Dl', 'Dt', 'Dc', 'Dj', 'Dv', 'Ds', 'Dg'].map((day, i) => (
          <div
            key={i}
            className="h-10 flex items-center justify-center text-xs font-medium text-[#4D5466] uppercase tracking-wider"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar days */}
      <div className="grid grid-cols-7 gap-2">
        {allDays.map((day, index) => {
          const isCurrentMonth = isSameMonth(day, currentMonth);
          const isSelected = selected && isSameDay(day, selected);
          const isTodayDate = isToday(day);
          const disabled = isDateDisabled(day);

          return (
            <button
              key={index}
              onClick={() => !disabled && onSelect?.(day)}
              disabled={disabled}
              className={cn(
                'h-14 rounded-lg text-sm font-medium transition-all duration-200',
                !isCurrentMonth && 'text-[#4D5466]/30',
                isCurrentMonth && !isSelected && 'text-[#FCFEFA]',
                isSelected && 'bg-[#EF5350] text-[#FCFEFA] font-semibold shadow-lg shadow-[#EF5350]/30',
                !isSelected && isCurrentMonth && !disabled && 'hover:bg-[#12111F] hover:text-[#FCFEFA]',
                isTodayDate && !isSelected && 'ring-2 ring-[#EF5350]/50',
                disabled && 'opacity-20 cursor-not-allowed'
              )}
            >
              {format(day, 'd')}
            </button>
          );
        })}
      </div>
    </div>
  );
}

