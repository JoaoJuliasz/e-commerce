import { QueryResult } from "pg";
import { QueryError } from "../../../types/types";
import HttpMethods from "../Abstract/HttpMethods";

export default class HttpCreateCart extends HttpMethods<Promise<unknown>> {

    async execute() {
        const { req, res } = this.params
        const cartBody = req.body

        const response = await this.cartModel.createCart(cartBody)

        if ((response as QueryError).error) {
            return res.status(400).json({
                err: (response as QueryError).message
            })
        }

        res.status(201).json({
            message: 'Product added to cart!',
            content: (response as QueryResult).rows[0]
        })

    }

}