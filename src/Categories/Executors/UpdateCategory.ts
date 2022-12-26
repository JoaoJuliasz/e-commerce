import DbQuery from "../Abstract/DbQuery"

export default class UpdateCategory extends DbQuery<Promise<unknown>>{

    constructor(private name: string, private categoryId: number) {
        super()
    }

    async execute() {
        try {
            const response = await this.DB.start().query("update categories set name = $1 where id = $2", [this.name, this.categoryId])
            return response
        } catch (error: any) {
            return error.message
        }
    }
}