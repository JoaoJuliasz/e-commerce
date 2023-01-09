import { QueryError } from "../../../types/types";
import HttpMethods from "../Abstract/HttpMethods";

export default class HttpAddItemToHistory extends HttpMethods<Promise<unknown>>{

    async execute() {
        const { req, res } = this.params
        const historyBody = req.body

        const response = await this.historyModel.addItemToHistory(historyBody)

        if((response as QueryError).error) {
            return res.status(400).json({
                error: (response as QueryError).message
            })
        }

        return res.status(201).json({
            message: 'Item added to history!'
        })
    }

}