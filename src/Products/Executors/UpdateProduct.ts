import DbQuery from "../../Abstract/DbQuery";
import { Product } from "../types";

export default class UpdateProduct extends DbQuery {

    constructor(private productBody: Product, private productId: number) {
        super()
    }

    async execute() {
        const queryString = `update products 
        set name = '${this.productBody.name}', description = '${this.productBody.description}', value = ${this.productBody.value}, image = '${this.productBody.image}',
         category_id = ${this.productBody.category_id}
        where id = ${this.productId} returning *`
        const updatedProduct = await this.query(queryString)
        return updatedProduct
    }
}