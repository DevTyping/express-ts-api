import { Request, Response } from "express"
import { BaseController } from "./../BaseController"
import { User, UserInterface } from "./../../models/UserModel"

export class AuthController extends BaseController
  implements AuthControllerInterface {
  public login() {
    return this.responseMsg("Login")
  }

  public signup() {
    return this.responseMsg("Signup")
  }

  public forgetPassword() {
    return this.responseMsg("Forget Password")
  }
}

export interface AuthControllerInterface {
  login(req: Request, res: Response): any
  signup(req: Request, res: Response): any
  forgetPassword(req: Request, res: Response): any
}
