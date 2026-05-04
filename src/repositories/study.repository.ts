import prisma from '../lib/prisma.js';
import { BackgroundType } from '../generated/prisma/index.js';

interface CreateStudyInput {
  name: string;
  nickname: string;
  description?: string;
  password?: string;
  backgroundType?: BackgroundType;
  backgroundColor?: string;
  backgroundImage?: string;
}

interface UpdateStudyInput {
  name?: string;
  nickname?: string;
  description?: string;
  backgroundType?: BackgroundType;
  backgroundColor?: string;
  backgroundImage?: string;
}

export const studyRepository = {
  create: (data: CreateStudyInput) => {
    return prisma.study.create({ data });
  },

  findById: (id: string) => {
    return prisma.study.findUnique({
      where: { id },
      include: {
        habits: { orderBy: { order: 'asc' } },
        reactions: true,
        _count: { select: { participants: true } },
      },
    });
  },

  findByIdSimple: (id: string) => {
    return prisma.study.findUnique({ where: { id } });
  },

  update: (id: string, data: UpdateStudyInput) => {
    return prisma.study.update({ where: { id }, data });
  },

  delete: (id: string) => {
    return prisma.study.delete({ where: { id } });
  },
};