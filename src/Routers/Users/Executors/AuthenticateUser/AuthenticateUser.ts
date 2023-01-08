import { User, } from "../../types";
import bcrypt from 'bcrypt'

export default class AuthenticateUser {

    constructor(private password: string, private user: { id: number, email: string, password: string }) { }

    async execute() {
        if (this.user) {
            return await bcrypt.compare(this.password, this.user.password)
        }
        return false
    }

}