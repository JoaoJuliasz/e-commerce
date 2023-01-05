import { QueryResult } from "pg"
import GetUser from "../GetUser"
import AuthenticateUser from "./AuthenticateUser"
import GetUserByEmail from "./GetUserByEmail"

export default class AuthenticatedUser {

    constructor(private userLogin: { email: string, password: string }) { }

    async execute() {
        const user: { id: number, email: string, password: string } = (await new GetUserByEmail(this.userLogin).execute() as QueryResult).rows[0]
        const authenticateUser = await new AuthenticateUser(this.userLogin.password, user).execute()
        const getUser = new GetUser(user.id).execute()
        return authenticateUser ? (await getUser as QueryResult).rows[0] : { error: 'error', message: 'User email/password is incorrect!' }
    }

}