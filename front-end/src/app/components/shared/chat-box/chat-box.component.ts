import { Component, OnInit } from '@angular/core';
import { ChatBoxService } from 'src/app/services/chat-box/chat-box.service'
import { Message } from 'src/app/models/message'
import { LoginRegService } from 'src/app/services/admin/login-reg.service'

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {

  name: string = '';
  msgContent: string = '';

  currentMsg: Message;

  constructor(private chatBoxService: ChatBoxService,
    private loginRegService: LoginRegService) { }

  ngOnInit(): void {
    // this.chatBoxService.currentMsg.subscribe(
    //   (data) => {
    //     //console.log("Entered Msg: ", data)
    //     this.currentMsg = data;
    //     //console.log("Msg from Server: ", data)
    //     this.updateConversation(data.name, data.msgContent)
    //   }
    // );
  }

  // sendNewMessage() {
  //   this.chatBoxService.sendNewMessage(this.name, this.msgContent);
  //   this.msgContent = '';
  // }

  // updateConversation(name, msgContent) {
  //   var liNode = `<li class="list-group-item">
  //                     <strong>${name}:</strong>
  //                     <p>${msgContent}</p>
  //                 </li>`
  //   var msgList = document.getElementById('msgList')
  //   msgList.insertAdjacentHTML("beforeend", liNode);
  // }



  // openChatBox() {
  //   if(this.loginRegService.getUserDetails()){
  //     this.name = this.loginRegService.getUserDetails().name;
  //   }
  //   if(this.name == '' || this.name == null) {
  //     this.name = prompt("Enter you name:");
  //   }
    
  //   if(this.name == '' || this.name == null) {
  //     this.name = "Anonymous"
  //   }
  //   document.getElementById("chat-box").style.display = "block";
  //   document.getElementById("chat-box-btn").style.display = "none";
  // }

  // closeChatBox() {
  //   document.getElementById("chat-box").style.display = "none";
  //   document.getElementById("chat-box-btn").style.display = "block";
  // }
}
