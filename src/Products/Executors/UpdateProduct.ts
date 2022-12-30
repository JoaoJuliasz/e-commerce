import DbQuery from "../../Abstract/DbQuery";
import { Product } from "../types";

export default class UpdateProduct extends DbQuery<Promise<unknown>> {

    constructor(private productBody: Product, private productId: number) {
        super()
    }

    async execute() {
        try {
            const updatedProduct = await this.DB.start().query(`update products 
                set name = $1, description = $2, value = $3, image = $4, category_id = $5
                where id = $6`,
                [this.productBody.name, this.productBody.description, this.productBody.value, this.productBody.image, this.productBody.category_id, this.productId])
            return updatedProduct
        } catch (error: any) {
            return error.message
        }
    }
}