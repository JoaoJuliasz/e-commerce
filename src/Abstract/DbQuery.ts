import { QueryResult } from 'pg'
import DB from '../database/Database'
import { QueryError } from '../types/types'

export default abstract class DbQuery {

    protected DB = new DB()

    async query(queryString: string): Promise<QueryResult | QueryError> {
        try {
            const response = await this.DB.start().query(queryString)
            return response
        } catch (err: any) {
            return { message: err.message, error: err.name }
        }
    }
}