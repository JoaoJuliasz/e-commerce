import DbQuery from "../../../Abstract/DbQuery";

export default class GetProduct extends DbQuery {

    constructor(private productId: number) {
        super()
    }

    async execute() {

        const product = await this.query(`select * from products where id = ${this.productId}`)
        return product
    }

}