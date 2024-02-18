import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/article'

const articlesUrl = "http://localhost:8080/articles"

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) { }
  
  getAllArticles() : Observable<Article[]> {
    return this.http.get<Article[]>(articlesUrl);
  }
  
  updateArticle(data) : Observable<Article> {
    return this.http.put<Article>(articlesUrl, data);
  }
  
  addArticle(data) : Observable<Article> {
    return this.http.post<Article>(articlesUrl, data);
  }

  deleteArticle(id): Observable<{}> {
    return this.http.delete(articlesUrl +"/"+ id);
  }
}