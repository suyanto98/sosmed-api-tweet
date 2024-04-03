import { NextFunction, Request, Response } from "express";
import { deleteTweetAction } from "../actions/tweets/deleteTweetAction";
import { editTweetAction } from "../actions/tweets/editTweetAction";
import { getTweetsAction } from "../actions/tweets/getTweetsAction";
import { getTweetUserAction } from "../actions/tweets/getTweetUserAction";
import { getUserTweetsAction } from "../actions/tweets/getUserTweetsAction";
import { createTweetAction } from "../actions/tweets/createTweetAction";

export class TweetsController {
  async deleteTweetController(req: Request, res: Response, next: NextFunction) {
    try {
      const tweetId = parseInt(req.params.id, 10);
      const result = await deleteTweetAction(tweetId);
      res.status(result.status).send(result);
    } catch (error) {
      next(error);
    }
  }

  async editTweetController(req: Request, res: Response, next: NextFunction) {
    try {
      const tweetId = parseInt(req.params.id, 10);
      const data = req.body;
      const result = await editTweetAction(data, tweetId);
      res.status(result.status).send(result);
    } catch (error) {
      next(error);
    }
  }

  async getTweetsController(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await getTweetsAction();
      res.status(result.status).send(result);
    } catch (error) {
      next(error);
    }
  }

  async getTweetUserController(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const tweetId = parseInt(req.params.id, 10);
      const result = await getTweetUserAction(tweetId);
      res.status(result.status).send(result);
    } catch (error) {
      next(error);
    }
  }

  async getUserTweetsController(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const userId = parseInt(req.params.id, 10);
      const result = await getUserTweetsAction(userId);
      res.status(result.status).send(result);
    } catch (error) {
      next(error);
    }
  }

  async tweetUserController(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;
      const result = await createTweetAction(data);
      res.status(result.status).send(result);
    } catch (error) {
      next(error);
    }
  }
}
