import { Pool } from 'pg'

export default class Database {

    start() {
        return new Pool({
            user: "postgres",
            password: '120505',
            host: "localhost",
            port: 5432,
            database: 'ecommerce'
        })
    }

}