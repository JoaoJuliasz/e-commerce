import { QueryResult, QueryResultRow } from "pg";
import GetCartPaymentMethod from "../Cart/Executors/GetCart/GetCartPaymentMethod";
import GetCartProducts from "../Cart/Executors/GetCart/GetCartProducts";
import GetCartTotal from "../Cart/Executors/GetCart/GetCartTotal";
import CreateOrder from "./Executors/CreateOrder";
import GetOrder from "./Executors/GetOrder/GetOrder";
import GetOrders from "./Executors/GetOrders";
import { OrderBody } from "./types";

export default class OrdersModel {

    getOrders(userId: string) {
        return new GetOrders(userId).execute()
    }

    async getOrder(orderId: string) {
        const order = await new GetOrder(orderId).execute()
        const orderRow = (order as QueryResult).rows[0]
        const products = await new GetCartProducts(orderRow.cart_id).execute()
        const cartTotal = await new GetCartTotal(orderRow.cart_id).execute()
        const paymentMethod = await new GetCartPaymentMethod(orderRow.cart_id).execute()
        return { order: { ...orderRow, ...(orderRow && { products: (products as QueryResult).rows }) }, payment: { method: (paymentMethod as QueryResult).rows[0] }, total: (cartTotal as QueryResult).rows[0] }
    }

    createOrder(orderBody: OrderBody) {
        return new CreateOrder(orderBody).execute()
    }

}