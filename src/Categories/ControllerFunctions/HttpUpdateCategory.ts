import { Request, Response } from 'express'
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
        if (typeof updateCategory === 'string') {
            return res.status(400).json({
                err: updateCategory
            })
        }
        return res.status(200).json({
            message: 'Category updated!',
            content: {
                id: categoryId,
                name: category.name
            }
        })
    }

}