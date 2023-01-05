import DbQuery from "../../../Abstract/DbQuery";

export default class GetUsers extends DbQuery {

    execute() {
        const queryString = `select id, name, creationdate, birthday, avatar, email from users;`
        const response = this.query(queryString)
        return response
    }

}