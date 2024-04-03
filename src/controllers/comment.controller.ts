import { NextFunction, Request, Response } from "express";
import { createCommentAction } from "../actions/comments/createCommentAction";
import { getCommentAction } from "../actions/comments/getCommentAction";

export class CommentController {
  async createCommentController(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = req.body;
      const result = await createCommentAction(data);
      res.status(result.status).send(result);
    } catch (error) {
      next(error);
    }
  }
  async getCommentController(req: Request, res: Response, next: NextFunction) {
    try {
      const tweetId = parseInt(req.params.id, 10);
      const result = await getCommentAction(tweetId);
      res.status(result.status).send(result);
    } catch (error) {
      next(error);
    }
  }
}
