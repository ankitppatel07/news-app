import { Component, OnInit } from '@angular/core';
import { LoginRegService } from 'src/app/services/admin/login-reg.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public loginRegService : LoginRegService,
    private router : Router) { }

    ngOnInit(): void {
      // if(JSON.parse(localStorage.getItem('user')).id > 0){
      //   this.email = JSON.parse(localStorage.getItem('user')).email;
      //   console.log(this.email)
      // }
    }
  
    handleLogout() {
      this.loginRegService.logout();
      alert("Logout Suucessful!!!")
      this.router.navigate(['/']);
    }

}
