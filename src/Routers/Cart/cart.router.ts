import express from 'express'
import CartController from './cart.controller'

export default class CartRouter {

    private cartController: CartController = new CartController()

    execute() {

        const cartRouter = express.Router()

        cartRouter.get('/:id', this.cartController.httpGetCart)
        cartRouter.post('/add-item', this.cartController.httpCreateCart)
        cartRouter.put('/:id', this.cartController.httpAddItemOnCart)
        cartRouter.post('/finish', this.cartController.httpFinishCart)
        cartRouter.delete('/:id', this.cartController.httpDeleteCart)

        return cartRouter

    }

}