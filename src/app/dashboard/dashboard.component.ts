import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  loggedInUser$!: User


  constructor() {}

  ngOnInit() {
    this.loggedInUser$ = JSON.parse(localStorage.getItem('currentuser')!);
  }
}
