import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { NewsArticle } from 'src/app/models/newsarticle'
import { Query } from 'src/app/models/query'
//import data from 'src/app/data/data.json';

const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?"
const apiKey = ""
// const newsUrl = "http://localhost:3000/news-list"
const newsUrl = "http://localhost:8080/get-articles"

// const latestNewsUrl = "http://localhost:3000/latest-news-list"
const latestNewsUrl = "http://localhost:8080/get-latest-articles";

const queryUrl = "http://localhost:3000/query"

// const sportsNewsUrl = "http://localhost:3000/sports-news"
const sportsNewsUrl = "http://localhost:8080/get-sports-articles"

// const latestSportsNewsUrl = "http://localhost:3000/latest-sports-news"
const latestSportsNewsUrl = "http://localhost:8080/get-latest-sports-articles";


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
