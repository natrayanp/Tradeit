import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
lc:string;
  constructor() { }

  ngOnInit() {
    this.lc=JSON.stringify(localStorage.getItem("testObjectchd"));
  }

}
