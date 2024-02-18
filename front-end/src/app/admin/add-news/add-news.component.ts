import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, FormControl, Validators } from '@angular/forms'
import { ArticlesService } from 'src/app/services/admin/articles.service'

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  addNewsForm: UntypedFormGroup;

  constructor(private builder: UntypedFormBuilder,
    private articlesService: ArticlesService) { }

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
    const newNews = {
      title : this.addNewsForm.value.title,
      description : this.addNewsForm.value.description,
      category : this.addNewsForm.value.category,
      articleUrl : this.addNewsForm.value.articleUrl,
      imageUrl : this.addNewsForm.value.imageUrl,
    }

    this.articlesService.addArticle(newNews).subscribe(
      (data) => { 
        alert("Article added!!!")
      },
      (err) => {
        console.log("Error adding data!!!")
       }
    )
  }

}
