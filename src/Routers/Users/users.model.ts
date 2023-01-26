import AuthenticatedUser from "./Executors/AuthenticateUser/AuthenticatedUser";
import CreateUser from "./Executors/CreateUser";
import DeleteUser from "./Executors/DeleteUser";
import GetUser from "./Executors/GetUser";
import GetUserCart from "./Executors/GetUserCart";
import GetUserOrders from "./Executors/GetUserOrders";
import GetUserProducts from "./Executors/GetUserProducts";
import GetUsers from "./Executors/GetUsers";
import UpdateUser from "./Executors/UpdateUser";
import { NewUser, User } from "./types";

export default class UsersModel {

    getUsers() {
        return new GetUsers().execute()
    }

    createUser(newUser: NewUser) {
        return new CreateUser(newUser).execute()
    }

    getUser(userId: string) {
        return new GetUser(userId).execute()
    }

    getUserProducts(userId: string) {
        return new GetUserProducts(userId).execute()
    }

    getUserCart(userId: string) {
        return new GetUserCart(userId).execute()
    }

    getUserOrders(userId: string) {
        return new GetUserOrders(userId).execute()
    }

    updateUser(user: Omit<User, 'password'>, userId: string) {
        return new UpdateUser(user, userId).execute()
    }

    authenticateUser(userLogin: { email: string, password: string }) {
        return new AuthenticatedUser(userLogin).execute()
    }

    deleteUser(userId: string) {
        return new DeleteUser(userId).execute()
    }

}