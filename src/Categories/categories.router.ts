import express from 'express';
import CategoriesController from './categories.controller';

export default class CategoriesRouter {

    private categoriesController: CategoriesController = new CategoriesController()

    execute() {
        const categoriesRouter = express.Router()

        categoriesRouter.get('/', this.categoriesController.httpGetCategories)
        categoriesRouter.get('/:id', this.categoriesController.httpGetCategory)
        categoriesRouter.post('/', this.categoriesController.httpCreateCategory)
        categoriesRouter.put('/:id', this.categoriesController.httpUpdateCategory)
        categoriesRouter.delete('/:id', this.categoriesController.httpDeleteCategory)

        return categoriesRouter
    }

}