import DbQuery from "../../../Abstract/DbQuery";

export default class QueryProducts extends DbQuery {

    constructor(private findQuery: string) {
        super()
    }

    async execute(){
        const queryString = `select * from products where name ilike '%${this.findQuery}%'`
        const response = await this.query(queryString)
        return response
    }

}