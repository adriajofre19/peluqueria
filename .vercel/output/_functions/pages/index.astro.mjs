import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, l as renderSlot, r as renderTemplate, k as renderComponent } from '../chunks/astro/server_BRUHusPG.mjs';
import { $ as $$Layout, N as Navbar } from '../chunks/Navbar_DiBtwL9p.mjs';
import 'clsx';
import { jsx } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
export { renderers } from '../renderers.mjs';

const $$Astro$7 = createAstro();
const $$Badge = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Badge;
  const { variant = "default", class: className = "" } = Astro2.props;
  const variantClasses = {
    default: "border-transparent bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]",
    secondary: "border-transparent bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))]",
    destructive: "border-transparent bg-[hsl(var(--destructive))] text-[hsl(var(--destructive-foreground))]",
    outline: "text-[hsl(var(--foreground))] border-[hsl(var(--border))]"
  };
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors ${variantClasses[variant]} ${className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </span>`;
}, "C:/Users/theyo/Documents/Automat/peluqueria/src/components/Badge.astro", void 0);

const $$Astro$6 = createAstro();
const $$ButtonLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ButtonLink;
  const {
    href,
    variant = "default",
    size = "default",
    class: className = ""
  } = Astro2.props;
  const variantClasses = {
    default: "text-[hsl(var(--primary-foreground))] hover:opacity-90",
    outline: "border border-[hsl(var(--input))] bg-[hsl(var(--background))] hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--accent-foreground))]"
  };
  const sizeClasses = {
    default: "h-10 px-4 py-2",
    lg: "h-11 px-8 py-6 text-lg"
  };
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/theyo/Documents/Automat/peluqueria/src/components/ButtonLink.astro", void 0);

const $$Astro$5 = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Card;
  const { class: className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] shadow-sm ${className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/theyo/Documents/Automat/peluqueria/src/components/Card.astro", void 0);

const $$Astro$4 = createAstro();
const $$CardHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$CardHeader;
  const { class: className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`flex flex-col space-y-1.5 p-6 ${className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/theyo/Documents/Automat/peluqueria/src/components/CardHeader.astro", void 0);

const $$Astro$3 = createAstro();
const $$CardTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CardTitle;
  const { class: className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h3${addAttribute(`text-2xl font-semibold leading-none tracking-tight ${className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </h3>`;
}, "C:/Users/theyo/Documents/Automat/peluqueria/src/components/CardTitle.astro", void 0);

const $$Astro$2 = createAstro();
const $$CardDescription = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CardDescription;
  const { class: className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<p${addAttribute(`text-sm text-[hsl(var(--muted-foreground))] ${className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </p>`;
}, "C:/Users/theyo/Documents/Automat/peluqueria/src/components/CardDescription.astro", void 0);

const $$Astro$1 = createAstro();
const $$CardContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardContent;
  const { class: className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`p-6 pt-0 ${className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/theyo/Documents/Automat/peluqueria/src/components/CardContent.astro", void 0);

const $$Astro = createAstro();
const $$Separator = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Separator;
  const { class: className = "", orientation = "horizontal" } = Astro2.props;
  const orientationClasses = {
    horizontal: "h-[1px] w-full",
    vertical: "h-full w-[1px]"
  };
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`shrink-0 bg-[hsl(var(--border))] ${orientationClasses[orientation]} ${className}`, "class")} role="separator"${addAttribute(orientation, "aria-orientation")}></div>`;
}, "C:/Users/theyo/Documents/Automat/peluqueria/src/components/Separator.astro", void 0);

function ScrollAnimation({
  children,
  className = "",
  delay = 0,
  direction = "fade"
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const delayNum = typeof delay === "string" ? parseInt(delay, 10) : delay;
  const directionStr = typeof direction === "string" ? direction : "fade";
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delayNum);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
        // Trigger slightly before element is fully visible
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
    fade: "opacity-0",
    up: "opacity-0 translate-y-10",
    down: "opacity-0 -translate-y-10",
    left: "opacity-0 translate-x-10",
    right: "opacity-0 -translate-x-10",
    scale: "opacity-0 scale-95",
    rotate: "opacity-0 rotate-3"
  };
  const visibleClasses = {
    fade: "opacity-100",
    up: "opacity-100 translate-y-0",
    down: "opacity-100 translate-y-0",
    left: "opacity-100 translate-x-0",
    right: "opacity-100 translate-x-0",
    scale: "opacity-100 scale-100",
    rotate: "opacity-100 rotate-0"
  };
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: `transition-all duration-700 ease-out ${isVisible ? visibleClasses[directionStr] : directionClasses[directionStr]} ${className}`,
      children
    }
  );
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/theyo/Documents/Automat/peluqueria/src/components/Navbar", "client:component-export": "default" })}  ${maybeRenderHead()}<section id="inici" class="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#00000A]"> <!-- Background amb Gradient Elegant --> <div class="absolute inset-0"> <div class="absolute inset-0 bg-gradient-to-br from-[#00000A] via-[#12111F] to-[#00000A]"></div> <div class="absolute top-0 right-0 w-[800px] h-[800px] bg-[#EF5350]/5 rounded-full blur-3xl"></div> <div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#EF5350]/5 rounded-full blur-3xl"></div> </div> <!-- Pattern Subtle --> <div class="absolute inset-0 opacity-[0.02]"> <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, #FCFEFA 1px, transparent 0); background-size: 60px 60px;"></div> </div> <!-- Content --> <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 text-center"> ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "client:load": true, "direction": "fade", "delay": 0, "client:component-hydration": "load", "client:component-path": "C:/Users/theyo/Documents/Automat/peluqueria/src/components/ScrollAnimation", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` <div class="inline-block mb-6 sm:mb-8"> ${renderComponent($$result3, "Badge", $$Badge, { "variant": "outline", "class": "mb-4 sm:mb-6 bg-[#12111F]/50 backdrop-blur-xl border-[#222430] text-[#4D5466] px-3 sm:px-4 py-1 sm:py-1.5 text-xs uppercase tracking-widest" }, { "default": ($$result4) => renderTemplate`
Bévingut a StyleCut
` })} </div> ` })} ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "client:load": true, "direction": "up", "delay": 100, "client:component-hydration": "load", "client:component-path": "C:/Users/theyo/Documents/Automat/peluqueria/src/components/ScrollAnimation", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-light text-[#FCFEFA] mb-4 sm:mb-6 md:mb-8 leading-[0.95] tracking-tight px-2">
Transforma el teu
<span class="block font-light mt-2 sm:mt-3 md:mt-4 bg-gradient-to-r from-[#FCFEFA] via-[#FCFEFA]/90 to-[#FCFEFA]/70 bg-clip-text text-transparent">
Estil
</span> </h1> ` })} ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "client:load": true, "direction": "up", "delay": 200, "client:component-hydration": "load", "client:component-path": "C:/Users/theyo/Documents/Automat/peluqueria/src/components/ScrollAnimation", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` <p class="text-base sm:text-lg md:text-xl lg:text-2xl text-[#4D5466] mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto font-light leading-relaxed px-4">
La teva perruqueria de confiança. Experts en tall, tintat i
					perrucat per a dones i homes.
</p> ` })} ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "client:load": true, "direction": "up", "delay": 300, "client:component-hydration": "load", "client:component-path": "C:/Users/theyo/Documents/Automat/peluqueria/src/components/ScrollAnimation", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"> ${renderComponent($$result3, "ButtonLink", $$ButtonLink, { "href": "/reservar", "size": "lg", "class": "bg-[#EF5350]/90 hover:bg-[#EF5350]/90 text-[#FCFEFA] border-0 shadow-lg shadow-[#EF5350]/20 hover:shadow-[#EF5350]/30 transition-all duration-300 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium w-full sm:w-auto" }, { "default": ($$result4) => renderTemplate`
Reserva la teva cita
` })} ${renderComponent($$result3, "ButtonLink", $$ButtonLink, { "href": "#serveis", "variant": "outline", "size": "lg", "class": "border border-[#222430] bg-[#12111F]/50 backdrop-blur-xl text-[#FCFEFA] hover:bg-[#222430] hover:border-[#EF5350]/50 transition-all duration-300 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-light w-full sm:w-auto" }, { "default": ($$result4) => renderTemplate`
Veure Serveis
` })} </div> ` })} </div> <!-- Scroll Indicator Elegant --> ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "client:load": true, "direction": "fade", "delay": 500, "client:component-hydration": "load", "client:component-path": "C:/Users/theyo/Documents/Automat/peluqueria/src/components/ScrollAnimation", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` <div class="absolute bottom-12 left-1/2 transform -translate-x-1/2"> <div class="flex flex-col items-center gap-2 text-[#4D5466]"> <span class="text-xs uppercase tracking-widest font-light">Desplaça't</span> <svg class="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path> </svg> </div> </div> ` })} </section>  <section id="serveis" class="py-16 sm:py-24 md:py-32 bg-[#00000A] relative overflow-hidden"> <!-- Background Decoratiu --> <div class="absolute inset-0"> <div class="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#EF5350]/3 rounded-full blur-3xl"></div> <div class="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#EF5350]/3 rounded-full blur-3xl"></div> </div> <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "client:load": true, "direction": "fade", "client:component-hydration": "load", "client:component-path": "C:/Users/theyo/Documents/Automat/peluqueria/src/components/ScrollAnimation", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` <div class="text-center mb-12 sm:mb-16 md:mb-20"> ${renderComponent($$result3, "Badge", $$Badge, { "variant": "outline", "class": "mb-4 sm:mb-6 bg-[#12111F]/50 backdrop-blur-xl border-[#222430] text-[#4D5466] px-3 sm:px-4 py-1 sm:py-1.5 text-xs uppercase tracking-widest" }, { "default": ($$result4) => renderTemplate`
Els Nostres Serveis
` })} <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-[#FCFEFA] mb-4 sm:mb-6 tracking-tight px-2">
Serveis Professionals
</h2> <p class="text-base sm:text-lg md:text-xl text-[#4D5466] max-w-2xl mx-auto font-light leading-relaxed px-4">
Ofereixem una àmplia gamma de serveis per cuidar i
						estilitzar el teu cabell
</p> </div> ` })} <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"> ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "client:load": true, "direction": "scale", "delay": 0, "client:component-hydration": "load", "client:component-path": "C:/Users/theyo/Documents/Automat/peluqueria/src/components/ScrollAnimation", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Card", $$Card, { "class": "bg-[#12111F]/50 backdrop-blur-xl border-[#222430] hover:border-[#EF5350]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#EF5350]/10 overflow-hidden group" }, { "default": ($$result4) => renderTemplate` <div class="relative h-48 sm:h-56 md:h-64 overflow-hidden"> <img src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80&auto=format&fit=crop" alt="Tall de cabells" loading="lazy" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"> <div class="absolute inset-0 bg-gradient-to-t from-[#00000A]/90 via-[#00000A]/50 to-transparent"></div> </div> ${renderComponent($$result4, "CardHeader", $$CardHeader, { "class": "pb-4" }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "CardTitle", $$CardTitle, { "class": "text-[#FCFEFA] text-xl font-light mb-2" }, { "default": ($$result6) => renderTemplate`Tall de Cabells` })} ${renderComponent($$result5, "CardDescription", $$CardDescription, { "class": "text-[#4D5466] text-sm font-light" }, { "default": ($$result6) => renderTemplate`
Talls moderns i clàssics adaptats al teu estil
								personal
` })} ` })} ${renderComponent($$result4, "CardContent", $$CardContent, {}, { "default": ($$result5) => renderTemplate` <p class="text-3xl font-light text-[#EF5350] mb-1">
15€
</p> <p class="text-xs text-[#4D5466] font-light uppercase tracking-wider">
30 minuts
</p> ` })} ` })} ` })} ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "client:load": true, "direction": "scale", "delay": 100, "client:component-hydration": "load", "client:component-path": "C:/Users/theyo/Documents/Automat/peluqueria/src/components/ScrollAnimation", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Card", $$Card, { "class": "bg-[#12111F]/50 backdrop-blur-xl border-[#222430] hover:border-[#EF5350]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#EF5350]/10 overflow-hidden group" }, { "default": ($$result4) => renderTemplate` <div class="relative h-64 overflow-hidden"> <img src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80&auto=format&fit=crop" alt="Tall i perrucat" loading="lazy" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"> <div class="absolute inset-0 bg-gradient-to-t from-[#00000A]/90 via-[#00000A]/50 to-transparent"></div> </div> ${renderComponent($$result4, "CardHeader", $$CardHeader, { "class": "pb-4" }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "CardTitle", $$CardTitle, { "class": "text-[#FCFEFA] text-xl font-light mb-2" }, { "default": ($$result6) => renderTemplate`Tall i Perrucat` })} ${renderComponent($$result5, "CardDescription", $$CardDescription, { "class": "text-[#4D5466] text-sm font-light" }, { "default": ($$result6) => renderTemplate`
Combinació perfecta de tall amb perrucat
								professional
` })} ` })} ${renderComponent($$result4, "CardContent", $$CardContent, {}, { "default": ($$result5) => renderTemplate` <p class="text-3xl font-light text-[#EF5350] mb-1">
25€
</p> <p class="text-xs text-[#4D5466] font-light uppercase tracking-wider">
45 minuts
</p> ` })} ` })} ` })} ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "client:load": true, "direction": "scale", "delay": 200, "client:component-hydration": "load", "client:component-path": "C:/Users/theyo/Documents/Automat/peluqueria/src/components/ScrollAnimation", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Card", $$Card, { "class": "bg-[#12111F]/50 backdrop-blur-xl border-[#222430] hover:border-[#EF5350]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#EF5350]/10 overflow-hidden group" }, { "default": ($$result4) => renderTemplate` <div class="relative h-64 overflow-hidden"> <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80&auto=format&fit=crop" alt="Tintat" loading="lazy" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"> <div class="absolute inset-0 bg-gradient-to-t from-[#00000A]/90 via-[#00000A]/50 to-transparent"></div> </div> ${renderComponent($$result4, "CardHeader", $$CardHeader, { "class": "pb-4" }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "CardTitle", $$CardTitle, { "class": "text-[#FCFEFA] text-xl font-light mb-2" }, { "default": ($$result6) => renderTemplate`Tintat` })} ${renderComponent($$result5, "CardDescription", $$CardDescription, { "class": "text-[#4D5466] text-sm font-light" }, { "default": ($$result6) => renderTemplate`
Tintat complet amb productes de qualitat
								professional
` })} ` })} ${renderComponent($$result4, "CardContent", $$CardContent, {}, { "default": ($$result5) => renderTemplate` <p class="text-3xl font-light text-[#EF5350] mb-1">
50€
</p> <p class="text-xs text-[#4D5466] font-light uppercase tracking-wider">
90 minuts
</p> ` })} ` })} ` })} ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "client:load": true, "direction": "scale", "delay": 300, "client:component-hydration": "load", "client:component-path": "C:/Users/theyo/Documents/Automat/peluqueria/src/components/ScrollAnimation", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Card", $$Card, { "class": "bg-[#12111F]/50 backdrop-blur-xl border-[#222430] hover:border-[#EF5350]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#EF5350]/10 overflow-hidden group" }, { "default": ($$result4) => renderTemplate` <div class="relative h-64 overflow-hidden"> <img src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80&auto=format&fit=crop" alt="Mechas" loading="lazy" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"> <div class="absolute inset-0 bg-gradient-to-t from-[#00000A]/90 via-[#00000A]/50 to-transparent"></div> </div> ${renderComponent($$result4, "CardHeader", $$CardHeader, { "class": "pb-4" }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "CardTitle", $$CardTitle, { "class": "text-[#FCFEFA] text-xl font-light mb-2" }, { "default": ($$result6) => renderTemplate`Mechas` })} ${renderComponent($$result5, "CardDescription", $$CardDescription, { "class": "text-[#4D5466] text-sm font-light" }, { "default": ($$result6) => renderTemplate`
Meches modernes per donar profunditat i
								brillantor
` })} ` })} ${renderComponent($$result4, "CardContent", $$CardContent, {}, { "default": ($$result5) => renderTemplate` <p class="text-3xl font-light text-[#EF5350] mb-1">
65€
</p> <p class="text-xs text-[#4D5466] font-light uppercase tracking-wider">
120 minuts
</p> ` })} ` })} ` })} ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "client:load": true, "direction": "scale", "delay": 400, "client:component-hydration": "load", "client:component-path": "C:/Users/theyo/Documents/Automat/peluqueria/src/components/ScrollAnimation", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Card", $$Card, { "class": "bg-[#12111F]/50 backdrop-blur-xl border-[#222430] hover:border-[#EF5350]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#EF5350]/10 overflow-hidden group" }, { "default": ($$result4) => renderTemplate` <div class="relative h-64 overflow-hidden"> <img src="https://images.unsplash.com/photo-1492106087820-3f1b686c5d53?w=800&q=80&auto=format&fit=crop" alt="Perrucat" loading="lazy" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"> <div class="absolute inset-0 bg-gradient-to-t from-[#00000A]/90 via-[#00000A]/50 to-transparent"></div> </div> ${renderComponent($$result4, "CardHeader", $$CardHeader, { "class": "pb-4" }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "CardTitle", $$CardTitle, { "class": "text-[#FCFEFA] text-xl font-light mb-2" }, { "default": ($$result6) => renderTemplate`Perrucat` })} ${renderComponent($$result5, "CardDescription", $$CardDescription, { "class": "text-[#4D5466] text-sm font-light" }, { "default": ($$result6) => renderTemplate`
Perrucat professional per a qualsevol ocasió
								especial
` })} ` })} ${renderComponent($$result4, "CardContent", $$CardContent, {}, { "default": ($$result5) => renderTemplate` <p class="text-3xl font-light text-[#EF5350] mb-1">
12€
</p> <p class="text-xs text-[#4D5466] font-light uppercase tracking-wider">
30 minuts
</p> ` })} ` })} ` })} ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "client:load": true, "direction": "rotate", "delay": 500, "client:component-hydration": "load", "client:component-path": "C:/Users/theyo/Documents/Automat/peluqueria/src/components/ScrollAnimation", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Card", $$Card, { "class": "bg-[#12111F]/50 backdrop-blur-xl border-2 border-[#EF5350]/20 hover:border-[#EF5350]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-[#EF5350]/20 overflow-hidden group" }, { "default": ($$result4) => renderTemplate` <div class="absolute top-4 right-4"> ${renderComponent($$result4, "Badge", $$Badge, { "variant": "default", "class": "bg-[#EF5350] text-[#FCFEFA] text-xs px-2 py-1" }, { "default": ($$result5) => renderTemplate`
Especial
` })} </div> <div class="relative h-64 overflow-hidden"> <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80&auto=format&fit=crop" alt="Paquet complet" loading="lazy" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"> <div class="absolute inset-0 bg-gradient-to-t from-[#00000A]/90 via-[#00000A]/50 to-transparent"></div> </div> ${renderComponent($$result4, "CardHeader", $$CardHeader, { "class": "pb-4" }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "CardTitle", $$CardTitle, { "class": "text-[#FCFEFA] text-xl font-light mb-2" }, { "default": ($$result6) => renderTemplate`Paquet Complet` })} ${renderComponent($$result5, "CardDescription", $$CardDescription, { "class": "text-[#4D5466] text-sm font-light" }, { "default": ($$result6) => renderTemplate`
Tall, tintat i perrucat - El paquet complet de
								bellesa
` })} ` })} ${renderComponent($$result4, "CardContent", $$CardContent, {}, { "default": ($$result5) => renderTemplate` <p class="text-3xl font-light text-[#EF5350] mb-1">
90€
</p> <p class="text-xs text-[#4D5466] font-light uppercase tracking-wider">
180 minuts
</p> ` })} ` })} ` })} </div> </div> </section>  <section id="galeria" class="py-16 sm:py-24 md:py-32 bg-[#12111F] relative overflow-hidden"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "client:load": true, "direction": "fade", "client:component-hydration": "load", "client:component-path": "C:/Users/theyo/Documents/Automat/peluqueria/src/components/ScrollAnimation", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` <div class="text-center mb-12 sm:mb-16 md:mb-20"> ${renderComponent($$result3, "Badge", $$Badge, { "variant": "outline", "class": "mb-4 sm:mb-6 bg-[#00000A]/50 backdrop-blur-xl border-[#222430] text-[#4D5466] px-3 sm:px-4 py-1 sm:py-1.5 text-xs uppercase tracking-widest" }, { "default": ($$result4) => renderTemplate`
La Nostra Feina
` })} <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-[#FCFEFA] mb-4 sm:mb-6 tracking-tight px-2">
Galeria de Treballs
</h2> <p class="text-base sm:text-lg md:text-xl text-[#4D5466] max-w-2xl mx-auto font-light leading-relaxed px-4">
Descobreix alguns dels nostres treballs més recents
</p> </div> ` })} <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"> ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "client:load": true, "direction": "up", "delay": 0, "client:component-hydration": "load", "client:component-path": "C:/Users/theyo/Documents/Automat/peluqueria/src/components/ScrollAnimation", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` <div class="relative group overflow-hidden rounded-2xl aspect-[3/4] bg-[#222430]"> <img src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80&auto=format&fit=crop" alt="Tall modern" loading="lazy" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"> <div class="absolute inset-0 bg-gradient-to-t from-[#00000A]/90 via-[#00000A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> <div class="absolute bottom-0 left-0 right-0 p-6 text-[#FCFEFA] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"> <h3 class="font-light text-xl mb-1">Tall Modern</h3> <p class="text-sm text-[#4D5466] font-light">
Estil contemporani
</p> </div> </div> ` })} ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "client:load": true, "direction": "up", "delay": 100, "client:component-hydration": "load", "client:component-path": "C:/Users/theyo/Documents/Automat/peluqueria/src/components/ScrollAnimation", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` <div class="relative group overflow-hidden rounded-2xl aspect-[3/4] bg-[#222430]"> <img src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80&auto=format&fit=crop" alt="Tintat vibrant" loading="lazy" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"> <div class="absolute inset-0 bg-gradient-to-t from-[#00000A]/90 via-[#00000A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> <div class="absolute bottom-0 left-0 right-0 p-6 text-[#FCFEFA] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"> <h3 class="font-light text-xl mb-1">
Tintat Vibrant
</h3> <p class="text-sm text-[#4D5466] font-light">
Colors intensos
</p> </div> </div> ` })} ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "client:load": true, "direction": "up", "delay": 200, "client:component-hydration": "load", "client:component-path": "C:/Users/theyo/Documents/Automat/peluqueria/src/components/ScrollAnimation", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` <div class="relative group overflow-hidden rounded-2xl aspect-[3/4] bg-[#222430]"> <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80&auto=format&fit=crop" alt="Mechas naturals" loading="lazy" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"> <div class="absolute inset-0 bg-gradient-to-t from-[#00000A]/90 via-[#00000A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> <div class="absolute bottom-0 left-0 right-0 p-6 text-[#FCFEFA] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"> <h3 class="font-light text-xl mb-1">
Mechas Naturals
</h3> <p class="text-sm text-[#4D5466] font-light">
Efecte natural
</p> </div> </div> ` })} ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "client:load": true, "direction": "up", "delay": 300, "client:component-hydration": "load", "client:component-path": "C:/Users/theyo/Documents/Automat/peluqueria/src/components/ScrollAnimation", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` <div class="relative group overflow-hidden rounded-2xl aspect-[3/4] bg-[#222430]"> <img src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80&auto=format&fit=crop" alt="Perrucat elegant" loading="lazy" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"> <div class="absolute inset-0 bg-gradient-to-t from-[#00000A]/90 via-[#00000A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> <div class="absolute bottom-0 left-0 right-0 p-6 text-[#FCFEFA] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"> <h3 class="font-light text-xl mb-1">
Perrucat Elegant
</h3> <p class="text-sm text-[#4D5466] font-light">
Per a esdeveniments
</p> </div> </div> ` })} ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "client:load": true, "direction": "up", "delay": 400, "client:component-hydration": "load", "client:component-path": "C:/Users/theyo/Documents/Automat/peluqueria/src/components/ScrollAnimation", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` <div class="relative group overflow-hidden rounded-2xl aspect-[3/4] bg-[#222430]"> <img src="https://images.unsplash.com/photo-1492106087820-3f1b686c5d53?w=800&q=80&auto=format&fit=crop" alt="Estil clàssic" loading="lazy" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"> <div class="absolute inset-0 bg-gradient-to-t from-[#00000A]/90 via-[#00000A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> <div class="absolute bottom-0 left-0 right-0 p-6 text-[#FCFEFA] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"> <h3 class="font-light text-xl mb-1">
Estil Clàssic
</h3> <p class="text-sm text-[#4D5466] font-light">
Timeless beauty
</p> </div> </div> ` })} ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "client:load": true, "direction": "up", "delay": 500, "client:component-hydration": "load", "client:component-path": "C:/Users/theyo/Documents/Automat/peluqueria/src/components/ScrollAnimation", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` <div class="relative group overflow-hidden rounded-2xl aspect-[3/4] bg-[#222430]"> <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80&auto=format&fit=crop" alt="Tall masculí" loading="lazy" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"> <div class="absolute inset-0 bg-gradient-to-t from-[#00000A]/90 via-[#00000A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> <div class="absolute bottom-0 left-0 right-0 p-6 text-[#FCFEFA] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"> <h3 class="font-light text-xl mb-1">
Tall Masculí
</h3> <p class="text-sm text-[#4D5466] font-light">
Estil modern
</p> </div> </div> ` })} </div> </div> </section>  <section id="sobre-nosaltres" class="py-16 sm:py-24 md:py-32 bg-[#00000A] relative overflow-hidden"> <div class="absolute inset-0"> <div class="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#EF5350]/3 rounded-full blur-3xl"></div> <div class="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#EF5350]/3 rounded-full blur-3xl"></div> </div> <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center"> ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "client:load": true, "direction": "right", "delay": 0, "client:component-hydration": "load", "client:component-path": "C:/Users/theyo/Documents/Automat/peluqueria/src/components/ScrollAnimation", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` <div class="relative"> <div class="relative rounded-3xl overflow-hidden shadow-2xl"> <img src="https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800&q=80&auto=format&fit=crop" alt="Saló de perruqueria" loading="lazy" class="w-full h-full object-cover aspect-square"> <div class="absolute inset-0 bg-gradient-to-t from-[#00000A]/60 to-transparent"></div> </div> <div class="absolute -bottom-8 -right-8 w-40 h-40 bg-[#EF5350]/10 rounded-full blur-3xl"></div> </div> ` })} ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "client:load": true, "direction": "left", "delay": 100, "client:component-hydration": "load", "client:component-path": "C:/Users/theyo/Documents/Automat/peluqueria/src/components/ScrollAnimation", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` <div> ${renderComponent($$result3, "Badge", $$Badge, { "variant": "outline", "class": "mb-6 bg-[#12111F]/50 backdrop-blur-xl border-[#222430] text-[#4D5466] px-4 py-1.5 text-xs uppercase tracking-widest" }, { "default": ($$result4) => renderTemplate`
Sobre Nosaltres
` })} <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-[#FCFEFA] mb-6 sm:mb-8 tracking-tight">
Més de 10 anys d'experiència
</h2> <p class="text-base sm:text-lg text-[#4D5466] mb-4 sm:mb-6 leading-relaxed font-light">
A StyleCut, creiem que cada persona mereix sentir-se
							especial. Amb més d'una dècada d'experiència en el
							sector, el nostre equip d'estilistes professionals
							està dedicat a proporcionar serveis de la més alta
							qualitat.
</p> <p class="text-base sm:text-lg text-[#4D5466] mb-8 sm:mb-10 leading-relaxed font-light">
Utilitzem només productes de primera qualitat i
							seguim les últimes tendències de moda per
							assegurar-nos que surtis del nostre saló amb
							confiança i un estil únic.
</p> <div class="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6"> <div class="text-center p-4 sm:p-5 md:p-6 bg-[#12111F]/50 backdrop-blur-xl rounded-xl border border-[#222430]"> <p class="text-2xl sm:text-3xl md:text-4xl font-light text-[#EF5350] mb-1 sm:mb-2">
10+
</p> <p class="text-xs text-[#4D5466] font-light uppercase tracking-wider">
Anys
</p> </div> <div class="text-center p-4 sm:p-5 md:p-6 bg-[#12111F]/50 backdrop-blur-xl rounded-xl border border-[#222430]"> <p class="text-2xl sm:text-3xl md:text-4xl font-light text-[#EF5350] mb-1 sm:mb-2">
5000+
</p> <p class="text-xs text-[#4D5466] font-light uppercase tracking-wider">
Clients
</p> </div> <div class="text-center p-4 sm:p-5 md:p-6 bg-[#12111F]/50 backdrop-blur-xl rounded-xl border border-[#222430]"> <p class="text-2xl sm:text-3xl md:text-4xl font-light text-[#EF5350] mb-1 sm:mb-2">
100%
</p> <p class="text-xs text-[#4D5466] font-light uppercase tracking-wider">
Satisfacció
</p> </div> </div> </div> ` })} </div> </div> </section>  <section class="py-16 sm:py-24 md:py-32 bg-[#12111F] relative overflow-hidden"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "client:load": true, "direction": "fade", "client:component-hydration": "load", "client:component-path": "C:/Users/theyo/Documents/Automat/peluqueria/src/components/ScrollAnimation", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` <div class="text-center mb-12 sm:mb-16 md:mb-20"> ${renderComponent($$result3, "Badge", $$Badge, { "variant": "outline", "class": "mb-4 sm:mb-6 bg-[#00000A]/50 backdrop-blur-xl border-[#222430] text-[#4D5466] px-3 sm:px-4 py-1 sm:py-1.5 text-xs uppercase tracking-widest" }, { "default": ($$result4) => renderTemplate`
Testimonials
` })} <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-[#FCFEFA] mb-4 sm:mb-6 tracking-tight px-2">
El que diuen els nostres clients
</h2> </div> ` })} <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"> ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "client:load": true, "direction": "up", "delay": 0, "client:component-hydration": "load", "client:component-path": "C:/Users/theyo/Documents/Automat/peluqueria/src/components/ScrollAnimation", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Card", $$Card, { "class": "bg-[#12111F]/50 backdrop-blur-xl border-[#222430] hover:border-[#EF5350]/30 transition-all duration-300" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CardContent", $$CardContent, { "class": "pt-6" }, { "default": ($$result5) => renderTemplate` <div class="flex items-center gap-1 mb-6"> ${[...Array(5)].map(() => renderTemplate`<svg class="w-5 h-5 text-[#EF5350]" fill="currentColor" viewBox="0 0 20 20"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path> </svg>`)} </div> <p class="text-[#4D5466] mb-6 leading-relaxed font-light">
"El millor servei que he rebut mai! L'estilista
								va entendre perfectament el que volia i el
								resultat va superar les meves expectatives."
</p> ${renderComponent($$result5, "Separator", $$Separator, { "class": "my-6 bg-[#222430]" })} <div class="flex items-center gap-3"> <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#EF5350] to-[#EF5350]/60"></div> <div> <p class="font-light text-[#FCFEFA]">
Maria García
</p> <p class="text-xs text-[#4D5466] font-light">
Clienta habitual
</p> </div> </div> ` })} ` })} ` })} ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "client:load": true, "direction": "up", "delay": 100, "client:component-hydration": "load", "client:component-path": "C:/Users/theyo/Documents/Automat/peluqueria/src/components/ScrollAnimation", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Card", $$Card, { "class": "bg-[#12111F]/50 backdrop-blur-xl border-[#222430] hover:border-[#EF5350]/30 transition-all duration-300" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CardContent", $$CardContent, { "class": "pt-6" }, { "default": ($$result5) => renderTemplate` <div class="flex items-center gap-1 mb-6"> ${[...Array(5)].map(() => renderTemplate`<svg class="w-5 h-5 text-[#EF5350]" fill="currentColor" viewBox="0 0 20 20"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path> </svg>`)} </div> <p class="text-[#4D5466] mb-6 leading-relaxed font-light">
"Ambient acollidor, personal professional i
								resultats excel·lents. Ja he tornat diverses
								vegades i sempre surto contenta."
</p> ${renderComponent($$result5, "Separator", $$Separator, { "class": "my-6 bg-[#222430]" })} <div class="flex items-center gap-3"> <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#EF5350] to-[#EF5350]/60"></div> <div> <p class="font-light text-[#FCFEFA]">
Anna Martínez
</p> <p class="text-xs text-[#4D5466] font-light">
Nova clienta
</p> </div> </div> ` })} ` })} ` })} ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "client:load": true, "direction": "up", "delay": 200, "client:component-hydration": "load", "client:component-path": "C:/Users/theyo/Documents/Automat/peluqueria/src/components/ScrollAnimation", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Card", $$Card, { "class": "bg-[#12111F]/50 backdrop-blur-xl border-[#222430] hover:border-[#EF5350]/30 transition-all duration-300" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CardContent", $$CardContent, { "class": "pt-6" }, { "default": ($$result5) => renderTemplate` <div class="flex items-center gap-1 mb-6"> ${[...Array(5)].map(() => renderTemplate`<svg class="w-5 h-5 text-[#EF5350]" fill="currentColor" viewBox="0 0 20 20"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path> </svg>`)} </div> <p class="text-[#4D5466] mb-6 leading-relaxed font-light">
"Professionalitat i atenció al detall. El meu
								tall sempre queda perfecte i el personal és molt
								amable i atent."
</p> ${renderComponent($$result5, "Separator", $$Separator, { "class": "my-6 bg-[#222430]" })} <div class="flex items-center gap-3"> <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#EF5350] to-[#EF5350]/60"></div> <div> <p class="font-light text-[#FCFEFA]">
Laura Sánchez
</p> <p class="text-xs text-[#4D5466] font-light">
Clienta des de 2020
</p> </div> </div> ` })} ` })} ` })} </div> </div> </section>  <section id="contacte" class="py-16 sm:py-24 md:py-32 bg-[#00000A] relative overflow-hidden"> <div class="absolute inset-0"> <div class="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#EF5350]/5 rounded-full blur-3xl"></div> </div> <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "client:load": true, "direction": "fade", "client:component-hydration": "load", "client:component-path": "C:/Users/theyo/Documents/Automat/peluqueria/src/components/ScrollAnimation", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` <div class="text-center mb-12 sm:mb-16 md:mb-20"> ${renderComponent($$result3, "Badge", $$Badge, { "variant": "outline", "class": "mb-4 sm:mb-6 bg-[#12111F]/50 backdrop-blur-xl border-[#222430] text-[#4D5466] px-3 sm:px-4 py-1 sm:py-1.5 text-xs uppercase tracking-widest" }, { "default": ($$result4) => renderTemplate`
Contacte
` })} <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-[#FCFEFA] mb-4 sm:mb-6 tracking-tight px-2">
Visita'ns Avui
</h2> <p class="text-base sm:text-lg md:text-xl text-[#4D5466] max-w-2xl mx-auto font-light leading-relaxed px-4">
Estem oberts de dilluns a dissabte. Reserva la teva cita
						online o truca'ns directament.
</p> </div> ` })} <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto"> ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "client:load": true, "direction": "right", "delay": 0, "client:component-hydration": "load", "client:component-path": "C:/Users/theyo/Documents/Automat/peluqueria/src/components/ScrollAnimation", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Card", $$Card, { "class": "bg-[#12111F]/50 backdrop-blur-xl border-[#222430] overflow-hidden" }, { "default": ($$result4) => renderTemplate` <div class="relative h-48"> <img src="https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800&q=80&auto=format&fit=crop" alt="Interior del saló" loading="lazy" class="w-full h-full object-cover"> <div class="absolute inset-0 bg-gradient-to-t from-[#00000A]/80 to-transparent"></div> </div> ${renderComponent($$result4, "CardHeader", $$CardHeader, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "CardTitle", $$CardTitle, { "class": "text-[#FCFEFA] text-xl font-light" }, { "default": ($$result6) => renderTemplate`Informació de Contacte` })} ` })} ${renderComponent($$result4, "CardContent", $$CardContent, { "class": "space-y-5" }, { "default": ($$result5) => renderTemplate` <div class="flex items-start gap-4"> <div class="w-12 h-12 bg-[#222430] rounded-lg flex items-center justify-center flex-shrink-0"> <svg class="w-5 h-5 text-[#EF5350]" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> </div> <div> <p class="font-light text-[#FCFEFA] mb-1">
Adreça
</p> <p class="text-sm text-[#4D5466] font-light">
Carrer de la Moda, 123<br>08001
										Barcelona
</p> </div> </div> <div class="flex items-start gap-4"> <div class="w-12 h-12 bg-[#222430] rounded-lg flex items-center justify-center flex-shrink-0"> <svg class="w-5 h-5 text-[#EF5350]" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> </div> <div> <p class="font-light text-[#FCFEFA] mb-1">
Telèfon
</p> <p class="text-sm text-[#4D5466] font-light">
+34 933 123 456
</p> </div> </div> <div class="flex items-start gap-4"> <div class="w-12 h-12 bg-[#222430] rounded-lg flex items-center justify-center flex-shrink-0"> <svg class="w-5 h-5 text-[#EF5350]" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> </div> <div> <p class="font-light text-[#FCFEFA] mb-1">
Email
</p> <p class="text-sm text-[#4D5466] font-light">
info@stylecut.com
</p> </div> </div> <div class="flex items-start gap-4"> <div class="w-12 h-12 bg-[#222430] rounded-lg flex items-center justify-center flex-shrink-0"> <svg class="w-5 h-5 text-[#EF5350]" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <div> <p class="font-light text-[#FCFEFA] mb-1">
Horari
</p> <p class="text-sm text-[#4D5466] font-light">
Dilluns - Dissabte: 9:00 - 20:00<br>Diumenge: Tancat
</p> </div> </div> ` })} ` })} ` })} ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "client:load": true, "direction": "left", "delay": 100, "client:component-hydration": "load", "client:component-path": "C:/Users/theyo/Documents/Automat/peluqueria/src/components/ScrollAnimation", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Card", $$Card, { "class": "bg-[#12111F]/50 backdrop-blur-xl border-[#222430] overflow-hidden" }, { "default": ($$result4) => renderTemplate` <div class="relative h-48"> <img src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80&auto=format&fit=crop" alt="Reserva cita" loading="lazy" class="w-full h-full object-cover opacity-20"> <div class="absolute inset-0 bg-gradient-to-br from-[#EF5350]/10 to-transparent"></div> </div> ${renderComponent($$result4, "CardHeader", $$CardHeader, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "CardTitle", $$CardTitle, { "class": "text-[#FCFEFA] text-xl font-light" }, { "default": ($$result6) => renderTemplate`Reserva la teva cita` })} ${renderComponent($$result5, "CardDescription", $$CardDescription, { "class": "text-[#4D5466] text-sm font-light" }, { "default": ($$result6) => renderTemplate`
Reserva online de forma ràpida i senzilla
` })} ` })} ${renderComponent($$result4, "CardContent", $$CardContent, {}, { "default": ($$result5) => renderTemplate` <p class="text-[#4D5466] mb-8 leading-relaxed font-light">
Selecciona el dia i l'hora que millor et vagi i
								completa el formulari. Et confirmarem la teva
								cita immediatament.
</p> ${renderComponent($$result5, "ButtonLink", $$ButtonLink, { "href": "/reservar", "size": "lg", "class": "w-full bg-[#EF5350] hover:bg-[#EF5350]/90 text-[#FCFEFA] border-0 shadow-lg shadow-[#EF5350]/20" }, { "default": ($$result6) => renderTemplate`
Reservar Ara
` })} ` })} ` })} ` })} </div> </div> </section>  <footer class="bg-[#00000A] border-t border-[#222430] py-12 sm:py-16 relative overflow-hidden"> <div class="absolute inset-0 opacity-5"> <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, #FCFEFA 1px, transparent 0); background-size: 60px 60px;"></div> </div> <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12"> <div> <div class="flex items-center space-x-2 mb-6"> <div class="w-10 h-10 bg-[#EF5350] rounded-lg flex items-center justify-center"> <svg class="w-6 h-6 text-[#FCFEFA]" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"></path> </svg> </div> <span class="text-xl font-light text-[#FCFEFA]">StyleCut</span> </div> <p class="text-sm text-[#4D5466] font-light">
La teva perruqueria de confiança des de 2014
</p> </div> <div> <h3 class="font-light text-[#FCFEFA] mb-4 uppercase tracking-wider text-sm">
Enllaços Ràpids
</h3> <ul class="space-y-2 text-sm"> <li> <a href="#inici" class="text-[#4D5466] hover:text-[#FCFEFA] transition-colors font-light">Inici</a> </li> <li> <a href="#serveis" class="text-[#4D5466] hover:text-[#FCFEFA] transition-colors font-light">Serveis</a> </li> <li> <a href="#galeria" class="text-[#4D5466] hover:text-[#FCFEFA] transition-colors font-light">Galeria</a> </li> <li> <a href="#sobre-nosaltres" class="text-[#4D5466] hover:text-[#FCFEFA] transition-colors font-light">Sobre Nosaltres</a> </li> </ul> </div> <div> <h3 class="font-light text-[#FCFEFA] mb-4 uppercase tracking-wider text-sm">
Serveis
</h3> <ul class="space-y-2 text-sm"> <li> <a href="/reservar" class="text-[#4D5466] hover:text-[#FCFEFA] transition-colors font-light">Reserva Online</a> </li> <li> <a href="#serveis" class="text-[#4D5466] hover:text-[#FCFEFA] transition-colors font-light">Preus</a> </li> <li> <a href="#contacte" class="text-[#4D5466] hover:text-[#FCFEFA] transition-colors font-light">Contacte</a> </li> </ul> </div> <div> <h3 class="font-light text-[#FCFEFA] mb-4 uppercase tracking-wider text-sm">
Segueix-nos
</h3> <div class="flex gap-3"> <a href="#" class="w-10 h-10 bg-[#12111F] border border-[#222430] rounded-lg flex items-center justify-center hover:bg-[#222430] hover:border-[#EF5350]/50 transition-all duration-300"> <svg class="w-5 h-5 text-[#4D5466] hover:text-[#FCFEFA]" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg> </a> <a href="#" class="w-10 h-10 bg-[#12111F] border border-[#222430] rounded-lg flex items-center justify-center hover:bg-[#222430] hover:border-[#EF5350]/50 transition-all duration-300"> <svg class="w-5 h-5 text-[#4D5466] hover:text-[#FCFEFA]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg> </a> </div> </div> </div> ${renderComponent($$result2, "Separator", $$Separator, { "class": "my-8 sm:my-12 bg-[#222430]" })} <div class="text-center text-xs sm:text-sm text-[#4D5466] font-light"> <p>&copy; 2024 StyleCut. Tots els drets reservats.</p> </div> </div> </footer> ` })}`;
}, "C:/Users/theyo/Documents/Automat/peluqueria/src/pages/index.astro", void 0);

const $$file = "C:/Users/theyo/Documents/Automat/peluqueria/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
