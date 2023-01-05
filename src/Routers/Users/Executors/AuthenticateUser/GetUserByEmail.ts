import DbQuery from "../../../../Abstract/DbQuery";

export default class GetUserByEmail extends DbQuery {

    constructor(private userLogin: { email: string, password: string }) {
        super()
    }

    async execute() {

        const queryString = `select * from users where email = '${this.userLogin.email}'`
        const response = await this.query(queryString)
        return response
    }

}