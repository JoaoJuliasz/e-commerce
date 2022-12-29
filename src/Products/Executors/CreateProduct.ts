import DbQuery from "../../Abstract/DbQuery";
import { Product } from "../types";

export default class CreateProduct extends DbQuery<Promise<unknown>> {

    constructor(private productBody: Product) {
        super()
    }

    async execute() {
        try {
            const createdProduct = await this.DB.start()
                .query('insert into products (name, description, value, image, category_id) values ($1, $2, $3, $4, $5)',
                    [this.productBody.name, this.productBody.description, this.productBody.value, this.productBody.image, this.productBody.category_id])
            return createdProduct
        } catch (err: any) {
            return err.message
        }
    }

}