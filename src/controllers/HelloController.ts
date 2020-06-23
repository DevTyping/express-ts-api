import { Request, Response } from "express"
import { RouteInterface } from "../routes/route.interface"
import { User, UserInterface } from "../models/UserModel"

export class HelloController implements RouteInterface {
  public index(req: Request, res: Response) {
    res.json({
      message: "Hello world,",
    })
  }

  public async create(req: Request, res: Response) {
    const params: UserInterface = req.body

    User.create<User>(params)
      .then((user: User) => {
        res.status(201).json(user)
      })
      .catch((err: Error) => {
        res.status(500).json(err)
      })
  }

  public async delete(req: Request, res: Response) {}

  public async update(req: Request, res: Response) {}

  public async get(req: Request, res: Response) {
    const users = await User.findAll({})
    res.json({
      data: users,
    })
  }
}
