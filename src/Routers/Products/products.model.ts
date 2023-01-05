import CreateProduct from "./Executors/CreateProduct";
import DeleteProduct from "./Executors/DeleteProduct";
import GetProduct from "./Executors/GetProduct";
import GetProducts from "./Executors/GetProducts";
import QueryProducts from "./Executors/QueryProducts";
import UpdateProduct from "./Executors/UpdateProduct";
import { Product } from "./types";

export default class ProductsModel {

    getProducts() {
        return new GetProducts().execute()
    }

    getProduct(productId: number) {
        return new GetProduct(productId).execute()
    }
    queryProducts(findQuery: string) {
        return new QueryProducts(findQuery).execute()
    }

    createProduct(productBody: Product) {
        return new CreateProduct(productBody).execute()
    }

    updateProduct(productBody: Product, productId: number) {
        return new UpdateProduct(productBody, productId).execute()
    }

    deleteProduct(productId: number) {
        return new DeleteProduct(productId).execute()
    }

}