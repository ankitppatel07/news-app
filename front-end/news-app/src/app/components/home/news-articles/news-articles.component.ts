import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home/home.service'
import { NewsArticle } from 'src/app/models/newsarticle';

@Component({
  selector: 'app-news-articles',
  templateUrl: './news-articles.component.html',
  styleUrls: ['./news-articles.component.css']
})
export class NewsArticlesComponent implements OnInit {

  allNewsArray : NewsArticle[] = []

  constructor(private homeService : HomeService) { }

  ngOnInit(): void {
    this.homeService.getAllNewsData().subscribe(
      (data : NewsArticle[]) => {
        this.allNewsArray = data;
      },
      (err) => {
        console.log("Error fetching all news!!!")
      }
    );
  }

}
