import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import {MdDialog, MdDialogConfig, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm : FormGroup;
  public namems = "natrayan";

  constructor(private fb: FormBuilder) {
    this.loginForm = fb.group({
    'username':[null,Validators.required],
    'password':[null,Validators.required]});

   }

  ngOnInit() {
  }

  openpop(){
    var natwindow=window.open("https://kite.trade/connect/login?api_key=uptxfbd1y845rxva", '_blank',"fullscreen = no");
  }

}


