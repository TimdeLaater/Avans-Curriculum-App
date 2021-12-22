import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { User } from 'src/models/user.model'
import { AuthService } from '../auth.service'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() title: string = ''
  isNavbarCollapsed = true
  loggedInUser$!: User

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.currentUser.subscribe(x => this.loggedInUser$ = x);
    console.log("NgOnInit: ", this.loggedInUser$)
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
