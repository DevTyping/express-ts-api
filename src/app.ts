import { logger } from "./logger"
import app from "./server"

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`--> Server successfully started at port ${port}`)
  logger.info({
    message: `--> Server successfully started at port ${port}`,
  })
})
