import 'dotenv/config';
import type { APIRoute } from 'astro';
import { PrismaClient } from '../../generated/prisma';

export const prerender = false;

const prisma = new PrismaClient();

// GET - Llistar tots els serveis disponibles
export const GET: APIRoute = async () => {
  try {
    const services = await prisma.service.findMany({
      orderBy: {
        name: 'asc',
      },
    });

    return new Response(
      JSON.stringify(services),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error obtenint serveis:', error);
    return new Response(
      JSON.stringify({ error: 'Error obtenint serveis' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

