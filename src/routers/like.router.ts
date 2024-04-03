import { Router } from "express";
import { LikeController } from "../controllers/like.controller";

export class LikeRouter {
  private router: Router;
  private likeController: LikeController;

  constructor() {
    this.likeController = new LikeController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.delete("/:id", this.likeController.deleteTweetLikeController);
    this.router.get("/:id/user", this.likeController.getLikeByUserIdController);
    this.router.get("/:id", this.likeController.getTweetLikesController);
    this.router.post("/", this.likeController.postLikeTweetController);
  }

  getRouter(): Router {
    return this.router;
  }
}
