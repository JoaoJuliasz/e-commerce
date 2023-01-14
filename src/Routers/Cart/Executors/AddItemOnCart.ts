import DbQuery from "../../../Abstract/DbQuery";
import { CartBody } from "../types";

export default class AddItemOnCart extends DbQuery {

    constructor(private cartBody: CartBody, private cartId: string) {
        super()
    }

    execute() {
        console.log(this.cartId)
        const queryString = `insert into cart_products (cart_id, product_id, product_quantity)
            values (${this.cartId}, ${this.cartBody.product_id}, ${this.cartBody.product_quantity}) returning *
        `
        const response = this.query(queryString)
        return response
    }

}