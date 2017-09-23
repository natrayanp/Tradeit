import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MdInputModule } from '@angular/material';

import { IUser } from '../User-details';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  onEdit: boolean = false;
 // name = 'Natrayan Palni Appan';
  constructor() {
   }

  ngOnInit() {
   // this.edittedUser = this.user;
  }

  @Input() edittedUser: IUser;
  //edittedUser: IUser;

  



  UserEdit(event){
    this.onEdit=!this.onEdit;
    

  }

  UserCancel(){
    this.onEdit=!this.onEdit;

  }

  UserSave(){}

  
}


