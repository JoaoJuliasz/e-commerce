import { Params } from "../../../types/types";
import FavoriteModel from "../favorites.model";

export default abstract class HttpMethods<T> {

    protected favoriteModel: FavoriteModel = new FavoriteModel()

    constructor(protected params: Params) { }

    abstract execute(): T

}