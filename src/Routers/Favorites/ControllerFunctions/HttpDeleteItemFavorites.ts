import { QueryResult } from "pg";
import { QueryError } from "../../../types/types";
import HttpMethods from "../Abstract/HttpMethods";

export default class HttpDeleteItemFavorites extends HttpMethods<Promise<unknown>>{

    async execute() {
        const { req, res } = this.params
        const favoriteId = req.params.id

        const response = await this.favoriteModel.deleteItemFavorites(favoriteId)

        if ((response as QueryError).error) {
            return res.status(400).json({
                error: (response as QueryError).message
            })
        }

        if ((response as QueryResult).rowCount === 0) {
            return res.status(400).json({
                message: `Favorite width id ${favoriteId}, not exists!`
            })
        }

        return res.status(200).json({
            message: 'Item removed from history!'
        })
    }

}