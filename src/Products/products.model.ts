import CreateProduct from "./Executors/CreateProduct";
import GetProducts from "./Executors/GetProducts";
import { Product } from "./types";

export default class ProductsModel {

    getProducts() {
        return new GetProducts().execute()
    }

    createProduct(productBody: Product) {
        return new CreateProduct(productBody).execute()
    }

}