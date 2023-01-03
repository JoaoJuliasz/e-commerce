import DbQuery from "../../Abstract/DbQuery";

export default class GetProducts extends DbQuery {

    async execute() {
        const products = await this.query('select * from products')
        return products
    }

}