import { Injectable } from '@angular/core';
import { Query } from 'src/app/models/query';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

const queryUrl = "http://localhost:8080/queries";

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor(private http: HttpClient) { }

  viewQueries() : Observable<Query[]>{
    return this.http.get<Query[]>(queryUrl);
  }

  updateQuery(query: Query) : Observable<Query> {
    return this.http.put<Query>(queryUrl, query);
  }
}
