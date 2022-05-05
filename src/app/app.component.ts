import { Component , OnInit } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { GetApiService } from './get-api.service';
import { ListUsersComponent } from './list-users/list-users.component';
import { AddUserComponent } from './add-user/add-user.component';

import { Router } from '@angular/router';


@Component({
  selector: 'exads-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent { 
  btnClick= function () {
    this.router.navigate(['addUser']);
};
}