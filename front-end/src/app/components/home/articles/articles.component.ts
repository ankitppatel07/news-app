import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home/home.service'
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  allArticlesArray : Article[] = []

  constructor(private homeService : HomeService) { }

  ngOnInit(): void {
    this.homeService.getAllArticles().subscribe(
      (data : Article[]) => {
        this.allArticlesArray = data;
      },
      (err) => {
        console.log("Error fetching all Articles!!!")
      }
    );
  }

}
