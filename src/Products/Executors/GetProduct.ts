import DbQuery from "../../Abstract/DbQuery";
import { Product } from "../types";

export default class GetProduct extends DbQuery<Promise<Product[] | string>> {

    constructor(private productId: number) {
        super()
    }

    async execute() {
        try {
            const product = (await this.DB.start().query('select * from products where id = $1', [this.productId])).rows
            return product
        } catch (error: any) {
            return error.message
        }
    }

}