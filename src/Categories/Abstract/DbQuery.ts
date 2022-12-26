import DB from '../../database/Database'

export default abstract class DbQuery<T> {

    protected DB = new DB()

    abstract execute(): T

}