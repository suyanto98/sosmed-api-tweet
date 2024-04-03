import { Router } from "express";
import { FollowsController } from "../controllers/follow.controller";

export class FollowRouter {
  private router: Router;
  private followController: FollowsController;

  constructor() {
    this.followController = new FollowsController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post("/", this.followController.createFollowerController);
    this.router.delete("/:id", this.followController.deleteFollowingController);
    this.router.get(
      "/:id/follower",
      this.followController.getFollowerController
    );
    this.router.get(
      "/:id/following",
      this.followController.getFollowingController
    );
    this.router.get("/", this.followController.getListFollowBarController);
  }

  getRouter(): Router {
    return this.router;
  }
}
