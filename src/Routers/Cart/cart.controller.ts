import { Request, Response } from 'express'
import HttpCreateCart from './ControllerFunctions/HttpCreateCart'
import HttpAddItemOnCart from './ControllerFunctions/HttpAddItemOnCart'
import HttpGetCart from './ControllerFunctions/HttpGetCart'

export default class CartController {

    httpGetCart(req: Request, res: Response) {
        return new HttpGetCart({ req, res }).execute()
    }

    httpCreateCart(req: Request, res: Response) {
        return new HttpCreateCart({ req, res }).execute()
    }

    httpAddItemOnCart(req: Request, res: Response) {
        return new HttpAddItemOnCart({ req, res }).execute()
    }

}