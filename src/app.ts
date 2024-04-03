import express, { Express, NextFunction, Request, Response } from "express";
import cors from "cors";
import { UserRouter } from "./routers/user.router";
import { TweetRouter } from "./routers/tweet.router";
import { FollowRouter } from "./routers/follow.router";
import { LikeRouter } from "./routers/like.router";
import { CommentRouter } from "./routers/comment.router";

const PORT = 4000;

export default class App {
  private app: Express;

  constructor() {
    this.app = express();
    this.configure();
    this.router();
    this.handleError();
  }

  private configure() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  private handleError(): void {
    this.app.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        console.log("Error", err);
        res.status(500).send(err.message);
      }
    );
  }

  private router() {
    const userRouter = new UserRouter();
    const tweetRouter = new TweetRouter();
    const followRouter = new FollowRouter();
    const likeRouter = new LikeRouter();
    const commentRouter = new CommentRouter();

    this.app.use("/users", userRouter.getRouter());
    this.app.use("/tweets", tweetRouter.getRouter());
    this.app.use("/follows", followRouter.getRouter());
    this.app.use("/likes", likeRouter.getRouter());
    this.app.use("/comments", commentRouter.getRouter());
  }

  public start() {
    this.app.listen(PORT, () => {
      console.log(`server runinng on port : ${PORT}`);
    });
  }
}
