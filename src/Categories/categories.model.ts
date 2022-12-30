import CreateCategory from "./Executors/CreateCategory"
import GetCategories from "./Executors/GetCategories"
import ValdiateCategory from "./Executors/ValidateCategory"

import { Response } from 'express'
import UpdateCategory from "./Executors/UpdateCategory"
import GetCategory from "./Executors/GetCategory"
import DeleteCategory from "./Executors/DeleteCategory"
import GetCategoryProducts from "./Executors/GetCategoryProducts"

export default class CategoriesModel {

    async getCategories() {
        return await new GetCategories().execute()
    }

    async getCategory(categoryId: number) {
        return await new GetCategory(categoryId).execute()
    }

    async getCategoryProducts(categoryId: number) {
        return await new GetCategoryProducts(categoryId).execute()
    }

    async createCategory(category: string) {
        return await new CreateCategory(category).execute()
    }

    async validateValue(name: string, res: Response) {
        await new ValdiateCategory(name, res).execute()
    }

    async updateCategory(category: string, id: number) {
        return await new UpdateCategory(category, id).execute()
    }

    async deleteCategory(categoryId: number) {
        return await new DeleteCategory(categoryId).execute()
    }
}