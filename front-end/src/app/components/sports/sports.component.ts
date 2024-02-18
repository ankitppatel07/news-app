import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home/home.service'
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  latestSportsNews : Article[] = [ {
    id: '',
    title: '',
    description: '',
    category: '',
    articleUrl: '',
    imageUrl: '',
    publishedAt: ''
  } ]

  allSportsNews : Article[] = []

  constructor(private homeService : HomeService) { }

  ngOnInit(): void {
    this.homeService.getLatestSportsArticles().subscribe(
      (data : Article[]) => {
        this.latestSportsNews = data;
      },
      (err) => {
        console.log("Error fetching latest sports Articles!!!")
      }
    );

    this.homeService.getSportsArticles().subscribe(
      (data : Article[]) => {
        this.allSportsNews = data;
      },
      (err) => {
        console.log("Error fetching all sports Articles!!!")
      }
    );
  }

}
