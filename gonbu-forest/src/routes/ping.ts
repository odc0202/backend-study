import { Router, Request, Response } from 'express';
import prisma from '../lib/prisma.js';

const router = Router();

router.get('/ping', async (_req: Request, res: Response) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({
      message: 'pong',
      db: 'connected',
      timestamp: new Date().toISOString(),
    });
  } catch {
    res.status(500).json({
      message: 'pong',
      db: 'disconnected',
      timestamp: new Date().toISOString(),
    });
  }
});

export default router;