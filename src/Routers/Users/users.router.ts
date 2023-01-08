import express from 'express'
import UsersControler from './users.controllers'


export default class UsersRouter {

    private usersController = new UsersControler()

    execute() {
        const usersRouter = express.Router()

        usersRouter.get('/', this.usersController.httpGetUsers)
        usersRouter.get('/:id', this.usersController.httpGetUser)
        usersRouter.get('/:id/products', this.usersController.httpGetUserProducts)
        usersRouter.post('/', this.usersController.httpCreateUser)
        usersRouter.put('/:id', this.usersController.httpUpdateUser)
        usersRouter.post('/authenticate', this.usersController.httpAuthenticateUser)
        usersRouter.delete('/:id', this.usersController.httpDeleteUser)

        return usersRouter
    }
}