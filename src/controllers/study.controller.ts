import { Request, Response, NextFunction } from 'express';
import { studyService } from '../services/study.service.js';
import { HTTP_STATUS } from '../constants/index.js';

export const createStudy = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const study = await studyService.createStudy(req.body);
    res.status(HTTP_STATUS.CREATED).json({ success: true, data: study });
  } catch (err) {
    next(err);
  }
};

export const getStudy = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const studyId = String(req.params.studyId);
    const study = await studyService.getStudy(studyId);
    res.status(HTTP_STATUS.OK).json({ success: true, data: study });
  } catch (err) {
    next(err);
  }
};

export const updateStudy = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const studyId = String(req.params.studyId);
    const study = await studyService.updateStudy(studyId, req.body);
    res.status(HTTP_STATUS.OK).json({ success: true, data: study });
  } catch (err) {
    next(err);
  }
};

export const deleteStudy = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const studyId = String(req.params.studyId);
    await studyService.deleteStudy(studyId);
    res.status(HTTP_STATUS.NO_CONTENT).send();
  } catch (err) {
    next(err);
  }
};

export const verifyStudyPassword = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const studyId = String(req.params.studyId);
    const result = await studyService.verifyPassword(studyId, req.body.password);
    res.status(HTTP_STATUS.OK).json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
};