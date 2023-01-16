import { QueryResult } from "pg";
import AddItemOnCart from "./Executors/AddItemOnCart";
import CreateCart from "./Executors/CreateCart";
import DeleteCart from "./Executors/DeleteCart";
import GetCart from "./Executors/GetCart/GetCart";
import GetCartProducts from "./Executors/GetCart/GetCartProducts";
import GetCartTotal from "./Executors/GetCart/GetCartTotal";
import UpdateCartItem from "./Executors/UpdateCartItem";
import { CartBody } from "./types";

export default class CartModel {

    async getCart(cartId: string) {
        const products = await new GetCartProducts(cartId).execute()
        const cart = await new GetCart(cartId).execute()
        const cartTotal = await new GetCartTotal(cartId).execute()
        const cartRows = (cart as QueryResult).rows[0]
        return { cart: { ...cartRows, ...(cartRows && { products: (products as QueryResult).rows }) }, total: (cartTotal as QueryResult).rows[0] }
    }

    async createCart(cartBody: CartBody) {
        const cart = await new CreateCart(cartBody.user_id).execute()
        return new AddItemOnCart(cartBody, (cart as QueryResult).rows[0].id).execute()
    }

    addItemOnCart(cartId: string, cartBody: CartBody) {
        return new UpdateCartItem(cartBody, cartId).execute()
    }

    deleteCart(cartId: string) {
        return new DeleteCart(cartId).execute()
    }

}