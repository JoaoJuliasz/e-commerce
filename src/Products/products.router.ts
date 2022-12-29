import express from 'express'
import ProductsController from './products.controller'

export default class ProductsRouter {

    private productsController: ProductsController = new ProductsController()

    execute() {
        const productsRouter = express.Router()

        productsRouter.get('/', this.productsController.httpGetProducts)
        productsRouter.post('/', this.productsController.httpCreateProduct)

        return productsRouter
    }

}