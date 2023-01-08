import DbQuery from "../../../Abstract/DbQuery";
import { User } from "../types";

export default class UpdateUser extends DbQuery {

    constructor(private user: Omit<User, 'password'>, private userId: string) {
        super()
    }

    async execute() {
        const queryString = `update users 
        set name = '${this.user.name}', avatar = '${this.user.avatar}', 
        ${this.user.birthday ? `birthday = ${this.user.birthday}, `: ''}
        email='${this.user.email}'
        where id = ${this.userId} returning *`
        const response = await this.query(queryString)
        return response
    }

}