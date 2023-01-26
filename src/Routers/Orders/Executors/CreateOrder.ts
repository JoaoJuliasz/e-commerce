import DbQuery from "../../../Abstract/DbQuery";
import { OrderBody } from "../types";

export default class CreateOrder extends DbQuery {

    constructor(private orderBody: OrderBody) {
        super()
    }

    execute() {
        const orderBody = Object.assign(this.orderBody, {
            order_date: new Date().getTime()
        })

        console.log(orderBody)

        const queryString = `insert into orders (order_date, cart_id, user_id)
            values (${orderBody.order_date}, ${orderBody.cart_id}, ${orderBody.user_id})
            returning *
        `
        const response = this.query(queryString)
        return response
    }

}