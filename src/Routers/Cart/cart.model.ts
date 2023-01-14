import { QueryResult } from "pg";
import AddItemOnCart from "./Executors/AddItemOnCart";
import CreateCart from "./Executors/CreateCart";
import GetCart from "./Executors/GetCart/GetCart";
import GetCartProducts from "./Executors/GetCart/GetCartProducts";
import UpdateCartItem from "./Executors/UpdateCartItem";
import { CartBody } from "./types";

export default class CartModel {

    async getCart(cartId: string) {
        const products = await new GetCartProducts(cartId).execute()
        const cart = await new GetCart(cartId).execute()
        return { cart: { ...(cart as QueryResult).rows[0], products: (products as QueryResult).rows } }
    }

    async createCart(cartBody: CartBody) {
        const cart = await new CreateCart(cartBody.user_id).execute()
        return new AddItemOnCart(cartBody, (cart as QueryResult).rows[0].id).execute()
    }

    addItemOnCart(cartId: string, cartBody: CartBody) {
        return new UpdateCartItem(cartBody, cartId).execute()
    }

}