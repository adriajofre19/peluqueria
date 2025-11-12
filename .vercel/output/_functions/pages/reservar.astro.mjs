import { e as createComponent, k as renderComponent, r as renderTemplate } from '../chunks/astro/server_BRUHusPG.mjs';
import { c as cn, B as Button, $ as $$Layout, N as Navbar } from '../chunks/Navbar_DiBtwL9p.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import React, { forwardRef, useState, useRef, useEffect } from 'react';
import { startOfMonth, endOfMonth, eachDayOfInterval, format, isSameMonth, isSameDay, isToday, subMonths, addMonths } from 'date-fns';
import { ca } from 'date-fns/locale';
export { renderers } from '../renderers.mjs';

const Input = forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-10 w-full rounded-lg border border-[hsl(var(--input))] bg-[hsl(var(--background))] px-4 py-2 text-sm text-[hsl(var(--foreground))] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[hsl(var(--muted-foreground))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF5350] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background))] transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";

const Label = forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "label",
      {
        ref,
        className: cn(
          "text-sm font-medium leading-none text-[hsl(var(--foreground))] peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
          className
        ),
        ...props
      }
    );
  }
);
Label.displayName = "Label";

const Card = forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn(
        "rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] shadow-sm",
        className
      ),
      ...props
    }
  )
);
Card.displayName = "Card";
const CardHeader = forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn("flex flex-col space-y-1.5 p-6", className),
      ...props
    }
  )
);
CardHeader.displayName = "CardHeader";
const CardTitle = forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    "h3",
    {
      ref,
      className: cn(
        "text-2xl font-semibold leading-none tracking-tight",
        className
      ),
      ...props
    }
  )
);
CardTitle.displayName = "CardTitle";
const CardDescription = forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    "p",
    {
      ref,
      className: cn("text-sm text-[hsl(var(--muted-foreground))]", className),
      ...props
    }
  )
);
CardDescription.displayName = "CardDescription";
const CardContent = forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("p-6 pt-0", className), ...props })
);
CardContent.displayName = "CardContent";
const CardFooter = forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn("flex items-center p-6 pt-0", className),
      ...props
    }
  )
);
CardFooter.displayName = "CardFooter";

const Textarea = forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[80px] w-full rounded-lg border border-[hsl(var(--input))] bg-[hsl(var(--background))] px-4 py-3 text-sm text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF5350] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background))] transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";

function Calendar({ selected, onSelect, minDate = /* @__PURE__ */ new Date(), className }) {
  const [currentMonth, setCurrentMonth] = useState(selected || /* @__PURE__ */ new Date());
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });
  const firstDayOfWeek = monthStart.getDay();
  const daysToAdd = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;
  const previousDays = Array.from({ length: daysToAdd }, (_, i) => {
    const date = new Date(monthStart);
    date.setDate(date.getDate() - daysToAdd + i);
    return date;
  });
  const allDays = [...previousDays, ...daysInMonth];
  const isDateDisabled = (date) => {
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };
  const handlePreviousMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };
  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };
  return /* @__PURE__ */ jsxs("div", { className: cn("rounded-lg p-6", className), children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-8", children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: "ghost",
          size: "icon",
          onClick: handlePreviousMonth,
          className: "h-10 w-10 text-[#4D5466] hover:text-[#FCFEFA] hover:bg-[#12111F] rounded-lg",
          children: /* @__PURE__ */ jsx("svg", { className: "h-5 w-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) })
        }
      ),
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-light text-[#FCFEFA] capitalize tracking-wide", children: format(currentMonth, "MMMM yyyy", { locale: ca }) }),
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: "ghost",
          size: "icon",
          onClick: handleNextMonth,
          className: "h-10 w-10 text-[#4D5466] hover:text-[#FCFEFA] hover:bg-[#12111F] rounded-lg",
          children: /* @__PURE__ */ jsx("svg", { className: "h-5 w-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) })
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-7 gap-2 mb-4", children: ["Dl", "Dt", "Dc", "Dj", "Dv", "Ds", "Dg"].map((day, i) => /* @__PURE__ */ jsx(
      "div",
      {
        className: "h-10 flex items-center justify-center text-xs font-medium text-[#4D5466] uppercase tracking-wider",
        children: day
      },
      i
    )) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-7 gap-2", children: allDays.map((day, index) => {
      const isCurrentMonth = isSameMonth(day, currentMonth);
      const isSelected = selected && isSameDay(day, selected);
      const isTodayDate = isToday(day);
      const disabled = isDateDisabled(day);
      return /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => !disabled && onSelect?.(day),
          disabled,
          className: cn(
            "h-14 rounded-lg text-sm font-medium transition-all duration-200",
            !isCurrentMonth && "text-[#4D5466]/30",
            isCurrentMonth && !isSelected && "text-[#FCFEFA]",
            isSelected && "bg-[#EF5350] text-[#FCFEFA] font-semibold shadow-lg shadow-[#EF5350]/30",
            !isSelected && isCurrentMonth && !disabled && "hover:bg-[#12111F] hover:text-[#FCFEFA]",
            isTodayDate && !isSelected && "ring-2 ring-[#EF5350]/50",
            disabled && "opacity-20 cursor-not-allowed"
          ),
          children: format(day, "d")
        },
        index
      );
    }) })
  ] });
}

function Dropdown({ items, value, onValueChange, placeholder = "Selecciona...", className }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);
  const selectedItem = items.find((item) => item.value === value);
  return /* @__PURE__ */ jsxs("div", { ref: dropdownRef, className: cn("relative", className), children: [
    /* @__PURE__ */ jsxs(
      Button,
      {
        variant: "outline",
        onClick: () => setOpen(!open),
        className: "w-full justify-between bg-[#12111F] border-[#222430] text-[#FCFEFA] hover:bg-[#222430] hover:border-[#EF5350]/50 h-12",
        children: [
          /* @__PURE__ */ jsx("span", { className: "text-left font-light", children: selectedItem ? selectedItem.label : placeholder }),
          /* @__PURE__ */ jsx(
            "svg",
            {
              className: cn("ml-2 h-4 w-4 transition-transform text-[#4D5466]", open && "rotate-180"),
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" })
            }
          )
        ]
      }
    ),
    open && /* @__PURE__ */ jsx("div", { className: "absolute z-50 mt-2 w-full rounded-lg border border-[#222430] bg-[#12111F] shadow-2xl overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "p-2", children: items.map((item) => /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => {
          onValueChange?.(item.value);
          setOpen(false);
        },
        disabled: item.disabled,
        className: cn(
          "w-full rounded-md px-4 py-3 text-left text-sm transition-all duration-200 text-[#FCFEFA] font-light",
          "hover:bg-[#222430]",
          value === item.value && "bg-[#EF5350] text-[#FCFEFA] font-medium",
          item.disabled && "opacity-30 cursor-not-allowed"
        ),
        children: item.label
      },
      item.value
    )) }) })
  ] });
}

const Separator = React.forwardRef(
  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      role: decorative ? "none" : "separator",
      "aria-orientation": orientation,
      className: cn(
        "shrink-0 bg-[hsl(var(--border))]",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      ),
      ...props
    }
  )
);
Separator.displayName = "Separator";

const TIME_SLOTS = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30"
];
function AppointmentCalendar() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedService, setSelectedService] = useState(0);
  const [services, setServices] = useState([]);
  const [bookedSlots, setBookedSlots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState(null);
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [notes, setNotes] = useState("");
  useEffect(() => {
    fetch("/api/services").then((res) => res.json()).then((data) => {
      setServices(data);
      if (data.length > 0) {
        setSelectedService(data[0].id);
      }
    }).catch((err) => console.error("Error carregant serveis:", err));
  }, []);
  useEffect(() => {
    if (selectedDate) {
      const dateStr = format(selectedDate, "yyyy-MM-dd");
      setLoading(true);
      fetch(`/api/appointments?date=${dateStr}`).then((res) => res.json()).then((appointments) => {
        const booked = appointments.map((apt) => {
          const date = new Date(apt.date);
          const hours = date.getHours().toString().padStart(2, "0");
          const minutes = date.getMinutes().toString().padStart(2, "0");
          return `${hours}:${minutes}`;
        });
        setBookedSlots(booked);
        setLoading(false);
      }).catch((err) => {
        console.error("Error carregant cites:", err);
        setLoading(false);
      });
    } else {
      setBookedSlots([]);
      setSelectedTime("");
    }
  }, [selectedDate]);
  const handleDateChange = (date) => {
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    if (date < today) {
      setMessage({ type: "error", text: "No pots seleccionar una data passada" });
      return;
    }
    setSelectedDate(date);
    setSelectedTime("");
    setMessage(null);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime || !selectedService || !clientName || !clientPhone || !clientEmail) {
      setMessage({ type: "error", text: "Si us plau, completa tots els camps obligatoris (nom, telèfon i correu)" });
      return;
    }
    setSubmitting(true);
    setMessage(null);
    const [hours, minutes] = selectedTime.split(":");
    const appointmentDate = new Date(selectedDate);
    appointmentDate.setHours(parseInt(hours), parseInt(minutes), 0, 0);
    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          date: appointmentDate.toISOString(),
          clientName,
          clientEmail,
          clientPhone,
          serviceId: selectedService,
          notes: notes || null
        })
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Error creant la cita");
      }
      setMessage({ type: "success", text: "Cita creada amb èxit! T'enviarem un recordatori." });
      setClientName("");
      setClientEmail("");
      setClientPhone("");
      setNotes("");
      setSelectedTime("");
      setSelectedDate(null);
      if (selectedDate) {
        const dateStr = format(selectedDate, "yyyy-MM-dd");
        const res = await fetch(`/api/appointments?date=${dateStr}`);
        const appointments = await res.json();
        const booked = appointments.map((apt) => {
          const date = new Date(apt.date);
          const hours2 = date.getHours().toString().padStart(2, "0");
          const minutes2 = date.getMinutes().toString().padStart(2, "0");
          return `${hours2}:${minutes2}`;
        });
        setBookedSlots(booked);
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: error instanceof Error ? error.message : "Error creant la cita"
      });
    } finally {
      setSubmitting(false);
    }
  };
  const isTimeSlotAvailable = (time) => {
    if (!selectedDate) return false;
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    const selectedDateOnly = new Date(selectedDate);
    selectedDateOnly.setHours(0, 0, 0, 0);
    if (selectedDateOnly.getTime() === today.getTime()) {
      const [hours, minutes] = time.split(":").map(Number);
      const now = /* @__PURE__ */ new Date();
      const slotTime = /* @__PURE__ */ new Date();
      slotTime.setHours(hours, minutes, 0, 0);
      if (slotTime < now) {
        return false;
      }
    }
    return !bookedSlots.includes(time);
  };
  const serviceDropdownItems = services.map((service) => ({
    value: service.id,
    label: `${service.name}${service.price ? ` - ${service.price.toFixed(2)}€` : ""}`
  }));
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-[#00000A] py-8 sm:py-12 px-4 sm:px-6 pt-20 sm:pt-24 relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-5", children: /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0",
        style: {
          backgroundImage: "radial-gradient(circle at 2px 2px, #FCFEFA 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#EF5350]/10 to-transparent pointer-events-none" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-t from-[#EF5350]/5 to-transparent pointer-events-none" }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-8 sm:mb-12 md:mb-16", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-block mb-4 sm:mb-6", children: [
          /* @__PURE__ */ jsx("div", { className: "h-1 w-16 sm:w-20 bg-gradient-to-r from-transparent via-[#EF5350] to-transparent mx-auto mb-3 sm:mb-4" }),
          /* @__PURE__ */ jsxs("h1", { className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-[#FCFEFA] mb-3 sm:mb-4 tracking-tight px-2", children: [
            "Reserva la teva",
            /* @__PURE__ */ jsx("span", { className: "block font-bold bg-gradient-to-r from-[#EF5350] to-[#EF5350]/80 bg-clip-text text-transparent mt-1 sm:mt-2", children: "Cita" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "h-1 w-16 sm:w-20 bg-gradient-to-r from-transparent via-[#EF5350] to-transparent mx-auto" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-base sm:text-lg md:text-xl text-[#4D5466] font-light max-w-2xl mx-auto px-4", children: "Selecciona el dia i l'hora que millor et vagi per a la teva experiència de bellesa" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8", children: [
        /* @__PURE__ */ jsxs(Card, { className: "bg-[#222430]/80 backdrop-blur-xl border-[#222430] shadow-2xl", children: [
          /* @__PURE__ */ jsxs(CardHeader, { className: "pb-4", children: [
            /* @__PURE__ */ jsx(CardTitle, { className: "text-[#FCFEFA] text-2xl font-light", children: "Selecciona una data" }),
            /* @__PURE__ */ jsx(CardDescription, { className: "text-[#4D5466] text-sm", children: "Tria el dia que vols venir a tallar-te els cabells" })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(
            Calendar,
            {
              selected: selectedDate || void 0,
              onSelect: handleDateChange,
              className: "bg-transparent border-0"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "bg-[#222430]/80 backdrop-blur-xl border-[#222430] shadow-2xl", children: [
          /* @__PURE__ */ jsxs(CardHeader, { className: "pb-4", children: [
            /* @__PURE__ */ jsx(CardTitle, { className: "text-[#FCFEFA] text-2xl font-light", children: selectedDate ? `Completa la teva reserva` : "Completa la teva reserva" }),
            /* @__PURE__ */ jsx(CardDescription, { className: "text-[#4D5466] text-sm", children: selectedDate ? format(selectedDate, "EEEE, d 'de' MMMM", { locale: ca }) : "Primer selecciona una data al calendari" })
          ] }),
          /* @__PURE__ */ jsxs(CardContent, { children: [
            selectedDate && /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
                /* @__PURE__ */ jsx(Label, { className: "text-[#FCFEFA] mb-4 block text-sm font-medium uppercase tracking-wider", children: "Selecciona una hora" }),
                loading ? /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center py-12", children: [
                  /* @__PURE__ */ jsx("div", { className: "animate-spin rounded-full h-10 w-10 border-2 border-[#EF5350] border-t-transparent" }),
                  /* @__PURE__ */ jsx("span", { className: "ml-3 text-[#4D5466]", children: "Carregant hores disponibles..." })
                ] }) : /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2", children: TIME_SLOTS.map((time) => {
                  const available = isTimeSlotAvailable(time);
                  const isSelected = selectedTime === time;
                  return /* @__PURE__ */ jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => available && setSelectedTime(time),
                      disabled: !available,
                      className: cn(
                        "h-12 rounded-lg text-sm font-medium transition-all duration-200",
                        isSelected && "bg-[#EF5350] text-[#FCFEFA] shadow-lg shadow-[#EF5350]/30 scale-105",
                        !isSelected && available && "bg-[#12111F] border border-[#222430] text-[#FCFEFA] hover:border-[#EF5350]/50 hover:bg-[#222430]",
                        !available && "bg-[#12111F] border border-[#222430] text-[#4D5466] opacity-40 cursor-not-allowed"
                      ),
                      children: time
                    },
                    time
                  );
                }) })
              ] }),
              /* @__PURE__ */ jsx(Separator, { className: "my-8 bg-[#222430]" }),
              /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs(Label, { htmlFor: "service", className: "text-[#FCFEFA] text-sm font-medium uppercase tracking-wider", children: [
                    "Servei ",
                    /* @__PURE__ */ jsx("span", { className: "text-[#EF5350]", children: "*" })
                  ] }),
                  /* @__PURE__ */ jsx(
                    Dropdown,
                    {
                      items: serviceDropdownItems,
                      value: selectedService,
                      onValueChange: (value) => setSelectedService(Number(value)),
                      placeholder: "Selecciona un servei",
                      className: "w-full"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs(Label, { htmlFor: "clientName", className: "text-[#FCFEFA] text-sm font-medium uppercase tracking-wider", children: [
                    "Nom complet ",
                    /* @__PURE__ */ jsx("span", { className: "text-[#EF5350]", children: "*" })
                  ] }),
                  /* @__PURE__ */ jsx(
                    Input,
                    {
                      id: "clientName",
                      type: "text",
                      placeholder: "Introdueix el teu nom",
                      value: clientName,
                      onChange: (e) => setClientName(e.target.value),
                      className: "bg-[#12111F] border-[#222430] text-[#FCFEFA] placeholder:text-[#4D5466] focus:border-[#EF5350] focus:ring-[#EF5350]/20 h-12",
                      required: true
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs(Label, { htmlFor: "clientPhone", className: "text-[#FCFEFA] text-sm font-medium uppercase tracking-wider", children: [
                    "Telèfon ",
                    /* @__PURE__ */ jsx("span", { className: "text-[#EF5350]", children: "*" })
                  ] }),
                  /* @__PURE__ */ jsx(
                    Input,
                    {
                      id: "clientPhone",
                      type: "tel",
                      placeholder: "Introdueix el teu telèfon",
                      value: clientPhone,
                      onChange: (e) => setClientPhone(e.target.value),
                      className: "bg-[#12111F] border-[#222430] text-[#FCFEFA] placeholder:text-[#4D5466] focus:border-[#EF5350] focus:ring-[#EF5350]/20 h-12",
                      required: true
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs(Label, { htmlFor: "clientEmail", className: "text-[#FCFEFA] text-sm font-medium uppercase tracking-wider", children: [
                    "Correu electrònic ",
                    /* @__PURE__ */ jsx("span", { className: "text-[#EF5350]", children: "*" })
                  ] }),
                  /* @__PURE__ */ jsx(
                    Input,
                    {
                      id: "clientEmail",
                      type: "email",
                      placeholder: "exemple@correu.com",
                      value: clientEmail,
                      onChange: (e) => setClientEmail(e.target.value),
                      className: "bg-[#12111F] border-[#222430] text-[#FCFEFA] placeholder:text-[#4D5466] focus:border-[#EF5350] focus:ring-[#EF5350]/20 h-12",
                      required: true
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsx(Label, { htmlFor: "notes", className: "text-[#FCFEFA] text-sm font-medium uppercase tracking-wider", children: "Notes (opcional)" }),
                  /* @__PURE__ */ jsx(
                    Textarea,
                    {
                      id: "notes",
                      placeholder: "Alguna preferència o comentari...",
                      value: notes,
                      onChange: (e) => setNotes(e.target.value),
                      rows: 4,
                      className: "bg-[#12111F] border-[#222430] text-[#FCFEFA] placeholder:text-[#4D5466] focus:border-[#EF5350] focus:ring-[#EF5350]/20 resize-none"
                    }
                  )
                ] }),
                message && /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: cn(
                      "p-4 rounded-lg border backdrop-blur-sm",
                      message.type === "success" ? "bg-[#EF5350]/10 border-[#EF5350]/30 text-[#EF5350]" : "bg-[#EF5350]/10 border-[#EF5350]/30 text-[#EF5350]"
                    ),
                    children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                      message.type === "success" ? /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 flex-shrink-0", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }) }) : /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 flex-shrink-0", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm", children: message.text })
                    ] })
                  }
                ),
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    type: "submit",
                    disabled: submitting || !selectedTime,
                    className: "w-full bg-[#EF5350] hover:bg-[#EF5350]/90 text-[#FCFEFA] border-0 h-14 text-base font-medium shadow-lg shadow-[#EF5350]/30 hover:shadow-[#EF5350]/40 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
                    size: "lg",
                    children: submitting ? /* @__PURE__ */ jsxs(Fragment, { children: [
                      /* @__PURE__ */ jsxs("svg", { className: "animate-spin -ml-1 mr-3 h-5 w-5", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
                        /* @__PURE__ */ jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
                        /* @__PURE__ */ jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
                      ] }),
                      "Creant cita..."
                    ] }) : "Reservar cita"
                  }
                )
              ] })
            ] }),
            !selectedDate && /* @__PURE__ */ jsxs("div", { className: "text-center py-16", children: [
              /* @__PURE__ */ jsx("div", { className: "inline-block p-6 rounded-full bg-[#12111F] mb-6", children: /* @__PURE__ */ jsx("svg", { className: "h-12 w-12 text-[#4D5466]", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" }) }) }),
              /* @__PURE__ */ jsx("p", { className: "text-[#4D5466] text-lg font-light", children: "Si us plau, selecciona una data al calendari per continuar" })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
}

const $$Reservar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/theyo/Documents/Automat/peluqueria/src/components/Navbar", "client:component-export": "default" })} ${renderComponent($$result2, "AppointmentCalendar", AppointmentCalendar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/theyo/Documents/Automat/peluqueria/src/components/AppointmentCalendar", "client:component-export": "default" })} ` })}`;
}, "C:/Users/theyo/Documents/Automat/peluqueria/src/pages/reservar.astro", void 0);

const $$file = "C:/Users/theyo/Documents/Automat/peluqueria/src/pages/reservar.astro";
const $$url = "/reservar";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Reservar,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
