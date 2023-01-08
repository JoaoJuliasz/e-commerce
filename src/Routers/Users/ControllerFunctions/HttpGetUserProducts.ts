import { QueryResult } from "pg";
import { QueryError } from "../../../types/types";
import HttpMethods from "../Abstract/HttpMethods";

export default class HttpGetUserProducts extends HttpMethods<Promise<any>> {

    async execute() {

        const { req, res } = this.params
        const userId = req.params.id

        const response = await this.usersModel.getUserProducts(userId)

        if ((response as QueryError).error) {
            return res.status(400).json({
                err: (response as QueryError).message
            })
        }

        res.status(200).json({
            userProducts: (response as QueryResult).rows
        })

    }

}