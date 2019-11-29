import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DragComponent } from './drag/drag.component';

const routes: Routes = [
  {path:'drag', component:DragComponent},
  {path:'', redirectTo:'/drag', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
