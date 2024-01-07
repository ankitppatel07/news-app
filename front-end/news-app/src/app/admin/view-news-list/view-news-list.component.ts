import { Component, OnInit } from '@angular/core';
import { NewsArticle } from 'src/app/models/newsarticle';
import { NewsService } from 'src/app/services/admin/news.service'
import { MsgService } from 'src/app/services/msg/msg.service' 

@Component({
  selector: 'app-view-news-list',
  templateUrl: './view-news-list.component.html',
  styleUrls: ['./view-news-list.component.css']
})
export class ViewNewsListComponent implements OnInit {

  query : string = ''
  allNewsArray : NewsArticle[] = []
  idFlag : string ='';

  constructor(private newsService : NewsService,
    private msgService: MsgService) { }

  ngOnInit(): void {
    this.getAllNews();
    this.msgService.getMsg().subscribe((data)=> {
      //console.log(data) //prints the contents of the message
      this.getAllNews() //to get tasks after add/delete happens
    })
  }

  getAllNews() {
    this.newsService.getAllNewsData().subscribe(
      (data : NewsArticle[]) => {
        this.allNewsArray = data;
      },
      (err) => {
        console.log("Error fetching latest news!!!")
      }
    );
  }

  editNews(id) {
    this.idFlag = id;
  }

  updateNews(updatedNews) {
    this.newsService.updateNewsData(updatedNews).subscribe(
      (data) => {
        alert("News Article Updated!!!")
      },
      (err) => {
        console.log("Error updating news")
      }
    )
    this.idFlag = '';
  }

  deleteNews(deleteArticle) {
    this.newsService.deleteNewsData(deleteArticle.id).subscribe(
      (data) => {
        this.msgService.sendMsg({msg : 'News Article Deleted!!'})
        alert("News Article Deleted!!!")
      },
      (err) => {
        console.log("Error deleting news")
      }
    )
  }


}
