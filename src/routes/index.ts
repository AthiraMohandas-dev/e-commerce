import express from "express"

import productsApiRouter from "./products_api_router"

const router = express.Router()

router.use(
  productsApiRouter
)

export default router
