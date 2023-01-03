import HttpMethods from '../Abstract/HttpMethods'
import { Params, QueryError } from '../../types/types'
import { QueryResult } from 'pg'

export default class HttpCreateCategory extends HttpMethods<Promise<any>> {

    constructor(private params: Params) {
        super()
    }

    async execute() {
        const { req, res } = this.params
        const category = req.body
        if (!category.name) {
            return res.status(400).json({
                err: 'Category name is missing'
            })
        }
        const createCategory = await this.categoriesModel.createCategory(category.name)
        if ((createCategory as QueryError).error) {
            return res.status(400).json({
                err: (createCategory as QueryError)["message"]
            })
        }
        return res.status(201).json({
            message: "Category created!",
            category: (createCategory as QueryResult).rows[0]
        })
    }

}