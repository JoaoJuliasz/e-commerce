import { Response } from "express";
import { QueryResult } from "pg";
import HttpMethods from "../Abstract/HttpMethods";

export default class HttpGetUsers extends HttpMethods<Promise<unknown>> {

    async execute() {
        const response = await this.usersModel.getUsers()

        this.params.res.status(200).json((response as QueryResult).rows)
    }

}