import DbQuery from "../../../Abstract/DbQuery";

export default class DeleteCart extends DbQuery {

    constructor(private cartId: string) {
        super()
    }

    execute() {
        const queryString = `delete from cart_products where cart_id = ${this.cartId}`
        const response = this.query(queryString)
        return response
    }

}