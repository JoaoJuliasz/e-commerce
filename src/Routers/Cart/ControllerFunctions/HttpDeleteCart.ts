import { QueryResult } from "pg";
import { QueryError } from "../../../types/types";
import HttpMethods from "../Abstract/HttpMethods";

export default class HttpDeleteCart extends HttpMethods<Promise<unknown>> {

    async execute() {
        const { req, res } = this.params
        const cartId = req.params.id

        const response = await this.cartModel.deleteCart(cartId)

        if ((response as QueryError).error) {
            return res.status(400).json({
                err: (response as QueryError).message
            })
        }

        if((response as QueryResult).rowCount === 0) {
            return res.status(400).json({
                err: `Cart with id ${cartId}, not exists!`
            })
        }

        res.status(201).json({
            message: 'Cart removed!',
        })

    }

}