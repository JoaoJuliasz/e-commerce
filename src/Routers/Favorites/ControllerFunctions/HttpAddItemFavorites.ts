import { QueryResult } from "pg";
import { QueryError } from "../../../types/types";
import HttpMethods from "../Abstract/HttpMethods";

export default class HttpAddItemFavorites extends HttpMethods<Promise<unknown>> {

    async execute() {
        const { req, res } = this.params
        const favoriteBody = req.body

        const response = await this.favoriteModel.addItemFavorites(favoriteBody)

        if ((response as QueryError).error) {
            return res.status(400).json({
                error: (response as QueryError).message
            })
        }

        res.status(201).json({
            message: 'Item added on favorites!',
            content: (response as QueryResult).rows[0]
        })

    }

}