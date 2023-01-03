import HttpMethods from "../Abstract/HttpMethods";
import { Params } from "../../types/types";
import { QueryResult } from "pg";

export default class HttpGetCategory extends HttpMethods<Promise<unknown>>{

    constructor(private params: Params) {
        super()
    }

    async execute() {
        const { req, res } = this.params
        const categoryId = Number(req.params.id)

        const category = (await this.categoriesModel.getCategory(categoryId) as QueryResult).rows
        if(category.length === 0) {
            return res.status(400).json({
                err: `Category with id ${categoryId} not exists`
            })
        }

        return res.status(200).json({
            content: category[0]
        })
    }

}