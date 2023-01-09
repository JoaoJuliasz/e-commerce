import { Request, Response } from 'express'
import HttpAddItemToHistory from './ControllerFunctions/HttpAddItemToHistory'
import HttpClearHistory from './ControllerFunctions/HttpClearHistory'
import HttpDeleteItemFromHistory from './ControllerFunctions/HttpDeleteItemFromHistory'
import HttpGetHistory from './ControllerFunctions/HttpGetHistory'

export default class HistoryController {


    httpGetHistory(req: Request, res: Response) {
        return new HttpGetHistory({req, res}).execute()
    }

    httpAddItemToHistory(req: Request, res: Response) {
        return new HttpAddItemToHistory({req, res}).execute()
    }


    httpDeleteItemFromHistory(req: Request, res: Response) {
        return new HttpDeleteItemFromHistory({req, res}).execute()
    }

    httpClearHistory(req: Request, res: Response) {
        return new HttpClearHistory({req, res}).execute()
    }

}