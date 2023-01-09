import express from 'express'
import HistoryController from './history.controller'

export default class HistoryRouter {

    private historyController: HistoryController = new HistoryController()

    execute() {

        const historyRouter = express.Router()

        historyRouter.post('/', this.historyController.httpAddItemToHistory)
        historyRouter.post('/user-history', this.historyController.httpGetHistory)
        historyRouter.delete('/:id', this.historyController.httpDeleteItemFromHistory)
        historyRouter.post('/clear', this.historyController.httpClearHistory)


        return historyRouter
    }

}