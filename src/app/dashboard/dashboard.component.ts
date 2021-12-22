import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  runningMode: string = '';
  apiUrl: string = '';

  constructor() {}
  ngOnInit() {
    this.runningMode = environment.production ? 'production' : 'development';
    this.apiUrl = environment.SERVER_API_URL;
  }
}
