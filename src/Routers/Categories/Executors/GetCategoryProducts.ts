import DbQuery from "../../../Abstract/DbQuery";

export default class GetCategoryProducts extends DbQuery{

    constructor(private categoryId: number) {
        super()
    }

    async execute() {
        const queryString = `select * from products p left join categories c on p.category_id = c.id where c.id = ${this.categoryId}`
        const categoryProducts = await this.query(queryString)
        return categoryProducts
    }

}