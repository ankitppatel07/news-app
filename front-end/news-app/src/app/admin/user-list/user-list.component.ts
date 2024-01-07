import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/admin/user.service'
import { LoginRegService } from 'src/app/services/admin/login-reg.service'
import { MsgService } from 'src/app/services/msg/msg.service' 

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  query : string = ''
  allUsers : User[] = []
  idFlag : string ='';

  constructor(private userService : UserService,
    public loginRegService : LoginRegService,
    private msgService: MsgService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (data : User[]) => {
        this.allUsers = data;
      },
      (err) => {
        console.log("Error fetching users!!!")
      }
    );
  }
  
  editUser(id) {
    this.idFlag = id;
  }

  updateUser(updatedUser) {
    this.userService.updateUser(updatedUser).subscribe(
      (data) => {
        alert("User Updated!!!")
      },
      (err) => {
        console.log("Error updating user")
      }
    )
    this.idFlag = '';
  }

}
