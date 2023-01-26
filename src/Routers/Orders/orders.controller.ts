import { Request, Response } from 'express'
import HttpCreateOrder from './ControllerFunctions/HttpCreateOrder'
import HttpDeleteOrder from './ControllerFunctions/HttpDeleteOrder'
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

    httpDeleteOrder(req: Request, res: Response) {
        return new HttpDeleteOrder({req, res}).execute()
    }

}