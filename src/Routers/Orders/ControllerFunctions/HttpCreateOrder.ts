import { QueryResult } from "pg";
import { QueryError } from "../../../types/types";
import HttpMethods from "../Abstract/HttpMethods";

export default class HttpCreateOrder extends HttpMethods<Promise<unknown>> {

    async execute() {
        const { req, res } = this.params
        const orderBody = req.body

        const response = await this.ordersModel.createOrder(orderBody)

        if ((response as QueryError).error) {
            return res.status(400).json({
                err: (response as QueryError).message
            })
        }

        res.status(200).json({
            message: 'Order stored!',
            content: (response as QueryResult).rows
        })

    }

}