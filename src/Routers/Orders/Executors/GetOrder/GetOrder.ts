import DbQuery from "../../../../Abstract/DbQuery";

export default class GetOrder extends DbQuery {

    constructor(private orderId: string) {
        super()
    }

    execute() {

        const queryString = `select * from orders where order_id = ${this.orderId}`
        const response = this.query(queryString)
        return response

    }

}