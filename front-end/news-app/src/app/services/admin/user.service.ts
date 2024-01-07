import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
//import data from 'src/app/data/data.json';

const userUrl = "http://localhost:3000/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() : Observable<User[]>{
    return this.http.get<User[]>(userUrl);
  }

  updateUser(data) : Observable<User> {
    return this.http.put<User>(userUrl, data);
  }

}
