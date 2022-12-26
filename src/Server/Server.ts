import http from 'http';
import App from '../App/App';

export default class Server {

    private server!: http.Server

    start() {
        const PORT = 8000
        const app = new App().execute()
        this.server = http.createServer(app)
        this.server.listen(PORT, () => {
            console.log(`Listening on port ${PORT}`)
        })
    }

}