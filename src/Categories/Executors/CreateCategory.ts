import DbQuery from '../Abstract/DbQuery'

export default class CreateCategory extends DbQuery<Promise<unknown>>{

    constructor(private category: string) {
        super()
    }

    async execute() {
        try {
            const response = await this.DB.start().query("insert into categories (name) values($1)", [this.category])
            return response
        } catch (error: any) {
            return error.message
        }
    }

}