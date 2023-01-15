import DbQuery from "../../../Abstract/DbQuery";

export default class GetUserCart extends DbQuery {

    constructor(private userId: string) {
        super()
    }

    execute() {
        const queryString = `select * from user_cart where user_id = ${this.userId}`
        const response = this.query(queryString)
        return response
    }

}