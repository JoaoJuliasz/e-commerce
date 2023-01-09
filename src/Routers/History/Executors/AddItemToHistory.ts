import DbQuery from "../../../Abstract/DbQuery";
import { History } from "../types";

export default class AddItemToHistory extends DbQuery {

    constructor(private historyBody: History) {
        super()
    }

    async execute() {
        const historyItem = Object.assign(this.historyBody, {
            visit_date: new Date().getTime(),
        })

        const queryString = `insert into products_history (visit_date, user_id, product_id)
         values(${historyItem.visit_date}, ${historyItem.user_id}, ${historyItem.product_id}) returning *`
         
        const response = await this.query(queryString)
        return response
    }

}