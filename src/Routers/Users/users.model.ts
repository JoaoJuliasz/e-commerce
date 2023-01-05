import AuthenticatedUser from "./Executors/AuthenticateUser/AuthenticatedUser";
import CreateUser from "./Executors/CreateUser";
import GetUser from "./Executors/GetUser";
import GetUsers from "./Executors/GetUsers";
import { NewUser } from "./types";

export default class UsersModel {

    getUsers() {
        return new GetUsers().execute()
    }

    createUser(newUser: NewUser) {
        return new CreateUser(newUser).execute()
    }

    async getUser(userId: number) {
        return await new GetUser(userId).execute()
    }

    authenticateUser(userLogin: { email: string, password: string }) {
        return new AuthenticatedUser(userLogin).execute()
    }

}