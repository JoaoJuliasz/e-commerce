import { QueryResult } from "pg";
import { QueryError } from "../../../types/types";
import HttpMethods from "../Abstract/HttpMethods";

export default class HttpGetFavorites extends HttpMethods<Promise<unknown>> {

    async execute() {
        const { req, res } = this.params
        const userId = req.body.userId

        const response = await this.favoriteModel.getFavorites(userId)

        if ((response as QueryError).error) {
            return res.status(400).json({
                error: (response as QueryError).message
            })
        }

        res.status(200).json({
            content: (response as QueryResult).rows
        })

    }

}