import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Message } from 'src/app/models/message'

@Injectable({
  providedIn: 'root'
})
export class ChatBoxService {
  currentMsg = this.socket.fromEvent<Message>('onMsgFromServer');

  constructor(private socket: Socket) { }

  sendNewMessage(name, msgContent) {
    const message = { name , msgContent}
    //console.log(name + " sending msg: " +msgContent)
    this.socket.emit('onMsgFromClient', message)
  }



}
