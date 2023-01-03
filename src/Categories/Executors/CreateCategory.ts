import DbQuery from '../../Abstract/DbQuery'

export default class CreateCategory extends DbQuery{

    constructor(private category: string) {
        super()
    }

    execute() {
        const queryString = `insert into categories (name) values('${this.category}') returning *`
        return this.query(queryString)
    }

}