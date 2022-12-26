import { Request, Response } from 'express'
import HttpCreateCategory from './ControllerFunctions/HttpCreateCategory'
import HttpDeleteCategory from './ControllerFunctions/HttpDeleteCategory'
import HttpGetCategories from './ControllerFunctions/HttpGetCategories'
import HttpGetCategory from './ControllerFunctions/HttpGetCategory'
import HttpUpdateCategory from './ControllerFunctions/HttpUpdateCategory'

export default class CategoriesController {

    async httpGetCategories(_: Request, res: Response) {
        await new HttpGetCategories(res).execute()
    }

    async httpGetCategory(req: Request, res: Response) {
        await new HttpGetCategory({req, res}).execute()
    }

    async httpCreateCategory(req: Request, res: Response) {
        await new HttpCreateCategory({ req, res }).execute()
    }

    async httpUpdateCategory(req: Request, res: Response) {
        await new HttpUpdateCategory({ req, res }).execute()
    }

    async httpDeleteCategory(req: Request, res: Response) {
        await new HttpDeleteCategory({req, res}).execute()
    }
}