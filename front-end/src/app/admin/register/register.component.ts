import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, FormControl, Validators } from '@angular/forms'
import { FormValidatorService } from 'src/app/services/form-validator/form-validator.service'
import { LoginRegService } from 'src/app/services/admin/login-reg.service';
import { User } from 'src/app/models/user'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm : UntypedFormGroup;

  constructor(private builder: UntypedFormBuilder, 
    private formValidator: FormValidatorService,
    private loginRegService: LoginRegService) { 

    }

  ngOnInit(): void {
    this.registerForm = this.builder.group({
      //can also write name: Validators.required, if no default value is provided
      name:['', Validators.required], 
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
      //if validator is passed from here, the passwordsMatchValidator() will get FormControl(single Element)
      confirmPassword: ['', ] 
    }, {
      //in global validator, the passwordsMatchValidator() will get FormGroup(the whole form)
      validators: this.formValidator.passwordsMatchValidator 
    })
  }

  handleSubmit() {
    //console.log("Registration Values: ", this.registerForm.value)
    const user = new User(
      this.registerForm.value.name, 
      this.registerForm.value.email, 
      "normal",
      this.registerForm.value.password
    )
    this.loginRegService.registerUser(user).subscribe(
      (data) => {
        alert("New user registered!!!")
      },
      (err) => {
        alert("The user already exists!!!")
      }
    )

    


  }
}