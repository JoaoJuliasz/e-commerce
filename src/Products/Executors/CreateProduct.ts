import DbQuery from "../../Abstract/DbQuery";
import { Product } from "../types";

export default class CreateProduct extends DbQuery {

    constructor(private productBody: Product) {
        super()
    }

    async execute() {
        try {
            const queryString = `insert into products (name, description, value, image, category_id)
            values ('${this.productBody.name}', '${this.productBody.description}',
             ${this.productBody.value}, '${this.productBody.image}',
              ${this.productBody.category_id}) returning *`

            const createdProduct = await this.query(queryString)
            return createdProduct
        } catch (err: any) {
            return { message: err.message, error: err.name }
        }
    }
}