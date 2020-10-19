import {
  AuthController,
  AuthControllerInterface,
} from "./../controllers/Auth/AuthController"
import { RouteInterface } from "./route.interface"

export class Routes {
  public AuthController: AuthControllerInterface = new AuthController()

  public routes(app: any): void {
    this.authGroup(app, "/auth", this.AuthController)
  }

  public crud(app: any, route: String, controller: RouteInterface): void {
    app
      .route(route)
      .get(controller.get)
      .post(controller.create)
      .patch(controller.update)
      .delete(controller.delete)
  }

  private authGroup(
    app: any,
    path: string,
    controller: AuthControllerInterface
  ): void {
    app.route(`${path}/login`).post(controller.login)
    app.route(`${path}/signup`).post(controller.signup)
    app.route(`${path}/forget_password`).post(controller.forgetPassword)
  }
}
