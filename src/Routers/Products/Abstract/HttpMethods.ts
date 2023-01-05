import ProductsModel from "../products.model";

export default abstract class HttpMethods<T> {

    protected productsModel: ProductsModel = new ProductsModel()

    abstract execute(): T

}