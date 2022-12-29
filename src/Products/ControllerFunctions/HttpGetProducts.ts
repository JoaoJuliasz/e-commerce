import HttpMethods from "../Abstract/HttpMethods";
import { Response } from 'express'

export default class HttpGetProducts extends HttpMethods<Promise<Response<any, Record<string, any>>>>{

    constructor(private res: Response) {
        super()
    }

    async execute() {
        const products = await this.productsModel.getProducts()
        return this.res.status(200).json(products)
    }

}