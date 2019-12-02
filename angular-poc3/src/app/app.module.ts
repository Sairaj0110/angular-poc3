import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragComponent } from './drag/drag.component';
import { Component1Component } from './component1/component1.component';
import { UserService } from "./user.service";
import { ShowCompDirective } from './show-comp.directive';
// import { Component2Component } from './component2/component2.component';

@NgModule({
  declarations: [
    AppComponent,
    DragComponent,
    Component1Component,
    ShowCompDirective,
    // Component2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
