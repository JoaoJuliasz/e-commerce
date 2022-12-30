import HttpMethods from "../Abstract/HttpMethods";
import { Params } from "../../types/types";

export default class HttpGetProduct extends HttpMethods<Promise<unknown>>{

    constructor(private params: Params) {
        super()
    }

    async execute() {
        const {req, res} = this.params
        const productId = Number(req.params.id)

        const product = await this.productsModel.getProduct(productId)
        if(typeof product === 'string') {
            return res.status(400).json({
                error: product
            })
        }
        if(product.length === 0) {
            return res.status(400).json({
                error: `Product with id ${productId} not exists!`
            })
        }
        return res.status(200).json(product)
    }

}