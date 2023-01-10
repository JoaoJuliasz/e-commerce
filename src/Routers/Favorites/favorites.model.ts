import AddItemFavorites from "./Executors/AddItemFavorites";
import GetFavorites from "./Executors/GetFavorites";
import { Favorite } from "./types";

export default class FavoriteModel {

    getFavorites(userId: string) {
        return new GetFavorites(userId).execute()
    }
    addItemFavorites(favoriteBody: Favorite) {
        return new AddItemFavorites(favoriteBody).execute()
    }

}