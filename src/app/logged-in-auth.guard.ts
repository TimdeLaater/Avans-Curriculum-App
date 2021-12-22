import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { User } from 'src/models/user.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInAuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    console.log('canActivate LoggedIn')
    return this.authService.currentUser.pipe(
      map((user: User) => {
        if (user && localStorage.getItem("id_token")) {
          return true
        } else {
          console.log('not logged in, reroute to /')
          this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } })
          return false
        }
      })
    )
  }
}