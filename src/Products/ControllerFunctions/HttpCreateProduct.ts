import { Params } from "../../types/types";
import HttpMethods from "../Abstract/HttpMethods";

export default class HttpCreateProduct extends HttpMethods<Promise<unknown>> {

    constructor(private params: Params) {
        super()
    }

    async execute() {
        const { req, res } = this.params
        const productBody = req.body
        const createdProduct = await this.productsModel.createProduct(productBody)
        if (typeof createdProduct === 'string') {
            return res.status(400).json({
                error: createdProduct
            })
        }
        
        return res.status(201).json({
            message: 'Product created!',
            product: productBody
        })
    }

}