import { Router } from "express";
import { CommentController } from "../controllers/comment.controller";

export class CommentRouter {
  private router: Router;
  private commentController: CommentController;

  constructor() {
    this.commentController = new CommentController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get("/:id", this.commentController.getCommentController);
    this.router.post("/", this.commentController.createCommentController);
  }

  getRouter(): Router {
    return this.router;
  }
}
