import 'dotenv/config';
import { P as PrismaClient } from '../../chunks/client_DX-mBhl0.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const prisma = new PrismaClient();
const GET = async () => {
  try {
    const services = await prisma.service.findMany({
      orderBy: {
        name: "asc"
      }
    });
    return new Response(
      JSON.stringify(services),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error obtenint serveis:", error);
    return new Response(
      JSON.stringify({ error: "Error obtenint serveis" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
