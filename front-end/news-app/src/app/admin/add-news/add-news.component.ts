import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, FormControl, Validators } from '@angular/forms'
import { NewsService } from 'src/app/services/admin/news.service'

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  addNewsForm: UntypedFormGroup;

  constructor(private builder: UntypedFormBuilder,
    private newsService: NewsService) { }

  ngOnInit(): void {
    this.addNewsForm = this.builder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      articleUrl: ['', Validators.required],
      imageUrl: ['', Validators.required],
      // publishedAt: ['', Validators.required]
    })
  }

  handleSubmit() {
    console.log(this.addNewsForm.value)
    const newNews = {
      title : this.addNewsForm.value.title,
      description : this.addNewsForm.value.description,
      category : this.addNewsForm.value.category,
      articleUrl : this.addNewsForm.value.articleUrl,
      imageUrl : this.addNewsForm.value.imageUrl,
    }

    this.newsService.addNewsData(newNews).subscribe(
      (data) => { 
        alert("News Article added!!!")
      },
      (err) => {
        console.log("Error adding data!!!")
       }
    )
  }

}
