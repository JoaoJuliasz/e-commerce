import DbQuery from "../../../Abstract/DbQuery";
import { NewUser } from "../types";
import bcrypt from 'bcrypt'

export default class CreateUser extends DbQuery {

    constructor(private newUser: NewUser) {
        super()
    }

    async execute() {

        const salt = await bcrypt.genSalt(10)
        const password = await bcrypt.hash(this.newUser.password, salt)
        const newUser = Object.assign(this.newUser, {
            creationDate: new Date().getTime(),
            password: password
        })
        const queryString = `insert into users (name, password, creationDate, avatar, email)
        values ('${newUser.name}', '${newUser.password}', ${newUser.creationDate},
         '${newUser.avatar}', '${newUser.email}') returning *`
        const response = await this.query(queryString)
        return response
    }

}