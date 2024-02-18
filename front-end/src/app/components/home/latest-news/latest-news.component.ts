import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home/home.service'
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent implements OnInit {

  latestNewsArray : Article[] = [ {
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
    this.homeService.getLatestArticles().subscribe(
      (data : Article[]) => {
        this.latestNewsArray = data;
      },
      (err) => {
        console.log("Error fetching latest news!!!")
      }
    );
  }

}
