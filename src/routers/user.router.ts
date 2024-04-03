import { Router } from "express";
import { UsersController } from "../controllers/user.controller";
import { verifyToken } from "../middleware/jwtVerifyToken";

export class UserRouter {
  private router: Router;
  private userController: UsersController;

  constructor() {
    this.userController = new UsersController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get(
      "/keeplogin",
      verifyToken,
      this.userController.keepLoginController
    );
    this.router.post("/login", this.userController.loginUserController);
    this.router.get("/:id", this.userController.profileUserController);
    this.router.post("/register", this.userController.registerUserController);
    this.router.patch("/:id", this.userController.updateProfileUserController);
  }

  getRouter(): Router {
    return this.router;
  }
}
