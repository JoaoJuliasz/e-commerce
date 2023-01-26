import DbQuery from "../../../Abstract/DbQuery";

export default class GetUserOrders extends DbQuery {

    constructor(private userId: string) {
        super()
    }

    execute() {
        const queryString = `select * from orders where user_id=${this.userId}`
        return this.query(queryString)
    }

}