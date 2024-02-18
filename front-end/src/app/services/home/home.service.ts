import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Article } from 'src/app/models/article'
import { Query } from 'src/app/models/query'
import { environment } from 'src/environments/environment';

const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?";

const articlesUrl = "http://localhost:8080/articles";
const latestArticlesUrl = "http://localhost:8080/articles/latest";
const sportsArticlesUrl = "http://localhost:8080/articles/sports";
const latestSportsArticlesUrl = "http://localhost:8080/articles/sports/latest";
const queryUrl = "http://localhost:8080/queries";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getWeatherData(lat, long): Observable<any> {
    return this.http.get<any>(weatherUrl+"lat=" +lat+ "&lon=" +long+ "&appid=" + environment?.OPENWEATHER_API_KEY);
  }

  getLatestArticles() : Observable<Article[]> {
    return this.http.get<Article[]>(latestArticlesUrl);
  }

  getAllArticles() : Observable<Article[]> {
    return this.http.get<Article[]>(articlesUrl);
  }

  submitQuery(data) : Observable<Query>{
    return this.http.post<Query>(queryUrl, data);
  }

  getLatestSportsArticles() : Observable<Article[]> {
    return this.http.get<Article[]>(latestSportsArticlesUrl);
  }

  getSportsArticles() : Observable<Article[]> {
    return this.http.get<Article[]>(sportsArticlesUrl);
  }

}