import DbQuery from "../../../Abstract/DbQuery";
import { FinishedCart } from "../types";

export default class FinishCart extends DbQuery {

    constructor(private cart: FinishedCart) {
        super()
    }

    execute() {

        const queryString = `update user_cart 
        set payment_method = '${this.cart.payment_method}'
         where id = ${this.cart.cart_id}
        `

        return this.query(queryString)
    }

}