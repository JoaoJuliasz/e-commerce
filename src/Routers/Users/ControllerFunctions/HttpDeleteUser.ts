import { QueryResult } from "pg";
import { QueryError } from "../../../types/types";
import HttpMethods from "../Abstract/HttpMethods";

export default class HttpDeleteUser extends HttpMethods<Promise<any>> {

    async execute() {
        const { req, res } = this.params
        const userId = req.params.id


        const response = await this.usersModel.deleteUser(userId)

        if ((response as QueryError).error) {
            return res.status(400).json({
                err: (response as QueryError).message
            })
        }

        if ((response as QueryResult).rowCount === 0) {
            return res.status(400).json({
                error: `User with id ${userId}, not exists`
            })
        }

        res.status(200).json({
            message: 'User deleted!',
        })
    }

}