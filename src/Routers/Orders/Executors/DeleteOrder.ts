import DbQuery from "../../../Abstract/DbQuery";

export default class DeleteOrder extends DbQuery {

    constructor(private orderId: string) {
        super()
    }

    execute() {
        const queryString = `delete from orders where order_id=${this.orderId}`
        return this.query(queryString)
    }

}