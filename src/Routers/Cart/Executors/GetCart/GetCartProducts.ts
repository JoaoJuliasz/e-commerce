import DbQuery from "../../../../Abstract/DbQuery";

export default class GetCartProducts extends DbQuery {

    constructor(private cartId: string) {
        super()
    }

    execute() {
        const queryString = `select product_id, product_quantity, p.name, round((p.value * cp.product_quantity)::numeric, 2) as Total
        from cart_products cp right join products p on cp.product_id = p.id where cp.cart_id = ${this.cartId}`
        const response = this.query(queryString)
        return response
    }

}