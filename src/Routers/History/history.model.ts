import AddItemToHistory from "./Executors/AddItemToHistory";
import ClearHistory from "./Executors/ClearHistory";
import DeleteItemFromHistory from "./Executors/DeleteItemFromHistory";
import GetUserHistory from "./Executors/GetUserHistory";
import { History } from "./types";

export default class HistoryModel {


    getUserHistory(userId: string) {
        return new GetUserHistory(userId).execute()
    }

    addItemToHistory(historyBody: History) {
        return new AddItemToHistory(historyBody).execute()
    }

    deleteItemFromHistory(historyId: string) {
        return new DeleteItemFromHistory(historyId).execute()
    }

    clearHistory(userId: string) {
        return new ClearHistory(userId).execute()
    }

}