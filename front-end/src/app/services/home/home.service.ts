import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { NewsArticle } from 'src/app/models/newsarticle'
import { Query } from 'src/app/models/query'

const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?"
const apiKey = ""

const newsUrl = "http://localhost:8080/articles"
const latestNewsUrl = "http://localhost:8080/articles/latest";
const sportsNewsUrl = "http://localhost:8080/articles/sports"
const latestSportsNewsUrl = "http://localhost:8080/articles/sports/latest";

const queryUrl = "http://localhost:3000/query"


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getWeatherData(lat, long): Observable<any> {
    return this.http.get<any>(weatherUrl+"lat=" +lat+ "&lon=" +long+ "&appid=" + apiKey);
  }

  getLatestNewsData() : Observable<NewsArticle[]> {
    return this.http.get<NewsArticle[]>(latestNewsUrl);
  }

  getAllNewsData() : Observable<NewsArticle[]> {
    return this.http.get<NewsArticle[]>(newsUrl);
  }

  submitQuery(data) : Observable<Query>{
    return this.http.post<Query>(queryUrl, data);
  }

  getLatestSportsNews() : Observable<NewsArticle[]> {
    return this.http.get<NewsArticle[]>(latestSportsNewsUrl);
  }

  getSportsNews() : Observable<NewsArticle[]> {
    return this.http.get<NewsArticle[]>(sportsNewsUrl);
  }

}
