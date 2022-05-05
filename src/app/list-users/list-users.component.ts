import { Component, OnInit } from '@angular/core';
import { GetApiService } from '../get-api.service';
import myUsers from 'api/DB/users.db.js';
import { map } from 'rxjs/operators'


@Component({
  selector: 'exads-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  ApiData:[]; 
  demoData = myUsers;
  
  constructor(private api: GetApiService) { } 

  ngOnInit(): void {
    
    this.api.getData().subscribe(result =>{
      this.ApiData = JSON.parse(JSON.stringify(result))
      console.log(this.ApiData)

    })
  }

}
