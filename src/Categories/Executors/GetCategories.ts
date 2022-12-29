import DbQuery from "../../Abstract/DbQuery"

export default class GetCategories extends DbQuery<Promise<unknown>>{

    async execute() {
        const categories = await (await this.DB.start().query("select * from categories")).rows
        return categories
    }

}