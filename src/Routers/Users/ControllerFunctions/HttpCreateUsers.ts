import { QueryResult } from "pg";
import { Params, QueryError } from "../../../types/types";
import bcrypt from 'bcrypt'
import HttpMethods from "../Abstract/HttpMethods";

export default class HttpCreateUsers extends HttpMethods<Promise<unknown>> {

    constructor(private params: Params) {
        super()
    }

    async execute() {
        const { req, res } = this.params
        const newUser = req.body
        const salt = await bcrypt.genSalt(10)
        newUser.password = await bcrypt.hash(newUser.password, salt)
        const response = await this.usersModel.createUser(newUser)

        if((response as QueryError).error) {
            res.status(400).json({
                error: (response as QueryError).message
            })
        }
        res.status(201).json((response as QueryResult).rows)
    }

}