import { Request, Response } from 'express'
import HttpAuthenticateUser from './ControllerFunctions/HttpAuthenticateUser'
import HttpCreateUsers from './ControllerFunctions/HttpCreateUsers'
import HttpGetUsers from './ControllerFunctions/HttpGetUsers'

export default class UsersControler {

    httpGetUsers(_: Request, res: Response) {
        return new HttpGetUsers(res).execute()
    }

    httpCreateUser(req: Request, res: Response) {
        return new HttpCreateUsers({ req, res }).execute()
    }

    httpAuthenticateUser(req: Request, res: Response) {
        return new HttpAuthenticateUser({ req, res }).execute()
    }
}