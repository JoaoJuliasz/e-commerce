import { Request, Response } from 'express'
import HttpCreateProduct from './ControllerFunctions/HttpCreateProduct'
import HttpGetProducts from './ControllerFunctions/HttpGetProducts'

export default class ProductsController {


    httpGetProducts(_: Request, res: Response) {
        return new HttpGetProducts(res).execute()
    }

    httpCreateProduct(req: Request, res: Response) {
        return new HttpCreateProduct({req, res}).execute()
    }

}