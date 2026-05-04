import app from './app.js';
import prisma from './lib/prisma.js';

const PORT = process.env.PORT ?? 3000;

async function main() {
  await prisma.$connect();
  console.log('DB connected');

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Health check: http://localhost:${PORT}/api/ping`);
  });
}

main().catch((err) => {
  console.error('Server failed to start:', err);
  process.exit(1);
});