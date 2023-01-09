import { QueryResult } from "pg";
import { QueryError } from "../../../types/types";
import HttpMethods from "../Abstract/HttpMethods";

export default class HttpClearHistory extends HttpMethods<Promise<unknown>> {

    async execute() {
        const { req, res } = this.params
        const userId = req.body.user_id

        const response = await this.historyModel.clearHistory(userId)

        if ((response as QueryError).error) {
            return res.status(400).json({
                error: (response as QueryError).message
            })
        }

        return res.status(200).json({
            message: 'Removed all items from history!'
        })
    }

}