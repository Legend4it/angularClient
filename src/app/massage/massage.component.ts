import { Component, OnInit } from '@angular/core';
import { Message } from '../model/message';


@Component({
  selector: 'app-massage',
  templateUrl: './massage.component.html',
  styleUrls: ['./massage.component.scss']
})

export class MsgPanelComponent implements OnInit {

   
  public messages:Message[];

  constructor() { }

  ngOnInit() {
    this.initMessage();
  }
  
  initMessage(){
    this.messages=[
    {id:1, body:"Msg01"},
    {id:2, body:"Msg02"},
    {id:3, body:"Msg0300"},
    ];

  }
  
  loadMessages(){
  }

  logIt(msg:string){
    console.log(msg);
  }
}
