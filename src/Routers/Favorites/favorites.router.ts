import express from 'express'
import FavoriteController from './favorites.controller'

export default class FavoriteRouter {

    private favoriteController: FavoriteController = new FavoriteController()

    execute() {
        const favoriteRouter = express.Router()

        favoriteRouter.post('/', this.favoriteController.httpGetFavorites)
        favoriteRouter.post('/add', this.favoriteController.httpAddItemOnFavorites)
        favoriteRouter.delete('/:id', this.favoriteController.httpDeleteItemFromFavorites)
        favoriteRouter.post('/clear', this.favoriteController.httpClearFavorites)

        return favoriteRouter
    }

}