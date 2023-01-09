import DbQuery from "../../../Abstract/DbQuery";

export default class DeleteItemFromHistory extends DbQuery {

    constructor(private historyId: string) {
        super()
    }

    execute() {
        const queryString = `delete from products_history where id = ${this.historyId}`
        const response = this.query(queryString)
        return response
    }

}