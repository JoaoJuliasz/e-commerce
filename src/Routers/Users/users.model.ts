import { QueryResult } from "pg";
import AuthenticateUser from "./Executors/AuthenticateUser/AuthenticateUser";
import GetUserByEmail from "./Executors/AuthenticateUser/GetUserByEmail";
import CreateUser from "./Executors/CreateUser";
import GetUsers from "./Executors/GetUsers";
import { NewUser } from "./types";

export default class UsersModel {

    getUsers() {
        return new GetUsers().execute()
    }

    createUser(newUser: NewUser) {
        return new CreateUser(newUser).execute()
    }

    async authenticateUser(userLogin: {email: string, password: string}) {
        const user = await new GetUserByEmail(userLogin).execute()
        return await new AuthenticateUser(userLogin.password, (user as QueryResult).rows[0]).execute()
    }

}