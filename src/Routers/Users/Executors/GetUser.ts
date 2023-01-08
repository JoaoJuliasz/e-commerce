import DbQuery from "../../../Abstract/DbQuery";

export default class GetUser extends DbQuery {

    constructor(private userId: string) {
        super()
    }

    async execute() {

        const queryString = `select id, name, creationdate, birthday, avatar, email from users where id = '${this.userId}'`
        const response = await this.query(queryString)
        return response
    }

}      
