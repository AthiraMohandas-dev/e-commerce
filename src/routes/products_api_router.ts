import express from "express"
import * as middlewareProductsRequest from "../middleware/product_request"
import productController from "../controller/products_controller"

const productsApiUri = {
  productData: "/products"
}

const productsApiRouter = express.Router()

productsApiRouter
  .route(productsApiUri.productData)
  .get(
    middlewareProductsRequest.validateProductSearchQuery(),
    productController.getProduct
  )

export default productsApiRouter
