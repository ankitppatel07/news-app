import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticlesService } from 'src/app/services/admin/articles.service'
import { MsgService } from 'src/app/services/msg/msg.service' 

@Component({
  selector: 'app-view-news-list',
  templateUrl: './view-news-list.component.html',
  styleUrls: ['./view-news-list.component.css']
})
export class ViewNewsListComponent implements OnInit {

  query : string = ''
  allNewsArray : Article[] = []
  idFlag : string ='';

  constructor(private articlesService : ArticlesService,
    private msgService: MsgService) { }

  ngOnInit(): void {
    this.getAllNews();
    this.msgService.getMsg().subscribe((data)=> {
      //console.log(data) //prints the contents of the message
      this.getAllNews() //to get tasks after add/delete happens
    })
  }

  getAllNews() {
    this.articlesService.getAllArticles().subscribe(
      (data : Article[]) => {
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
    this.articlesService.updateArticle(updatedNews).subscribe(
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
    this.articlesService.deleteArticle(deleteArticle.id).subscribe(
      (data) => {
        // this.msgService.sendMsg({msg : 'News Article Deleted!!'})
        alert("News Article Deleted!!!")
      },
      (err) => {
        console.log("Error deleting news")
      }
    )
  }


}
