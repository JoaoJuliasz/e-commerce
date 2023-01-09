import DbQuery from "../../../Abstract/DbQuery"

export default class ClearHistory extends DbQuery {

    constructor(private userId: string) {
        super()
    }

    execute() {
        const queryString = `delete from products_history where user_id = ${this.userId}`
        const response = this.query(queryString)
        return response
    }

}