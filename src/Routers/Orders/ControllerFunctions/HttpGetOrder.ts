import HttpMethods from "../Abstract/HttpMethods";

export default class HttpGetOrder extends HttpMethods<Promise<unknown>> {

    async execute() {
        const { req, res } = this.params
        const orderId = req.params.id

        const response = await this.ordersModel.getOrder(orderId)

        res.status(200).json({
            content: response
        })

    }

}