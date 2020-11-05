import { Request, Response } from 'express';
import { FOOD, STORE } from './db-data';

export function getDrinks(req: Request, res: Response) {
    const food = Object.values(FOOD) as any;
    res.status(200).json({ payload: food[0].drinks });
}

export function getPizzas(req: Request, res: Response) {
    const food = Object.values(FOOD) as any;
    res.status(200).json({ payload: food[0].pizzas });
}

export function getSides(req: Request, res: Response) {
    const food = Object.values(FOOD) as any;
    res.status(200).json({ payload: food[0].sides });
}

export function getStore(req: Request, res: Response) {
    res.status(200).json({ payload: Object.values(STORE) });
}
