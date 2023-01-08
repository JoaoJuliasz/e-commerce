import { Request, Response } from 'express'
import HttpAuthenticateUser from './ControllerFunctions/HttpAuthenticateUser'
import HttpCreateUsers from './ControllerFunctions/HttpCreateUsers'
import HttpGetUser from './ControllerFunctions/HttpGetUser'
import HttpGetUsers from './ControllerFunctions/HttpGetUsers'
import HttpUpdateUser from './ControllerFunctions/HttpUpdateUser'

export default class UsersControler {

    httpGetUsers(req: Request, res: Response) {
        return new HttpGetUsers({ req, res }).execute()
    }

    httpGetUser(req: Request, res: Response) {
        return new HttpGetUser({ req, res }).execute()
    }

    httpCreateUser(req: Request, res: Response) {
        return new HttpCreateUsers({ req, res }).execute()
    }

    httpUpdateUser(req: Request, res: Response) {
        return new HttpUpdateUser({ req, res }).execute()
    }

    httpAuthenticateUser(req: Request, res: Response) {
        return new HttpAuthenticateUser({ req, res }).execute()
    }
}