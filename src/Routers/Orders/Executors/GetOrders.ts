import DbQuery from "../../../Abstract/DbQuery";

export default class GetOrders extends DbQuery {

    constructor(private userId: string) {
        super()
    }

    execute() {
        const queryString = `select * from orders where user_id = ${this.userId}`
        const response = this.query(queryString)
        return response
    }

}