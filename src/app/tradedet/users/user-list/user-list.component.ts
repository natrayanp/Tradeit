import { Component, OnInit, Input } from '@angular/core';

import { IUser } from '../User-details';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


// Users to be replaced with data from DB
  Users = [
    new IUser('shiba2','assets/img/shiba2.jpg'),
    new IUser('natrayan', 'assets/img/002.jpg')
  ];
    

}


