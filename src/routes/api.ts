import { HelloController } from "../controllers/HelloController"
import { RouteInterface } from "./route.interface"

export class Routes {
  public helloController: HelloController = new HelloController()

  public routes(app: any): void {
    app.route("/").get(this.helloController.index)
    this.crud(app, "/users", this.helloController)
  }

  public crud(app: any, route: String, controller: RouteInterface): void {
    app
      .route(route)
      .get(controller.get)
      .post(controller.create)
      .patch(controller.update)
      .delete(controller.delete)
  }
}
