import { Response } from 'express'
import { QueryResult } from 'pg'
import HttpMethods from '../Abstract/HttpMethods'

export default class HttpGetCategories extends HttpMethods<Promise<void>>{

    constructor(private res: Response) {
        super()
    }

    async execute() {
        const categories = (await this.categoriesModel.getCategories() as QueryResult).rows
        this.res.status(200).json({ content: categories })
    }

}