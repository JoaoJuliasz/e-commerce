import { QueryResult } from "pg";
import { QueryError } from "../../../types/types";
import HttpMethods from "../Abstract/HttpMethods";

export default class HttpUpdateUser extends HttpMethods<Promise<unknown>> {

    async execute() {
        const { req, res } = this.params
        const userBody = req.body
        const userId = req.params.id

        const response = await this.usersModel.updateUser(userBody, userId)

        if ((response as QueryError).error) {
            return res.status(400).json({
                err: (response as QueryError).message
            })
        }

        res.status(200).json({
            message: 'User updated!',
            user: (response as QueryResult).rows[0]
        })
    }

}