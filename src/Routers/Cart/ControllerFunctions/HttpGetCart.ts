import { QueryResult } from "pg";
import { QueryError } from "../../../types/types";
import HttpMethods from "../Abstract/HttpMethods";

export default class HttpGetCart extends HttpMethods<Promise<unknown>> {

    async execute() {
        const { req, res } = this.params
        const cartId = req.params.id

        const response = await this.cartModel.getCart(cartId)
        res.status(200).json({
            content: response
        })

    }

}