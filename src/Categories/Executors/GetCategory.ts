import DbQuery from "../../Abstract/DbQuery";

export default class GetCategory extends DbQuery {

    constructor(private categoryId: number) {
        super()
    }

    async execute() {

        const queryString = `select * from categories where id = ${this.categoryId}`
        const category = await this.query(queryString)
        return category
    }

}