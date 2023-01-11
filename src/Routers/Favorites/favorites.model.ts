import AddItemFavorites from "./Executors/AddItemFavorites";
import ClearFavorites from "./Executors/ClearFavorites";
import DeleteItemFavorites from "./Executors/DeleteItemFavorites";
import GetFavorites from "./Executors/GetFavorites";
import { Favorite } from "./types";

export default class FavoriteModel {

    getFavorites(userId: string) {
        return new GetFavorites(userId).execute()
    }
    
    addItemFavorites(favoriteBody: Favorite) {
        return new AddItemFavorites(favoriteBody).execute()
    }

    deleteItemFavorites(favoriteId: string) {
        return new DeleteItemFavorites(favoriteId).execute()
    }

    clearFavorites(userId: string) {
        return new ClearFavorites(userId).execute()
    }

}