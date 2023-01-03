import { QueryResult } from "pg";
import { Params } from "../../types/types";
import HttpMethods from "../Abstract/HttpMethods";
import { Response, Request } from 'express'

export default class HttpQueryProducts extends HttpMethods<any> {

    constructor(private params: { req: Request<{}, {}, {}, { q: string }>, res: Response }) {
        super()
    }

    async execute() {
        const { req, res } = this.params
        const filterQuery = req.query.q

        const filteredProducts = await this.productsModel.queryProducts(filterQuery)
        return res.status(200).json({ content: (filteredProducts as QueryResult).rows })

    }
}