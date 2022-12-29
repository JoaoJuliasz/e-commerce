import express from 'express'
import CategoriesRouter from '../Categories/categories.router'
import ProductsRouter from '../Products/products.router'

export default class App {

    execute() {
        const app = express()

        app.use(express.json())

        app.use('/categories', new CategoriesRouter().execute())
        app.use('/products', new ProductsRouter().execute())

        return app
    }

}