import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, FormControl, Validators } from '@angular/forms'
import { LoginRegService } from 'src/app/services/admin/login-reg.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : UntypedFormGroup;

  constructor(private builder: UntypedFormBuilder,
    private loginRegService: LoginRegService,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.builder.group({
      //can also write name: Validators.required, if no default value is provided
      loginEmail: ['', Validators.compose([Validators.required, Validators.email])],
      loginPassword: ['', Validators.required],
    })
  }

  handleSubmit() {
    const creds = {
      email: this.loginForm.value.loginEmail,
      password: this.loginForm.value.loginPassword
    }
    
    this.loginRegService.login(creds).subscribe(
      (data) => {
        localStorage.setItem('user', JSON.stringify(data))
        this.router.navigate(['/']) //check if normal|admin, and then redirect accordingly
      },
      (err) => {
        alert("Invalid Credentials!!!")
        console.log("Error Logging-in!!!")
      }
    )
  }

}
