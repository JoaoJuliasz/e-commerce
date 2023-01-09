import { Params } from "../../../types/types";
import HistoryModel from "../history.model";

export default abstract class HttpMethods<T> {

    protected historyModel: HistoryModel = new HistoryModel()

    constructor(protected params: Params) { }

    abstract execute(): T

}