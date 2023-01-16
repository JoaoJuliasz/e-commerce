import express from 'express'
import CartRouter from '../Routers/Cart/cart.router'
import CategoriesRouter from '../Routers/Categories/categories.router'
import FavoriteRouter from '../Routers/Favorites/favorites.router'
import HistoryRouter from '../Routers/History/history.router'
import OrdersRouter from '../Routers/Orders/orders.router'
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
        app.use('/favorite', new FavoriteRouter().execute())
        app.use('/cart', new CartRouter().execute())
        app.use('/orders', new OrdersRouter().execute())

        return app
    }

}