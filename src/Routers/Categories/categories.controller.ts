import { Request, Response } from 'express'
import HttpCreateCategory from './ControllerFunctions/HttpCreateCategory'
import HttpDeleteCategory from './ControllerFunctions/HttpDeleteCategory'
import HttpGetCategories from './ControllerFunctions/HttpGetCategories'
import HttpGetCategory from './ControllerFunctions/HttpGetCategory'
import HttpGetCategoryProducts from './ControllerFunctions/HttpGetCategoryProducts'
import HttpUpdateCategory from './ControllerFunctions/HttpUpdateCategory'

export default class CategoriesController {

    httpGetCategories(_: Request, res: Response) {
        new HttpGetCategories(res).execute()
    }

    httpGetCategory(req: Request, res: Response) {
        new HttpGetCategory({ req, res }).execute()
    }

    httpGetCategoryProducts(req: Request, res: Response) {
        new HttpGetCategoryProducts({ req, res }).execute()
    }

    httpCreateCategory(req: Request, res: Response) {
        new HttpCreateCategory({ req, res }).execute()
    }

    httpUpdateCategory(req: Request, res: Response) {
        new HttpUpdateCategory({ req, res }).execute()
    }

    httpDeleteCategory(req: Request, res: Response) {
        new HttpDeleteCategory({ req, res }).execute()
    }
}