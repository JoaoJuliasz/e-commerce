import { QueryResult } from "pg";
import { QueryError } from "../../../types/types";
import OrdersModel from "../../Orders/orders.model";
import HttpMethods from "../Abstract/HttpMethods";

export default class HttpFinishCart extends HttpMethods<Promise<unknown>> {

    private orderModel = new OrdersModel()


    async execute() {
        const { req, res } = this.params
        const cart = req.body
        console.log(cart)
        const response = await this.cartModel.finishCart(cart)

        if ((response as QueryError).error) {
            return res.status(400).json({
                err: (response as QueryError).message
            })
        }

        await this.orderModel.createOrder({user_id: cart.user_id, cart_id: cart.cart_id})
        res.status(200).json({
            message: 'Cart finished!'
        })

    }

}