import { QueryResult } from "pg";
import { Params, QueryError } from "../../../types/types";
import HttpMethods from "../Abstract/HttpMethods";

export default class HttpGetUser extends HttpMethods<Promise<unknown>> {

    async execute() {
        const { req, res } = this.params

        const userId = String(req.params.id)

        const response = await this.usersModel.getUser(userId)

        if ((response as QueryError).error) {
            return res.status(400).json({
                err: (response as QueryError).message
            })
        }

        if ((response as QueryResult).rows.length === 0) {
            return res.status(400).json({
                err: `User with id ${userId} not exists`
            })
        }

        res.status(200).json((response as QueryResult).rows[0])
    }

}