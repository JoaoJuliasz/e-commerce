import { QueryResult } from "pg";
import { QueryError } from "../../../types/types";
import HttpMethods from "../Abstract/HttpMethods";

export default class HttpDeleteItemFromHistory extends HttpMethods<Promise<unknown>> {

    async execute() {
        const { req, res } = this.params
        const historyId = req.params.id

        const response = await this.historyModel.deleteItemFromHistory(historyId)

        if ((response as QueryError).error) {
            return res.status(400).json({
                error: (response as QueryError).message
            })
        }

        return res.status(200).json({
            message: 'Item removed from history!'
        })
    }

}