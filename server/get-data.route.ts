import { Request, Response } from 'express';
import { FOOD } from './db-data';

export function getFood(req: Request, res: Response) {
    res.status(200).json({ payload: Object.values(FOOD) });
}
