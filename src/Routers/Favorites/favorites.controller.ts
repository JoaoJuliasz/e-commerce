import { Request, Response } from 'express'
import HttpAddItemFavorites from './ControllerFunctions/HttpAddItemFavorites'
import HttpClearFavorites from './ControllerFunctions/HttpClearFavorites'
import HttpDeleteItemFavorites from './ControllerFunctions/HttpDeleteItemFavorites'
import HttpGetFavorites from './ControllerFunctions/HttpGetFavorites'

export default class FavoriteController {

    httpGetFavorites(req: Request, res: Response) {
        return new HttpGetFavorites({ req, res }).execute()
    }

    httpAddItemOnFavorites(req: Request, res: Response) {
        return new HttpAddItemFavorites({ req, res }).execute()
    }

    httpDeleteItemFromFavorites(req: Request, res: Response) {
        return new HttpDeleteItemFavorites({ req, res }).execute()
    }

    httpClearFavorites(req: Request, res: Response) {
        return new HttpClearFavorites({ req, res }).execute()
    }

}