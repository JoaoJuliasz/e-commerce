import DbQuery from "../../Abstract/DbQuery"

export default class UpdateCategory extends DbQuery{

    constructor(private name: string, private categoryId: number) {
        super()
    }

    async execute() {
        const queryString = `update categories set name = '${this.name}' where id = ${this.categoryId} returning *`
        const response = await this.query(queryString)
        return response
    }
}