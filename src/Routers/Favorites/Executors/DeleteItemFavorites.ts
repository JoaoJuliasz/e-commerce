import DbQuery from "../../../Abstract/DbQuery";

export default class DeleteItemFavorites extends DbQuery {

    constructor(private favoriteId: string) {
        super()
    }

    execute() {
        const queryString = `delete from user_favorites where id = ${this.favoriteId}`
        const response = this.query(queryString)
        return response
    }

}