import { studyRepository } from '../repositories/study.repository.js';
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

export const studyService = {
  createStudy: async (input: CreateStudyInput) => {
    return studyRepository.create(input);
  },

  getStudy: async (studyId: string) => {
    const study = await studyRepository.findById(studyId);
    if (!study) throw Object.assign(new Error('스터디를 찾을 수 없습니다.'), { status: 404 });
    return study;
  },

  updateStudy: async (studyId: string, input: UpdateStudyInput) => {
    const study = await studyRepository.findByIdSimple(studyId);
    if (!study) throw Object.assign(new Error('스터디를 찾을 수 없습니다.'), { status: 404 });
    return studyRepository.update(studyId, input);
  },

  deleteStudy: async (studyId: string) => {
    const study = await studyRepository.findByIdSimple(studyId);
    if (!study) throw Object.assign(new Error('스터디를 찾을 수 없습니다.'), { status: 404 });
    return studyRepository.delete(studyId);
  },

  verifyPassword: async (studyId: string, password: string) => {
    const study = await studyRepository.findByIdSimple(studyId);
    if (!study) throw Object.assign(new Error('스터디를 찾을 수 없습니다.'), { status: 404 });
    const isValid = study.password === password;
    return { isValid };
  },
};