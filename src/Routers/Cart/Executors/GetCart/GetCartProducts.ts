import DbQuery from "../../../../Abstract/DbQuery";

export default class GetCartProducts extends DbQuery {

    constructor(private cartId: string) {
        super()
    }

    execute() {
        console.log(this.cartId)
        const queryString = `select product_id, product_quantity, p.name
        from cart_products cp right join products p on cp.product_id = p.id where cp.cart_id = ${this.cartId}`
        const response = this.query(queryString)
        return response
    }

}