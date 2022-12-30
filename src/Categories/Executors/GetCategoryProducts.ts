import DbQuery from "../../Abstract/DbQuery";

export default class GetCategoryProducts extends DbQuery<Promise<unknown>>{

    constructor(private categoryId: number) {
        super()
    }

    async execute() {
        const categoryProducts = (await this.DB.start().query(
            'select * from products p left join categories c on p.category_id = c.id where c.id = $1',
            [this.categoryId])).rows
        return categoryProducts
    }

}