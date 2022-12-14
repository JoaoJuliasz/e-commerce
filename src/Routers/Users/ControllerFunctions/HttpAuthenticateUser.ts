import { QueryResult } from "pg";
import { Params, QueryError } from "../../../types/types";
import HttpMethods from "../Abstract/HttpMethods";

export default class HttpAuthenticateUser extends HttpMethods<Promise<unknown>> {

    async execute() {
        const { req, res } = this.params
        const newUser = req.body
        const response = await this.usersModel.authenticateUser(newUser)

        if (response.error) {
            return res.status(400).json({
                error: response.message
            })
        }
        res.status(201).json(response)
    }

}