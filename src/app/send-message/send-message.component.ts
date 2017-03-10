import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent implements OnInit {
  
  
  constructor() { }

  ngOnInit() {
    // alert("ngOnInit()"); 
  }
  sendMessage(){
    this.logIt("Send message...!");
  }

  logIt(msg:string){
    console.log(msg);
  }
}
