import { Response } from 'express'
import HttpMethods from '../Abstract/HttpMethods'

export default class HttpGetCategories extends HttpMethods<Promise<void>>{

    constructor(private res: Response) {
        super()
    }

    async execute() {
        const categories = await this.categoriesModel.getCategories()
        this.res.status(200).json({ content: categories })

    }

}