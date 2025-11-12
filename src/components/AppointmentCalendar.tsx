import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { ca } from 'date-fns/locale';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Label } from './ui/Label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card';
import { Textarea } from './ui/Textarea';
import { Calendar } from './ui/Calendar';
import { Dropdown } from './ui/Dropdown';
import { Separator } from './ui/Separator';
import { cn } from '../lib/utils';

interface Service {
  id: number;
  name: string;
  description: string | null;
  duration: number;
  price: number | null;
}

interface Appointment {
  id: number;
  date: string;
  serviceId: number;
}

const TIME_SLOTS = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
  '18:00', '18:30', '19:00', '19:30'
];

export default function AppointmentCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedService, setSelectedService] = useState<number>(0);
  const [services, setServices] = useState<Service[]>([]);
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Formulari
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [notes, setNotes] = useState('');

  // Carregar serveis
  useEffect(() => {
    fetch('/api/services')
      .then(res => res.json())
      .then(data => {
        setServices(data);
        if (data.length > 0) {
          setSelectedService(data[0].id);
        }
      })
      .catch(err => console.error('Error carregant serveis:', err));
  }, []);

  // Carregar cites quan es selecciona una data
  useEffect(() => {
    if (selectedDate) {
      const dateStr = format(selectedDate, 'yyyy-MM-dd');
      setLoading(true);
      fetch(`/api/appointments?date=${dateStr}`)
        .then(res => res.json())
        .then((appointments: Appointment[]) => {
          const booked = appointments.map(apt => {
            const date = new Date(apt.date);
            const hours = date.getHours().toString().padStart(2, '0');
            const minutes = date.getMinutes().toString().padStart(2, '0');
            return `${hours}:${minutes}`;
          });
          setBookedSlots(booked);
          setLoading(false);
        })
        .catch(err => {
          console.error('Error carregant cites:', err);
          setLoading(false);
        });
    } else {
      setBookedSlots([]);
      setSelectedTime('');
    }
  }, [selectedDate]);

  const handleDateChange = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (date < today) {
      setMessage({ type: 'error', text: 'No pots seleccionar una data passada' });
      return;
    }
    setSelectedDate(date);
    setSelectedTime('');
    setMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime || !selectedService || !clientName || !clientPhone || !clientEmail) {
      setMessage({ type: 'error', text: 'Si us plau, completa tots els camps obligatoris (nom, telèfon i correu)' });
      return;
    }

    setSubmitting(true);
    setMessage(null);

    // Crear data completa amb hora
    const [hours, minutes] = selectedTime.split(':');
    const appointmentDate = new Date(selectedDate);
    appointmentDate.setHours(parseInt(hours), parseInt(minutes), 0, 0);

    try {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date: appointmentDate.toISOString(),
          clientName,
          clientEmail,
          clientPhone,
          serviceId: selectedService,
          notes: notes || null,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error creant la cita');
      }

      setMessage({ type: 'success', text: 'Cita creada amb èxit! T\'enviarem un recordatori.' });
      
      // Netejar formulari
      setClientName('');
      setClientEmail('');
      setClientPhone('');
      setNotes('');
      setSelectedTime('');
      setSelectedDate(null);
      
      // Actualitzar llista de cites ocupades
      if (selectedDate) {
        const dateStr = format(selectedDate, 'yyyy-MM-dd');
        const res = await fetch(`/api/appointments?date=${dateStr}`);
        const appointments = await res.json();
        const booked = appointments.map((apt: Appointment) => {
          const date = new Date(apt.date);
          const hours = date.getHours().toString().padStart(2, '0');
          const minutes = date.getMinutes().toString().padStart(2, '0');
          return `${hours}:${minutes}`;
        });
        setBookedSlots(booked);
      }
    } catch (error) {
      setMessage({ 
        type: 'error', 
        text: error instanceof Error ? error.message : 'Error creant la cita' 
      });
    } finally {
      setSubmitting(false);
    }
  };

  const isTimeSlotAvailable = (time: string) => {
    // Si no hi ha data seleccionada, no està disponible
    if (!selectedDate) return false;
    
    // Verificar si l'hora ja ha passat (si la data seleccionada és avui)
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const selectedDateOnly = new Date(selectedDate);
    selectedDateOnly.setHours(0, 0, 0, 0);
    
    // Si la data seleccionada és avui, verificar si l'hora ja ha passat
    if (selectedDateOnly.getTime() === today.getTime()) {
      const [hours, minutes] = time.split(':').map(Number);
      const now = new Date();
      const slotTime = new Date();
      slotTime.setHours(hours, minutes, 0, 0);
      
      // Si l'hora del slot és anterior a l'hora actual, no està disponible
      if (slotTime < now) {
        return false;
      }
    }
    
    // Verificar si l'hora està reservada
    return !bookedSlots.includes(time);
  };

  const serviceDropdownItems = services.map(service => ({
    value: service.id,
    label: `${service.name}${service.price ? ` - ${service.price.toFixed(2)}€` : ''}`,
  }));

  return (
    <div className="min-h-screen bg-[#00000A] py-8 sm:py-12 px-4 sm:px-6 pt-20 sm:pt-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #FCFEFA 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>
      
      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#EF5350]/10 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-t from-[#EF5350]/5 to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Elegant */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-block mb-4 sm:mb-6">
            <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-transparent via-[#EF5350] to-transparent mx-auto mb-3 sm:mb-4"></div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-[#FCFEFA] mb-3 sm:mb-4 tracking-tight px-2">
              Reserva la teva
              <span className="block font-bold bg-gradient-to-r from-[#EF5350] to-[#EF5350]/80 bg-clip-text text-transparent mt-1 sm:mt-2">
                Cita
              </span>
            </h1>
            <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-transparent via-[#EF5350] to-transparent mx-auto"></div>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-[#4D5466] font-light max-w-2xl mx-auto px-4">
            Selecciona el dia i l'hora que millor et vagi per a la teva experiència de bellesa
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Calendari */}
          <Card className="bg-[#222430]/80 backdrop-blur-xl border-[#222430] shadow-2xl">
            <CardHeader className="pb-4">
              <CardTitle className="text-[#FCFEFA] text-2xl font-light">Selecciona una data</CardTitle>
              <CardDescription className="text-[#4D5466] text-sm">
                Tria el dia que vols venir a tallar-te els cabells
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar
                selected={selectedDate || undefined}
                onSelect={handleDateChange}
                className="bg-transparent border-0"
              />
            </CardContent>
          </Card>

          {/* Formulari */}
          <Card className="bg-[#222430]/80 backdrop-blur-xl border-[#222430] shadow-2xl">
            <CardHeader className="pb-4">
              <CardTitle className="text-[#FCFEFA] text-2xl font-light">
                {selectedDate 
                  ? `Completa la teva reserva`
                  : 'Completa la teva reserva'
                }
              </CardTitle>
              <CardDescription className="text-[#4D5466] text-sm">
                {selectedDate 
                  ? format(selectedDate, "EEEE, d 'de' MMMM", { locale: ca })
                  : 'Primer selecciona una data al calendari'
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              {selectedDate && (
                <>
                  {/* Selecció d'hora */}
                  <div className="mb-8">
                    <Label className="text-[#FCFEFA] mb-4 block text-sm font-medium uppercase tracking-wider">
                      Selecciona una hora
                    </Label>
                    {loading ? (
                      <div className="flex items-center justify-center py-12">
                        <div className="animate-spin rounded-full h-10 w-10 border-2 border-[#EF5350] border-t-transparent"></div>
                        <span className="ml-3 text-[#4D5466]">Carregant hores disponibles...</span>
                      </div>
                    ) : (
                      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
                        {TIME_SLOTS.map(time => {
                          const available = isTimeSlotAvailable(time);
                          const isSelected = selectedTime === time;
                          return (
                            <button
                              key={time}
                              type="button"
                              onClick={() => available && setSelectedTime(time)}
                              disabled={!available}
                              className={cn(
                                'h-12 rounded-lg text-sm font-medium transition-all duration-200',
                                isSelected && 'bg-[#EF5350] text-[#FCFEFA] shadow-lg shadow-[#EF5350]/30 scale-105',
                                !isSelected && available && 'bg-[#12111F] border border-[#222430] text-[#FCFEFA] hover:border-[#EF5350]/50 hover:bg-[#222430]',
                                !available && 'bg-[#12111F] border border-[#222430] text-[#4D5466] opacity-40 cursor-not-allowed'
                              )}
                            >
                              {time}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  <Separator className="my-8 bg-[#222430]" />

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Servei */}
                    <div className="space-y-3">
                      <Label htmlFor="service" className="text-[#FCFEFA] text-sm font-medium uppercase tracking-wider">
                        Servei <span className="text-[#EF5350]">*</span>
                      </Label>
                      <Dropdown
                        items={serviceDropdownItems}
                        value={selectedService}
                        onValueChange={(value) => setSelectedService(Number(value))}
                        placeholder="Selecciona un servei"
                        className="w-full"
                      />
                    </div>

                    {/* Nom */}
                    <div className="space-y-3">
                      <Label htmlFor="clientName" className="text-[#FCFEFA] text-sm font-medium uppercase tracking-wider">
                        Nom complet <span className="text-[#EF5350]">*</span>
                      </Label>
                      <Input
                        id="clientName"
                        type="text"
                        placeholder="Introdueix el teu nom"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        className="bg-[#12111F] border-[#222430] text-[#FCFEFA] placeholder:text-[#4D5466] focus:border-[#EF5350] focus:ring-[#EF5350]/20 h-12"
                        required
                      />
                    </div>

                    {/* Telèfon */}
                    <div className="space-y-3">
                      <Label htmlFor="clientPhone" className="text-[#FCFEFA] text-sm font-medium uppercase tracking-wider">
                        Telèfon <span className="text-[#EF5350]">*</span>
                      </Label>
                      <Input
                        id="clientPhone"
                        type="tel"
                        placeholder="Introdueix el teu telèfon"
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        className="bg-[#12111F] border-[#222430] text-[#FCFEFA] placeholder:text-[#4D5466] focus:border-[#EF5350] focus:ring-[#EF5350]/20 h-12"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-3">
                      <Label htmlFor="clientEmail" className="text-[#FCFEFA] text-sm font-medium uppercase tracking-wider">
                        Correu electrònic <span className="text-[#EF5350]">*</span>
                      </Label>
                      <Input
                        id="clientEmail"
                        type="email"
                        placeholder="exemple@correu.com"
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        className="bg-[#12111F] border-[#222430] text-[#FCFEFA] placeholder:text-[#4D5466] focus:border-[#EF5350] focus:ring-[#EF5350]/20 h-12"
                        required
                      />
                    </div>

                    {/* Notes */}
                    <div className="space-y-3">
                      <Label htmlFor="notes" className="text-[#FCFEFA] text-sm font-medium uppercase tracking-wider">
                        Notes (opcional)
                      </Label>
                      <Textarea
                        id="notes"
                        placeholder="Alguna preferència o comentari..."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        rows={4}
                        className="bg-[#12111F] border-[#222430] text-[#FCFEFA] placeholder:text-[#4D5466] focus:border-[#EF5350] focus:ring-[#EF5350]/20 resize-none"
                      />
                    </div>

                    {/* Missatge */}
                    {message && (
                      <div
                        className={cn(
                          'p-4 rounded-lg border backdrop-blur-sm',
                          message.type === 'success'
                            ? 'bg-[#EF5350]/10 border-[#EF5350]/30 text-[#EF5350]'
                            : 'bg-[#EF5350]/10 border-[#EF5350]/30 text-[#EF5350]'
                        )}
                      >
                        <div className="flex items-center gap-3">
                          {message.type === 'success' ? (
                            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          )}
                          <span className="text-sm">{message.text}</span>
                        </div>
                      </div>
                    )}

                    {/* Botó submit */}
                    <Button
                      type="submit"
                      disabled={submitting || !selectedTime}
                      className="w-full bg-[#EF5350] hover:bg-[#EF5350]/90 text-[#FCFEFA] border-0 h-14 text-base font-medium shadow-lg shadow-[#EF5350]/30 hover:shadow-[#EF5350]/40 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      size="lg"
                    >
                      {submitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Creant cita...
                        </>
                      ) : (
                        'Reservar cita'
                      )}
                    </Button>
                  </form>
                </>
              )}
              
              {!selectedDate && (
                <div className="text-center py-16">
                  <div className="inline-block p-6 rounded-full bg-[#12111F] mb-6">
                    <svg className="h-12 w-12 text-[#4D5466]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-[#4D5466] text-lg font-light">
                    Si us plau, selecciona una data al calendari per continuar
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
