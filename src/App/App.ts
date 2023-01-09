import express from 'express'
import CategoriesRouter from '../Routers/Categories/categories.router'
import HistoryRouter from '../Routers/History/history.router'
import ProductsRouter from '../Routers/Products/products.router'
import UsersRouter from '../Routers/Users/users.router'

export default class App {

    execute() {
        const app = express()

        app.use(express.json())

        app.use('/categories', new CategoriesRouter().execute())
        app.use('/products', new ProductsRouter().execute())
        app.use('/users', new UsersRouter().execute())
        app.use('/history', new HistoryRouter().execute())

        return app
    }

}