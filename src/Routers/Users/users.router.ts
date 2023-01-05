import express from 'express'
import UsersControler from './users.controllers'


export default class UsersRouter {

    private usersController = new UsersControler()

    execute() {
        const usersRouter = express.Router()

        usersRouter.get('/', this.usersController.httpGetUsers)
        usersRouter.post('/', this.usersController.httpCreateUser)
        usersRouter.post('/authenticate', this.usersController.httpAuthenticateUser)

        return usersRouter
    }
}