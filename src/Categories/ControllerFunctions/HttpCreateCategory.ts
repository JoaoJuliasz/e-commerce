import HttpMethods from '../Abstract/HttpMethods'
import { Params } from '../../types/types'

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
        if (typeof createCategory === 'string') {
            return res.status(400).json({
                err: createCategory
            })
        }
        return res.status(201).json(category)
    }

}