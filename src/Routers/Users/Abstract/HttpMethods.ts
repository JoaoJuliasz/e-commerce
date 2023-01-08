import { Params } from "../../../types/types";
import UsersModel from "../users.model";

export default abstract class HttpMethods<T> {

    constructor(protected params: Params) { }

    protected usersModel: UsersModel = new UsersModel()

    abstract execute(): T

}