export class User {
    name : string;
    email : string;
    userType : string;
    password : string;

    constructor(name, email, userType, password){
        this.name = name;
        this.email = email;
        this.userType = userType;
        this.password = password;
    }
}
