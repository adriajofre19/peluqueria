import 'dotenv/config';
import { P as PrismaClient } from '../../chunks/client_DX-mBhl0.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const prisma = new PrismaClient();
const GET = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const date = url.searchParams.get("date");
    if (!date) {
      return new Response(
        JSON.stringify({ error: "Data requerida" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const startDate = new Date(date);
    startDate.setHours(0, 0, 0, 0);
    const endDate = new Date(date);
    endDate.setHours(23, 59, 59, 999);
    const appointments = await prisma.appointment.findMany({
      where: {
        date: {
          gte: startDate,
          lte: endDate
        }
      },
      include: {
        service: true
      }
    });
    return new Response(
      JSON.stringify(appointments),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error obtenint cites:", error);
    return new Response(
      JSON.stringify({ error: "Error obtenint cites" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
const POST = async ({ request }) => {
  try {
    let body;
    try {
      body = await request.json();
    } catch (error) {
      return new Response(
        JSON.stringify({ error: "Body JSON invàlid" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const { date, clientName, clientEmail, clientPhone, serviceId, notes } = body;
    if (!date || !clientName || !serviceId || !clientEmail || !clientPhone) {
      return new Response(
        JSON.stringify({ error: "Data, nom del client, telèfon, correu i servei són requerits" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const appointmentDate = new Date(date);
    const existingAppointment = await prisma.appointment.findFirst({
      where: {
        date: appointmentDate,
        status: {
          not: "cancelled"
        }
      }
    });
    if (existingAppointment) {
      return new Response(
        JSON.stringify({ error: "Aquesta hora ja està ocupada" }),
        { status: 409, headers: { "Content-Type": "application/json" } }
      );
    }
    const appointment = await prisma.appointment.create({
      data: {
        date: appointmentDate,
        clientName,
        clientEmail,
        clientPhone,
        serviceId: parseInt(serviceId),
        notes
      },
      include: {
        service: true
      }
    });
    return new Response(
      JSON.stringify(appointment),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error creant cita:", error);
    return new Response(
      JSON.stringify({ error: "Error creant cita" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
