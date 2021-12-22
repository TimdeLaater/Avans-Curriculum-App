import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private currentUserSubject! : BehaviorSubject<User>;
  public currentUser! : Observable<User>
  private readonly CURRENT_USER = 'currentuser';
  private readonly headers = new HttpHeaders({
    'Content-Type': 'application/json',

  });

  constructor(private http: HttpClient,
    private router: Router, private alertService: AlertService) { 
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')!));
      this.currentUser = this.currentUserSubject.asObservable();
    }

  login(email: string, password: string) {
    console.log(`login at ${environment.SERVER_API_URL}/user/login`);

    return this.http.post(`${environment.SERVER_API_URL}/user/login`, { email, password}, { headers: this.headers}).pipe(map((response: any) => {
      const user = { ...response.user } as User
      localStorage.setItem('currentUser', JSON.stringify(user));
      localStorage.setItem('id_token', JSON.stringify(response.token))
      this.currentUserSubject.next(user);
      return user;
    }),
    catchError((error: any) => {
      console.log('error:', error);
      console.log('error.message:', error.message);
      this.alertService.error(error.error.message || error.message);
      return of(undefined);
    })
    )
}

  getToken(): string {
    return localStorage.getItem('id_token')!;
  }

  logout() {
    console.log("Logging out!")
    localStorage.removeItem('currentUser');
    localStorage.removeItem('id_token');
    this.currentUserSubject.next(null!);
  }

  register(userData: User) {
    console.log(`register at ${environment.SERVER_API_URL}/user/register`);
    console.log(userData);
    return this.http
      .post<User>(`${environment.SERVER_API_URL}/user/register`, userData, {
        headers: this.headers,
      })
      .pipe(
        map((user) => {
          // const user = new User(response);
          console.dir(user);
          this.saveUserToLocalStorage(user);
          this.currentUserSubject.next(user);
          this.alertService.success('You have been registered');
          return user;
        }),
        catchError((error: any) => {
          console.log('error:', error);
          console.log('error.message:', error.message);
          console.log('error.error.message:', error.error.message);
          this.alertService.error(error.error.message || error.message);
          return of(undefined);
        })
      );
  }

getUserFromLocalStorage(): Observable<User> {
  const localUser = JSON.parse(localStorage.getItem(this.CURRENT_USER)!);
  console.log("localUser: ", localUser);
  return of(localUser);
}

private saveUserToLocalStorage(user: User): void {
  localStorage.setItem(this.CURRENT_USER, JSON.stringify(user));
}

userMayEdit(itemUserId: string): Observable<boolean> {
  return this.currentUserSubject.pipe(
    map((user: User) => (user ? user._id === itemUserId : false))
  );
}
}
