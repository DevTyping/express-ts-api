import * as request from "supertest"
import app from "./server"

describe("Hello world", () => {
  it("should be hello world", async () => {
    const response = await request(app).get("/")

    expect(response.status).toBe(200)
    expect(response.body.message).toBe("Hello world,")
  })
})
