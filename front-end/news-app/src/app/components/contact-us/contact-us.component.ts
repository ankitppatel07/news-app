import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, FormControl, Validators } from '@angular/forms'
import { HomeService } from 'src/app/services/home/home.service'
import { Query } from 'src/app/models/query'

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactForm: UntypedFormGroup;

  constructor(private builder: UntypedFormBuilder,
    private homeService : HomeService) { }

  ngOnInit(): void {
    this.contactForm = this.builder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      query: ['', Validators.required],
    })
  }

  handleSubmit() {
    const query = new Query(
      this.contactForm.value.email, 
      this.contactForm.value.query,
      "pending")
    this.homeService.submitQuery(query).subscribe(
      (data) => {
        //do nothing
      },
      (err) => {
        console.log("Error submitting query!!!")
      }
    )
  }
}
