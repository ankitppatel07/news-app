export class Query {
    email: string;
    query: string;
    status: string;

    constructor(email, query, status, id?:string){
        this.email = email;
        this.query = query;
        this.status = status;
    }
}
