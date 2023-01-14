import { Params } from "../../../types/types";
import CartModel from "../cart.model";

export default abstract class HttpMethods<T> {

    protected cartModel: CartModel = new CartModel()

    constructor(protected params: Params) { }

    abstract execute(): T

}