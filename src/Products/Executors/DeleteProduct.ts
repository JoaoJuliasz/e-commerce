import DbQuery from "../../Abstract/DbQuery";

export default class DeleteProduct extends DbQuery<Promise<number>> {

    constructor(private productId: number) {
        super()
    }

    async execute() {

        const deletedProduct = (await this.DB.start().query('delete from products where id = $1', [this.productId])).rowCount
        return deletedProduct

    }

}