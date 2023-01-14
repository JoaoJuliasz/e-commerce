import DbQuery from "../../../../Abstract/DbQuery";

export default class GetCart extends DbQuery {

    constructor(private cartId: string) {
        super()
    }

    execute() {
        const queryString = `select uc.id as cart_id, user_id from 
        user_cart uc right join cart_products cp on uc.id = cp.cart_id where uc.id = ${this.cartId}`
        const response = this.query(queryString)
        return response
    }

}