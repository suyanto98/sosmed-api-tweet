import { NextFunction, Request, Response } from "express";
import { createFollowAction } from "../actions/follows/createFollowAction";
import { deleteFollowingAction } from "../actions/follows/deleteFollowingAction";
import { getFollowerAction } from "../actions/follows/getFollowerAction";
import { getFollowingAction } from "../actions/follows/getFollowingAction";
import { getListFollowBarAction } from "../actions/follows/getListFollowBarAction";

export class FollowsController {
  async createFollowerController(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = req.body;
      const result = await createFollowAction(data);
      res.status(result.status).send(result);
    } catch (error) {
      next(error);
    }
  }

  async deleteFollowingController(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const followingId = parseInt(req.params.id);
      const result = await deleteFollowingAction(followingId);
      res.status(result.status).send(result);
    } catch (error) {
      next(error);
    }
  }

  async getFollowerController(req: Request, res: Response, next: NextFunction) {
    try {
      const followerId = parseInt(req.params.id, 10);
      const result = await getFollowerAction(followerId);
      res.status(result.status).send(result);
    } catch (error) {
      next(error);
    }
  }

  async getFollowingController(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const followingId = parseInt(req.params.id, 10);
      const result = await getFollowingAction(followingId);
      res.status(result.status).send(result);
    } catch (error) {
      next(error);
    }
  }

  async getListFollowBarController(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const result = await getListFollowBarAction();
      res.status(result.status).send(result);
    } catch (error) {
      next(error);
    }
  }
}
