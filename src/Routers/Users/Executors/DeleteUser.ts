import DbQuery from "../../../Abstract/DbQuery"

export default class DeleteUser extends DbQuery {

    constructor(private userId: string) {
        super()
    }

    execute() {
        const queryString = `delete from users where id = ${this.userId}`
        const response = this.query(queryString)
        return response
    }

}