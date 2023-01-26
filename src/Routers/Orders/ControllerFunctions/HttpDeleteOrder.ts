import { QueryResult } from "pg";
import { QueryError } from "../../../types/types";
import HttpMethods from "../Abstract/HttpMethods";

export default class HttpDeleteOrder extends HttpMethods<Promise<unknown>> {

    async execute() {
        const { req, res } = this.params
        const orderId = req.params.id

        const response = await this.ordersModel.deleteOrder(orderId)

        if ((response as QueryError).error) {
            return res.status(400).json({
                err: (response as QueryError).message
            })
        }

        res.status(200).json({
            message: 'Order delete!'
        })

    }

}