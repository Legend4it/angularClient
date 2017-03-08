import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './side-nav-bar/side-nav-bar.component';
import { MsgPanelComponent } from './massage/massage.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { SendMessageComponent } from './send-message/send-message.component';

const appRoute=[
{ path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MsgPanelComponent,
    TopNavBarComponent,
    SendMessageComponent
  ],
  imports: [
    RouterModule.forRoot(appRoute),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
