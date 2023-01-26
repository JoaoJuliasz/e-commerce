import express from 'express'
import OrdersController from './orders.controller'

export default class OrdersRouter {

    private ordersController: OrdersController = new OrdersController()

    execute() {

        const ordersRouter = express.Router()

        ordersRouter.post('/get', this.ordersController.httpGetOrders)
        ordersRouter.get('/:id', this.ordersController.httpGetOrder)
        ordersRouter.post('/', this.ordersController.httpCreateOrder)
        ordersRouter.delete('/:id', this.ordersController.httpDeleteOrder)

        return ordersRouter

    }

}