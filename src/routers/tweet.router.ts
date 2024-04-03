import { Router } from "express";
import { TweetsController } from "../controllers/tweet.controller";

export class TweetRouter {
  private router: Router;
  private tweetController: TweetsController;

  constructor() {
    this.tweetController = new TweetsController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.delete("/:id", this.tweetController.deleteTweetController);
    this.router.patch("/:id", this.tweetController.editTweetController);
    this.router.get("/", this.tweetController.getTweetsController);
    this.router.get("/:id", this.tweetController.getTweetUserController);
    this.router.get("/:id/user", this.tweetController.getUserTweetsController);
    this.router.post("/", this.tweetController.tweetUserController);
  }

  getRouter(): Router {
    return this.router;
  }
}
