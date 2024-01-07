import { Injectable } from '@angular/core';
import { Query } from 'src/app/models/query';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
//import data from 'src/app/data/data.json';

const queryUrl = "http://localhost:3000/query"

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor(private http: HttpClient) { }

  viewQueries() : Observable<Query[]>{
    return this.http.get<Query[]>(queryUrl);
  }

  updateQuery(data) : Observable<Query> {
    return this.http.put<Query>(queryUrl, data);
  }
}
