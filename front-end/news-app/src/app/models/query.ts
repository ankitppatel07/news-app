export class Query {
    email: string;
    query: string;
    status: string;

    constructor(email, query, status){
        this.email = email;
        this.query = query;
        this.status = status;
    }
}
