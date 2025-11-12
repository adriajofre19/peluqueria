import 'dotenv/config';
import { PrismaClient } from '../generated/prisma/client.js';

const prisma = new PrismaClient();

async function main() {
  // Crear serveis inicials
  const services = [
    {
      name: 'Tall de cabells',
      description: 'Tall de cabells per a homes i dones',
      duration: 30,
      price: 15.00,
    },
    {
      name: 'Tall i perrucat',
      description: 'Tall de cabells amb perrucat',
      duration: 45,
      price: 25.00,
    },
    {
      name: 'Tintat',
      description: 'Tintat complet de cabells',
      duration: 90,
      price: 50.00,
    },
    {
      name: 'Mechas',
      description: 'Aplicació de meches',
      duration: 120,
      price: 65.00,
    },
    {
      name: 'Perrucat',
      description: 'Perrucat sense tall',
      duration: 30,
      price: 12.00,
    },
  ];

  for (const service of services) {
    try {
      await prisma.service.create({
        data: service,
      });
      console.log(`Servei creat: ${service.name}`);
    } catch (error: any) {
      if (error.code === 'P2002') {
        console.log(`Servei ja existeix: ${service.name}`);
      } else {
        throw error;
      }
    }
  }

  console.log('Serveis creats amb èxit!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

