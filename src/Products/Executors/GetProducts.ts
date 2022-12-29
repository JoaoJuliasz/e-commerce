import DbQuery from "../../Abstract/DbQuery";

export default class GetProducts extends DbQuery<Promise<unknown>> {

    async execute() {
        const products = (await this.DB.start().query('select * from products'))
        return products.rows
    }

}