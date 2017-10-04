import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { SetjwtserviceService } from '../../natservices/setjwtservice.service';

@Component({
  selector: 'app-loginchk',
  templateUrl: './loginchk.component.html',
  styleUrls: ['./loginchk.component.scss'],
  
})
export class LoginchkComponent implements OnInit {
  
  data:Response;
  natkey:any;
  
  constructor(private router: Router, private route: ActivatedRoute, private setjwtserviceservice: SetjwtserviceService) { }

  ngOnInit() {
    this.natkey=this.route.snapshot.queryParamMap.get("natkey");
    if(localStorage.getItem("natjwt") === null){
        this.getUsers(this.natkey);       
      }else{
        window.opener.location="/dashboard";  
        window.close(); 
      }
    
  }

  getUsers(natkey) {
    this.setjwtserviceservice
    .login(natkey)
    .subscribe(
      (data) => {
        this.data = data;
        localStorage.setItem("natjwt",JSON.stringify(this.data['natjwt']));
        window.opener.location="/dashboard";        
        window.close();         
      }, 
      (error) => {
        console.log('error ' + error);
      });
    }

}
