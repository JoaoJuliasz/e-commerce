import DbQuery from "../../../Abstract/DbQuery";

export default class DeleteCategory extends DbQuery {

    constructor(private categoryId: number) {
        super()
    }

    async execute() {
        const deletedCategory = await this.query(`delete from categories where id = ${this.categoryId}`)
        return deletedCategory
    }

}