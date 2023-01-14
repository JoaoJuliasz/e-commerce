import { QueryResult } from "pg";
import { QueryError } from "../../../types/types";
import HttpMethods from "../Abstract/HttpMethods";

export default class HttpAddItemOnCart extends HttpMethods<Promise<unknown>> {

    async execute() {
        const { req, res } = this.params
        const cartBody = req.body
        const cartId = req.params.id

        const response = await this.cartModel.addItemOnCart(cartId, cartBody)

        if ((response as QueryError).error) {
            return res.status(400).json({
                err: (response as QueryError).message
            })
        }

        res.status(200).json({
            message: 'Product added to cart!',
            content: (response as QueryResult).rows[0]
        })

    }

}