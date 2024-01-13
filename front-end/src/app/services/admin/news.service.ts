import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { NewsArticle } from 'src/app/models/newsarticle'
//import data from 'src/app/data/data.json';

// const newsUrl = "http://localhost:3000/news-list"
const newsUrl = "http://localhost:8080/articles"


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }
  //DONE
  getAllNewsData() : Observable<NewsArticle[]> {
    return this.http.get<NewsArticle[]>(newsUrl);
  }
  //DONE
  updateNewsData(data) : Observable<NewsArticle> {
    return this.http.put<NewsArticle>(newsUrl, data);
  }
  //DONE
  addNewsData(data) : Observable<NewsArticle> {
    return this.http.post<NewsArticle>(newsUrl, data);
  }

  deleteNewsData(id): Observable<{}> {
    return this.http.delete(newsUrl +"/"+ id);
  }
}
