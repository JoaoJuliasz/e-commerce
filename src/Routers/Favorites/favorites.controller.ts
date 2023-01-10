import { Request, Response } from 'express'
import HttpAddItemFavorites from './ControllerFunctions/HttpAddItemFavorites'
import HttpGetFavorites from './ControllerFunctions/HttpGetFavorites'

export default class FavoriteController {

    httpGetFavorites(req: Request, res: Response) {
        return new HttpGetFavorites({ req, res }).execute()
    }

    httpAddItemOnFavorites(req: Request, res: Response) {
        return new HttpAddItemFavorites({ req, res }).execute()
    }

}