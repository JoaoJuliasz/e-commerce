import DbQuery from "../../../../Abstract/DbQuery";

export default class GetCartPaymentMethod extends DbQuery {

    constructor(private cartId: string) {
        super()
    }

    execute() {
        const queryString = `select payment_method from user_cart where id = ${this.cartId}`
        const response = this.query(queryString)
        return response
    }

}