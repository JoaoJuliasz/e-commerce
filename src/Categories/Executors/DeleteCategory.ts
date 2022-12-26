import DbQuery from "../Abstract/DbQuery";

export default class DeleteCategory extends DbQuery<Promise<unknown>> {

    constructor(private categoryId: number) {
        super()
    }

    async execute() {
        const deletedCategory = await (await this.DB.start().query('delete from categories where id = $1', [this.categoryId])).rowCount
        return deletedCategory
    }

}