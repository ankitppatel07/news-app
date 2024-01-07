import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home/home.service'
import { NewsArticle } from 'src/app/models/newsarticle';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  latestSportsNews : NewsArticle[] = [ {
    id: '',
    title: '',
    description: '',
    category: '',
    articleUrl: '',
    imageUrl: '',
    publishedAt: ''
  } ]

  allSportsNews : NewsArticle[] = []

  constructor(private homeService : HomeService) { }

  ngOnInit(): void {
    this.homeService.getLatestSportsNews().subscribe(
      (data : NewsArticle[]) => {
        this.latestSportsNews = data;
      },
      (err) => {
        console.log("Error fetching latest sports news!!!")
      }
    );

    this.homeService.getSportsNews().subscribe(
      (data : NewsArticle[]) => {
        this.allSportsNews = data;
      },
      (err) => {
        console.log("Error fetching all sports news!!!")
      }
    );
  }

}
