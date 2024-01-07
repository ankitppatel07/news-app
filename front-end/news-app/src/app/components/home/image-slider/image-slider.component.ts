import { Component, OnInit } from '@angular/core';
import { NewsArticle } from 'src/app/models/newsarticle';
import { HomeService } from 'src/app/services/home/home.service'

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {

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
