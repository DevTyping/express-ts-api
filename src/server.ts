import * as express from "express"
import * as helmet from "helmet"
import * as cors from "cors"
import { json, urlencoded } from "body-parser"

import { Routes } from "./routes/api"

class App {
  public app: express.Application
  public routePrv: Routes = new Routes()

  constructor() {
    this.app = express()
    this.config()
    this.initMiddlewares()
    this.routePrv.routes(this.app)
  }

  private config(): void {
    this.app.use(helmet())
    this.app.use(json())
    this.app.use(urlencoded({ extended: false }))
  }

  private initMiddlewares(): void {
    this.app.use(
      cors({
        optionsSuccessStatus: 200,
      })
    )
  }

  public getApp(): express.Application {
    return this.app
  }
}

export default new App().getApp()
