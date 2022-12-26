import express from 'express'
import CategoriesRouter from '../Categories/categories.router'

export default class App {

    execute() {
        const app = express()

        app.use(express.json())

        app.use('/categories', new CategoriesRouter().execute())

        return app
    }

}