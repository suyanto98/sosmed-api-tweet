import { NextFunction, Request, Response } from "express";
import { keeploginAction } from "../../actions/users/keepLoginAction";

export const keepLoginController = async (req: Request, res: Response, next: NextFunction ) => {
    try {
        const {id} = req.body.user
        const result = await keeploginAction(Number(id))
        res.status(result.status).send(result)
    } catch (error) {
        next(error)
    }
}