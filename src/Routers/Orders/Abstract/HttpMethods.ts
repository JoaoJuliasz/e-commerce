import { Params } from "../../../types/types";
import OrdersModel from "../orders.model";

export default abstract class HttpMethods<T> {

    protected ordersModel: OrdersModel = new OrdersModel()

    constructor(protected params: Params) { }

    abstract execute(): T

}