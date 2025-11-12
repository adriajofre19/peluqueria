import { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    if (currentPath !== '/') {
      e.preventDefault();
      window.location.href = `/${anchor}`;
    } else {
      // Si estem a la pàgina principal, deixar que el scroll funcioni normalment
      const element = document.querySelector(anchor);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#00000A]/80 backdrop-blur-xl border-b border-[#222430]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-[#EF5350] rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <svg className="w-6 h-6 text-[#FCFEFA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
                </svg>
              </div>
              <span className="text-xl font-light text-[#FCFEFA] tracking-tight">StyleCut</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-6 xl:ml-10 flex items-baseline space-x-1">
              <a 
                href={currentPath === '/' ? '#inici' : '/#inici'} 
                onClick={(e) => handleNavClick(e, '#inici')}
                className="text-[#4D5466] hover:text-[#FCFEFA] px-3 xl:px-4 py-2 text-xs xl:text-sm font-light transition-colors duration-300 uppercase tracking-wider"
              >
                Inici
              </a>
              <a 
                href={currentPath === '/' ? '#serveis' : '/#serveis'} 
                onClick={(e) => handleNavClick(e, '#serveis')}
                className="text-[#4D5466] hover:text-[#FCFEFA] px-3 xl:px-4 py-2 text-xs xl:text-sm font-light transition-colors duration-300 uppercase tracking-wider"
              >
                Serveis
              </a>
              <a 
                href={currentPath === '/' ? '#galeria' : '/#galeria'} 
                onClick={(e) => handleNavClick(e, '#galeria')}
                className="text-[#4D5466] hover:text-[#FCFEFA] px-3 xl:px-4 py-2 text-xs xl:text-sm font-light transition-colors duration-300 uppercase tracking-wider"
              >
                Galeria
              </a>
              <a 
                href={currentPath === '/' ? '#sobre-nosaltres' : '/#sobre-nosaltres'} 
                onClick={(e) => handleNavClick(e, '#sobre-nosaltres')}
                className="text-[#4D5466] hover:text-[#FCFEFA] px-3 xl:px-4 py-2 text-xs xl:text-sm font-light transition-colors duration-300 uppercase tracking-wider"
              >
                Sobre Nosaltres
              </a>
              <a 
                href={currentPath === '/' ? '#contacte' : '/#contacte'} 
                onClick={(e) => handleNavClick(e, '#contacte')}
                className="text-[#4D5466] hover:text-[#FCFEFA] px-3 xl:px-4 py-2 text-xs xl:text-sm font-light transition-colors duration-300 uppercase tracking-wider"
              >
                Contacte
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild className="bg-[#EF5350] hover:bg-[#EF5350]/90 text-[#FCFEFA] border-0 font-light text-xs xl:text-sm px-4 xl:px-6">
              <a href="/reservar">Reserva Ara</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-[#222430] bg-[#00000A]/95 backdrop-blur-xl">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a 
              href={currentPath === '/' ? '#inici' : '/#inici'} 
              onClick={(e) => handleNavClick(e, '#inici')}
              className="block px-3 py-3 text-[#FCFEFA] hover:bg-[#12111F] rounded-lg transition-colors font-light uppercase tracking-wider text-sm"
            >
              Inici
            </a>
            <a 
              href={currentPath === '/' ? '#serveis' : '/#serveis'} 
              onClick={(e) => handleNavClick(e, '#serveis')}
              className="block px-3 py-3 text-[#FCFEFA] hover:bg-[#12111F] rounded-lg transition-colors font-light uppercase tracking-wider text-sm"
            >
              Serveis
            </a>
            <a 
              href={currentPath === '/' ? '#galeria' : '/#galeria'} 
              onClick={(e) => handleNavClick(e, '#galeria')}
              className="block px-3 py-3 text-[#FCFEFA] hover:bg-[#12111F] rounded-lg transition-colors font-light uppercase tracking-wider text-sm"
            >
              Galeria
            </a>
            <a 
              href={currentPath === '/' ? '#sobre-nosaltres' : '/#sobre-nosaltres'} 
              onClick={(e) => handleNavClick(e, '#sobre-nosaltres')}
              className="block px-3 py-3 text-[#FCFEFA] hover:bg-[#12111F] rounded-lg transition-colors font-light uppercase tracking-wider text-sm"
            >
              Sobre Nosaltres
            </a>
            <a 
              href={currentPath === '/' ? '#contacte' : '/#contacte'} 
              onClick={(e) => handleNavClick(e, '#contacte')}
              className="block px-3 py-3 text-[#FCFEFA] hover:bg-[#12111F] rounded-lg transition-colors font-light uppercase tracking-wider text-sm"
            >
              Contacte
            </a>
            <div className="px-3 py-2">
              <Button asChild className="w-full bg-[#EF5350] hover:bg-[#EF5350]/90 text-[#FCFEFA] border-0 font-light">
                <a href="/reservar">Reserva Ara</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

