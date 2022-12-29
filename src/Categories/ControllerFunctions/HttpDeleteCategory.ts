import HttpMethods from "../Abstract/HttpMethods";
import { Params } from "../../types/types";

export default class HttpDeleteCategory extends HttpMethods<any> {

    constructor(private params: Params) {
        super()
    }

    async execute() {
        const { req, res } = this.params
        const categoryId = Number(req.params.id)

        const deletedCategory = await this.categoriesModel.deleteCategory(categoryId)

        if(deletedCategory === 0) {
            return res.status(400).json({
                err: `Category with id ${categoryId} not exists`
            })
        }

        return res.status(200).json({
            message: 'Category deleted!'
        })

    }

}