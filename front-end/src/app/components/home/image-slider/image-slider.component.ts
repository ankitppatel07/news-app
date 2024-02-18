import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { HomeService } from 'src/app/services/home/home.service'

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {

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
        console.log("Error fetching latest Articles!!!")
      }
    );
  }

}
