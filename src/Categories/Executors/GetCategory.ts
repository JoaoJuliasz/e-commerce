import DbQuery from "../../Abstract/DbQuery";

export default class GetCategory extends DbQuery<Promise<unknown>>{

    constructor(private categoryId: number) {
        super()
    }

    async execute() {
        const category = await (await this.DB.start().query('select * from categories where id = $1', [this.categoryId])).rows
        return category
    }

}