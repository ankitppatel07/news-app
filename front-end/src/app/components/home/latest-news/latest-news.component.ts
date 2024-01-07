import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home/home.service'
import { NewsArticle } from 'src/app/models/newsarticle';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent implements OnInit {

  latestNewsArray : NewsArticle[] = [ {
    id: '',
    title: '',
    description: '',
    category: '',
    articleUrl: '',
    imageUrl: '',
    publishedAt: ''
  } ]

  constructor(private homeService : HomeService) { }

  ngOnInit(): void {
    this.homeService.getLatestNewsData().subscribe(
      (data : NewsArticle[]) => {
        this.latestNewsArray = data;
      },
      (err) => {
        console.log("Error fetching latest news!!!")
      }
    );
  }

}
