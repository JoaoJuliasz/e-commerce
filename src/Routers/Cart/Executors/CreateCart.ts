import DbQuery from "../../../Abstract/DbQuery";
import { CartBody } from "../types";

export default class CreateCart extends DbQuery {

    constructor(private userId: number) {
        super()
    }

    execute() {
        const queryString = `insert into user_cart (user_id)
            values (${this.userId})
            returning *
        `
        const response = this.query(queryString)
        return response
    }

}