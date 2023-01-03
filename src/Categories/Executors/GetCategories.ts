import DbQuery from "../../Abstract/DbQuery"

export default class GetCategories extends DbQuery {

    async execute() {
        const categories = await this.query("select * from categories")
        console.log(categories)
        return categories
    }

}