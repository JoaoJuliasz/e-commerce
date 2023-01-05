import CategoriesModel from "../categories.model";

export default abstract class HttpMethods<T> {

    protected categoriesModel: CategoriesModel = new CategoriesModel()

    abstract execute(): T

}