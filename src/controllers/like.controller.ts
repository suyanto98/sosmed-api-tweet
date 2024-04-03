import { NextFunction, Request, Response } from "express";
import { deleteTweetLikeAction } from "../actions/likes/deleteTweetLikeAction";
import { getLikeByUserIdAction } from "../actions/likes/getLikeByUserIdAction";
import { getTweetLikesAction } from "../actions/likes/getTweetLikesAction";
import { postLikeTweetAction } from "../actions/likes/postLikeTweetAction";

export class LikeController {
  async deleteTweetLikeController(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const userId = parseInt(req.params.id, 10);
      const result = await deleteTweetLikeAction(userId);
      res.status(result.status).send(result);
    } catch (error) {
      next(error);
    }
  }
  async getLikeByUserIdController(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const userId = parseInt(req.params.id, 10);
      const result = await getLikeByUserIdAction(userId);
      res.status(result.status).send(result);
    } catch (error) {
      next(error);
    }
  }

  async getTweetLikesController(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const tweetId = parseInt(req.params.id, 10);
      const result = await getTweetLikesAction(tweetId);
      res.status(result.status).send(result);
    } catch (error) {
      next(error);
    }
  }

  async postLikeTweetController(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = req.body;
      const result = await postLikeTweetAction(data);
      res.status(result.status).send(result);
    } catch (error) {
      next(error);
    }
  }
}
