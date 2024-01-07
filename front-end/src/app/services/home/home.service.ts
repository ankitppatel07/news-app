import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { NewsArticle } from 'src/app/models/newsarticle'
import { Query } from 'src/app/models/query'
//import data from 'src/app/data/data.json';

const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?"
const apiKey = "056cfc97bdb28fc96a9febb9c978d3d7"
const newsUrl = "http://localhost:3000/news-list"
const latestNewsUrl = "http://localhost:3000/latest-news-list"
const queryUrl = "http://localhost:3000/query"
const sportsNewsUrl = "http://localhost:3000/sports-news"
const latestSportsNewsUrl = "http://localhost:3000/latest-sports-news"

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