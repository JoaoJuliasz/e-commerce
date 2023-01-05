import { Request, Response } from 'express'
import HttpCreateProduct from './ControllerFunctions/HttpCreateProduct'
import HttpDeleteProduct from './ControllerFunctions/HttpDeleteProduct'
import HttpGetProduct from './ControllerFunctions/HttpGetProduct'
import HttpGetProducts from './ControllerFunctions/HttpGetProducts'
import HttpQueryProducts from './ControllerFunctions/HttpQueryProducts'
import HttpUpdateProduct from './ControllerFunctions/HttpUpdateProduct'

export default class ProductsController {


    httpGetProducts(_: Request, res: Response) {
        return new HttpGetProducts(res).execute()
    }

    httpGetProduct(req: Request, res: Response) {
        return new HttpGetProduct({ req, res }).execute()
    }

    httpQueryProducts(req: Request<{}, {}, {}, { q: string }>, res: Response) {
        return new HttpQueryProducts({req, res}).execute()
    }

    httpCreateProduct(req: Request, res: Response) {
        return new HttpCreateProduct({ req, res }).execute()
    }

    httpUpdateProduct(req: Request, res: Response) {
        return new HttpUpdateProduct({ req, res }).execute()
    }

    httpDeleteProduct(req: Request, res: Response) {
        return new HttpDeleteProduct({ req, res }).execute()
    }

}