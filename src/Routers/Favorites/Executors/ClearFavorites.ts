import DbQuery from "../../../Abstract/DbQuery";

export default class ClearFavorites extends DbQuery {

    constructor(private userId: string) {
        super()
    }

    execute() {
        const queryString = `delete from user_favorites where user_id = ${this.userId}`
        const response = this.query(queryString)
        return response
    }

}