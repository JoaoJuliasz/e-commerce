import {  User } from "../../types";
import bcrypt from 'bcrypt'

export default class AuthenticateUser{

    constructor(private password: string, private user: User) {}

    async execute() {
        return await bcrypt.compare(this.password, this.user.password)
    }

}