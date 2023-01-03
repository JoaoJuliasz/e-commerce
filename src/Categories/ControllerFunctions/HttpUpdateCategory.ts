import { Request, Response } from 'express'
import { QueryResult } from 'pg'
import { QueryError } from '../../types/types'
import HttpMethods from '../Abstract/HttpMethods'

export default class HttpUpdateCategory extends HttpMethods<Promise<any>>{

    constructor(private params: { req: Request, res: Response }) {
        super()
    }

    async execute() {
        const { req, res } = this.params
        const category = req.body
        const categoryId = Number(req.params.id)

        if (!category.name) {
            return res.status(400).json({
                err: 'Category name is missing'
            })
        }
        const updateCategory = await this.categoriesModel.updateCategory(category.name, categoryId)
        if ((updateCategory as QueryError).error) {
            return res.status(400).json({
                err: (updateCategory as QueryError).message
            })
        }
        return res.status(200).json({
            message: 'Category updated!',
            category: (updateCategory as QueryResult).rows[0]
        })
    }

}