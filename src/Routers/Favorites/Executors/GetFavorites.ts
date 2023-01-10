import DbQuery from "../../../Abstract/DbQuery";

export default class GetFavorites extends DbQuery {

    constructor(private userId: string) {
        super()
    }

    execute() {
        const queryString = `select p.id as product_id, name, value, category_id, uf.id as history_id
        from products p left join user_favorites uf on p.id = uf.product_id where uf.user_id = ${this.userId}`
        const response = this.query(queryString)
        return response
    }

}