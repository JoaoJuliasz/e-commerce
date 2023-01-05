import { Response } from 'express'

export default class ValdiateCategory {

    constructor(private categoryName: string, private res: Response) { }

    execute() {
        if (!this.categoryName) {
            return this.res.status(400).json({
                err: 'Category name is missing'
            })
        }

    }

}