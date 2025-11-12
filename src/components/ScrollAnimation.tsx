import { useEffect, useRef, useState } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number | string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale' | 'rotate';
}

export default function ScrollAnimation({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'fade' 
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Convert delay to number if it's a string (Astro sometimes passes props as strings)
  const delayNum = typeof delay === 'string' ? parseInt(delay, 10) : delay;
  const directionStr = typeof direction === 'string' ? direction : 'fade';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delayNum);
        } else {
          // Reset animation when element leaves viewport (optional)
          // setIsVisible(false);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before element is fully visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delayNum]);

  const directionClasses = {
    fade: 'opacity-0',
    up: 'opacity-0 translate-y-10',
    down: 'opacity-0 -translate-y-10',
    left: 'opacity-0 translate-x-10',
    right: 'opacity-0 -translate-x-10',
    scale: 'opacity-0 scale-95',
    rotate: 'opacity-0 rotate-3',
  };

  const visibleClasses = {
    fade: 'opacity-100',
    up: 'opacity-100 translate-y-0',
    down: 'opacity-100 translate-y-0',
    left: 'opacity-100 translate-x-0',
    right: 'opacity-100 translate-x-0',
    scale: 'opacity-100 scale-100',
    rotate: 'opacity-100 rotate-0',
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? visibleClasses[directionStr as keyof typeof visibleClasses] : directionClasses[directionStr as keyof typeof directionClasses]
      } ${className}`}
    >
      {children}
    </div>
  );
}
