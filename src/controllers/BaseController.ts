import { Request, Response, response } from "express"
import HttpStatusCode from "../utils/HttpStatusCode"

export abstract class BaseController {
  public responseData(
    data: Array<Object> | Object,
    httpStatusCode: HttpStatusCode = HttpStatusCode.OK
  ) {
    return this.responseJson({ data }, httpStatusCode)
  }

  public responseError(
    msg: string,
    httpStatusCode: HttpStatusCode = HttpStatusCode.INTERNAL_SERVER_ERROR
  ) {
    return this.responseMsg(msg, httpStatusCode)
  }

  public responseMsg(
    msg: string,
    httpStatusCode: HttpStatusCode = HttpStatusCode.OK
  ) {
    return this.responseJson({ msg }, httpStatusCode)
  }

  public responseJson(body: Object, httpStatusCode: HttpStatusCode) {
    return response.status(httpStatusCode).json(body)
  }
}
