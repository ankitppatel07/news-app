import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user'
//import data from 'src/app/data/data.json';

const registerUrl = "http://localhost:3000/register"
const loginUrl = "http://localhost:3000/login"

@Injectable({
  providedIn: 'root'
})
export class LoginRegService {

  constructor(private http: HttpClient) { }

  
  registerUser(user : User) : Observable<User>{
    return this.http.post<User>(registerUrl, user);
  }

  login(creds: any): Observable<User> {
    // const { email, password } = creds
    return this.http.post<User>(loginUrl, creds);
  }

  logout() {
    localStorage.removeItem('user');
  }

  getUserDetails() {
    return JSON.parse(localStorage.getItem('user'))
  }
}
