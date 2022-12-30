import HttpMethods from "../Abstract/HttpMethods";
import { Params } from "../../types/types";

export default class HttpDeleteProduct extends HttpMethods<Promise<unknown>>{

    constructor(private params: Params) {
        super()
    }

    async execute() {
        const { req, res } = this.params
        const productId = Number(req.params.id)

        const deletedProduct = await this.productsModel.deleteProduct(productId)

        if(deletedProduct === 0) {
            return res.status(400).json({
                error: `Product with id ${productId}, not exists`
            })
        }

        return res.status(200).json({
            message: 'Product deleted!'
        })

    }

}