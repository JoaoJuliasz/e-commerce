import express from 'express'
import ProductsController from './products.controller'

export default class ProductsRouter {

    private productsController: ProductsController = new ProductsController()

    execute() {
        const productsRouter = express.Router()

        productsRouter.get('/', this.productsController.httpGetProducts)
        productsRouter.get('/query', this.productsController.httpQueryProducts)
        productsRouter.get('/:id', this.productsController.httpGetProduct)
        productsRouter.post('/', this.productsController.httpCreateProduct)
        productsRouter.put('/:id', this.productsController.httpUpdateProduct)
        productsRouter.delete('/:id', this.productsController.httpDeleteProduct)

        return productsRouter
    }

}