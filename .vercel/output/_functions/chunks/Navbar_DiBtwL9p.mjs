import { e as createComponent, f as createAstro, h as addAttribute, n as renderHead, l as renderSlot, r as renderTemplate } from './astro/server_BRUHusPG.mjs';
import { clsx } from 'clsx';
/* empty css                         */
import { jsx, jsxs } from 'react/jsx-runtime';
import { forwardRef, useState, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="ca" class="dark" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"><title>StyleCut - Perruqueria Premium</title>${renderHead()}</head> <body class="min-h-screen" data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/theyo/Documents/Automat/peluqueria/src/layouts/Layout.astro", void 0);

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Button = forwardRef(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? "a" : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF5350] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:opacity-90": variant === "default",
            "bg-[hsl(var(--destructive))] text-[hsl(var(--destructive-foreground))] hover:opacity-90": variant === "destructive",
            "border border-[hsl(var(--input))] bg-[hsl(var(--background))] hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--accent-foreground))]": variant === "outline",
            "bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] hover:opacity-80": variant === "secondary",
            "hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--accent-foreground))]": variant === "ghost",
            "text-[hsl(var(--primary))] underline-offset-4 hover:underline": variant === "link"
          },
          {
            "h-10 px-4 py-2": size === "default",
            "h-9 rounded-md px-3": size === "sm",
            "h-11 rounded-md px-8": size === "lg",
            "h-10 w-10": size === "icon"
          },
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);
  const handleNavClick = (e, anchor) => {
    if (currentPath !== "/") {
      e.preventDefault();
      window.location.href = `/${anchor}`;
    } else {
      const element = document.querySelector(anchor);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };
  return /* @__PURE__ */ jsxs("nav", { className: "fixed top-0 left-0 right-0 z-50 bg-[#00000A]/80 backdrop-blur-xl border-b border-[#222430]", children: [
    /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between h-16 sm:h-20", children: [
      /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 flex items-center", children: /* @__PURE__ */ jsxs("a", { href: "/", className: "flex items-center space-x-3 group", children: [
        /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-[#EF5350] rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300", children: /* @__PURE__ */ jsx("svg", { className: "w-6 h-6 text-[#FCFEFA]", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" }) }) }),
        /* @__PURE__ */ jsx("span", { className: "text-xl font-light text-[#FCFEFA] tracking-tight", children: "StyleCut" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "hidden lg:block", children: /* @__PURE__ */ jsxs("div", { className: "ml-6 xl:ml-10 flex items-baseline space-x-1", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: currentPath === "/" ? "#inici" : "/#inici",
            onClick: (e) => handleNavClick(e, "#inici"),
            className: "text-[#4D5466] hover:text-[#FCFEFA] px-3 xl:px-4 py-2 text-xs xl:text-sm font-light transition-colors duration-300 uppercase tracking-wider",
            children: "Inici"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: currentPath === "/" ? "#serveis" : "/#serveis",
            onClick: (e) => handleNavClick(e, "#serveis"),
            className: "text-[#4D5466] hover:text-[#FCFEFA] px-3 xl:px-4 py-2 text-xs xl:text-sm font-light transition-colors duration-300 uppercase tracking-wider",
            children: "Serveis"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: currentPath === "/" ? "#galeria" : "/#galeria",
            onClick: (e) => handleNavClick(e, "#galeria"),
            className: "text-[#4D5466] hover:text-[#FCFEFA] px-3 xl:px-4 py-2 text-xs xl:text-sm font-light transition-colors duration-300 uppercase tracking-wider",
            children: "Galeria"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: currentPath === "/" ? "#sobre-nosaltres" : "/#sobre-nosaltres",
            onClick: (e) => handleNavClick(e, "#sobre-nosaltres"),
            className: "text-[#4D5466] hover:text-[#FCFEFA] px-3 xl:px-4 py-2 text-xs xl:text-sm font-light transition-colors duration-300 uppercase tracking-wider",
            children: "Sobre Nosaltres"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: currentPath === "/" ? "#contacte" : "/#contacte",
            onClick: (e) => handleNavClick(e, "#contacte"),
            className: "text-[#4D5466] hover:text-[#FCFEFA] px-3 xl:px-4 py-2 text-xs xl:text-sm font-light transition-colors duration-300 uppercase tracking-wider",
            children: "Contacte"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "hidden lg:block", children: /* @__PURE__ */ jsx(Button, { asChild: true, className: "bg-[#EF5350] hover:bg-[#EF5350]/90 text-[#FCFEFA] border-0 font-light text-xs xl:text-sm px-4 xl:px-6", children: /* @__PURE__ */ jsx("a", { href: "/reservar", children: "Reserva Ara" }) }) }),
      /* @__PURE__ */ jsx("div", { className: "lg:hidden", children: /* @__PURE__ */ jsx(
        Button,
        {
          variant: "ghost",
          size: "icon",
          onClick: () => setIsOpen(!isOpen),
          children: /* @__PURE__ */ jsx("svg", { className: "h-6 w-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: isOpen ? /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) : /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6h16M4 12h16M4 18h16" }) })
        }
      ) })
    ] }) }),
    isOpen && /* @__PURE__ */ jsx("div", { className: "lg:hidden border-t border-[#222430] bg-[#00000A]/95 backdrop-blur-xl", children: /* @__PURE__ */ jsxs("div", { className: "px-2 pt-2 pb-3 space-y-1", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          href: currentPath === "/" ? "#inici" : "/#inici",
          onClick: (e) => handleNavClick(e, "#inici"),
          className: "block px-3 py-3 text-[#FCFEFA] hover:bg-[#12111F] rounded-lg transition-colors font-light uppercase tracking-wider text-sm",
          children: "Inici"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: currentPath === "/" ? "#serveis" : "/#serveis",
          onClick: (e) => handleNavClick(e, "#serveis"),
          className: "block px-3 py-3 text-[#FCFEFA] hover:bg-[#12111F] rounded-lg transition-colors font-light uppercase tracking-wider text-sm",
          children: "Serveis"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: currentPath === "/" ? "#galeria" : "/#galeria",
          onClick: (e) => handleNavClick(e, "#galeria"),
          className: "block px-3 py-3 text-[#FCFEFA] hover:bg-[#12111F] rounded-lg transition-colors font-light uppercase tracking-wider text-sm",
          children: "Galeria"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: currentPath === "/" ? "#sobre-nosaltres" : "/#sobre-nosaltres",
          onClick: (e) => handleNavClick(e, "#sobre-nosaltres"),
          className: "block px-3 py-3 text-[#FCFEFA] hover:bg-[#12111F] rounded-lg transition-colors font-light uppercase tracking-wider text-sm",
          children: "Sobre Nosaltres"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: currentPath === "/" ? "#contacte" : "/#contacte",
          onClick: (e) => handleNavClick(e, "#contacte"),
          className: "block px-3 py-3 text-[#FCFEFA] hover:bg-[#12111F] rounded-lg transition-colors font-light uppercase tracking-wider text-sm",
          children: "Contacte"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "px-3 py-2", children: /* @__PURE__ */ jsx(Button, { asChild: true, className: "w-full bg-[#EF5350] hover:bg-[#EF5350]/90 text-[#FCFEFA] border-0 font-light", children: /* @__PURE__ */ jsx("a", { href: "/reservar", children: "Reserva Ara" }) }) })
    ] }) })
  ] });
}

export { $$Layout as $, Button as B, Navbar as N, cn as c };
