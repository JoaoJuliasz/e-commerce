import DbQuery from "../../../Abstract/DbQuery";
import { Favorite } from "../types";

export default class AddItemFavorites extends DbQuery {

    constructor(private favoriteBody: Favorite) {
        super()
    }

    execute() {
        const newFavorite = Object.assign(this.favoriteBody, {
            favorite_date: new Date().getTime()
        })

        const queryString = `insert into user_favorites (favorite_date, product_id, user_id)
            values (${newFavorite.favorite_date}, ${newFavorite.product_id}, ${newFavorite.user_id}) returning *
        `
        const response = this.query(queryString)
        return response
    }

}