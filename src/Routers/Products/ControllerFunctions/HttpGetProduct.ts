import HttpMethods from "../Abstract/HttpMethods";
import { Params, QueryError } from "../../../types/types";
import { QueryResult } from "pg";

export default class HttpGetProduct extends HttpMethods<Promise<unknown>>{

    constructor(private params: Params) {
        super()
    }

    async execute() {
        const {req, res} = this.params
        const productId = Number(req.params.id)

        const product = await this.productsModel.getProduct(productId)
        if((product as QueryError).error) {
            return res.status(400).json({
                error: (product as QueryError).error
            })
        }

        const rows = (product as QueryResult).rows
        
        if(rows.length === 0) {
            return res.status(400).json({
                error: `Product with id ${productId} not exists!`
            })
        }
        return res.status(200).json(rows[0])
    }

}