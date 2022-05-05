import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
  {
    component:ListUsersComponent,
    path:'list'
  },
  {
    component:AddUserComponent,
    path:'addUser'
  }
];

@NgModule({
  //declarations:[ AppComponent ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

