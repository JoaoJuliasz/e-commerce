import { Request, Response } from 'express'
import HttpCreateOrder from './ControllerFunctions/HttpCreateOrder'
import HttpGetOrder from './ControllerFunctions/HttpGetOrder'
import HttpGetOrders from './ControllerFunctions/HttpGetOrders'

export default class OrdersController {

    httpGetOrders(req: Request, res: Response) {
        return new HttpGetOrders({req, res}).execute()
    }

    httpGetOrder(req: Request, res: Response) {
        return new HttpGetOrder({req, res}).execute()
    }

    httpCreateOrder(req: Request, res: Response) {
        return new HttpCreateOrder({req, res}).execute()
    }

}