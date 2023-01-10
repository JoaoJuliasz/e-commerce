import DbQuery from "../../../Abstract/DbQuery";

export default class GetUserHistory extends DbQuery {

    constructor(private userId: string) {
        super()
    }

    execute() {
        const queryString = `select p.id as product_id, name, value, category_id, ph.id as history_id
         from products p left join products_history ph on p.id = ph.product_id where ph.user_id = ${this.userId}`
        const response = this.query(queryString)
        return response
    }

}