import UsersModel from "../users.model";

export default abstract class HttpMethods<T> {

    protected usersModel: UsersModel = new UsersModel()

    abstract execute(): T

}