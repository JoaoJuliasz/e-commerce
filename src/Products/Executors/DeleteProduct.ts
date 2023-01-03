import DbQuery from "../../Abstract/DbQuery";

export default class DeleteProduct extends DbQuery {

    constructor(private productId: number) {
        super()
    }

        async execute() {
        const queryString = `delete from products where id = ${this.productId}` 
        const deletedProduct = await this.query(queryString)
        return deletedProduct

    }

}