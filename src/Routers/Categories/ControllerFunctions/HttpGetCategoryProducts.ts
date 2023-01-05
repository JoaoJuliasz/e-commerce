import { QueryResult } from "pg";
import { Params } from "../../../types/types";
import HttpMethods from "../Abstract/HttpMethods";

export default class HttpGetCategoryProducts extends HttpMethods<Promise<unknown>> {

    constructor(private params: Params) {
        super()
    }

    async execute() {
        const { req, res } = this.params
        const categoryId = Number(req.params.id)
        const categoryProducts = (await this.categoriesModel.getCategoryProducts(categoryId) as QueryResult).rows
        return res.status(200).json(categoryProducts)
    }

}