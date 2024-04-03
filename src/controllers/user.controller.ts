import { NextFunction, Request, Response } from "express";
import { keeploginAction } from "../actions/users/keepLoginAction";
import { LoginUserAction } from "../actions/users/loginUserAction";
import { profileUserAction } from "../actions/users/profileUserAction";
import { registerUserAction } from "../actions/users/registerUserAction";
import { updateUserAction } from "../actions/users/updateUserAction";

export class UsersController {
  async keepLoginController(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.body.user;
      const result = await keeploginAction(Number(id));
      res.status(result.status).send(result);
    } catch (error) {
      next(error);
    }
  }

  async loginUserController(req: Request, res: Response, next: NextFunction) {
    try {
      const { usernameOrEmail, password } = req.body;
      const result = await LoginUserAction(usernameOrEmail, password);
      res.status(result.status).send(result);
    } catch (error) {
      next(error);
    }
  }

  async profileUserController(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = parseInt(req.params.id, 10);
      const result = await profileUserAction(userId);
      res.status(result.status).send(result);
    } catch (error) {
      next(error);
    }
  }

  async registerUserController(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = req.body;
      const result = await registerUserAction(data);
      res.status(result.status).send(result);
    } catch (error) {
      next(error);
    }
  }

  async updateProfileUserController(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = req.body;
      const userId = parseInt(req.params.id);
      const result = await updateUserAction(data, userId);
      res.status(result.status).send(result);
    } catch (error) {
      next(error);
    }
  }
}
