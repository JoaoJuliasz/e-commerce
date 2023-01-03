import { type } from "os"
import { QueryResult } from "pg"
import { Params, QueryError } from "../../types/types"
import HttpMethods from "../Abstract/HttpMethods"

export default class HttpUpdateProduct extends HttpMethods<Promise<unknown>> {

    constructor(private params: Params) {
        super()
    }

    async execute() {

        const { req, res } = this.params
        const productBody = req.body
        const productId = Number(req.params.id)

        const updatedProduct = await this.productsModel.updateProduct(productBody, productId)
        if ((updatedProduct as QueryError).error) {
            return res.status(400).json({
                error: (updatedProduct as QueryError).message
            })
        }

        return res.status(200).json({
            message: 'Product updated!',
            product: (updatedProduct as QueryResult).rows[0]
        })

    }

}