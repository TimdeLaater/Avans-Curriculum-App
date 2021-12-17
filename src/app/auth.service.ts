import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService implements OnInit {

  private currentUserSubject! : BehaviorSubject<User>;
  public currentUser! : Observable<User>
  private readonly CURRENT_USER = 'currentuser';
  private readonly headers = new HttpHeaders({
    'Content-Type': 'application/json',

  });

  constructor(private http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')!));
      this.currentUser = this.currentUserSubject.asObservable();
  }

  login(email: string, password: string) {
    console.log(`login at ${environment.SERVER_API_URL}/login`);

    return this.http.post(`${environment.SERVER_API_URL}/login`, { email, password}, { headers: this.headers}).pipe(map((response: any) => {
      const user = { ...response } as User
      localStorage.setItem('currentUser', JSON.stringify(user));
      localStorage.setItem('id_token', user.accessToken);
      this.currentUserSubject.next(user);
      return user;
    }),
    catchError((error: any) => {
      console.log('error:', error);
      console.log('error.message:', error.message);
      console.log('error.error.message:', error.error.message);
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
    console.log(`register at ${environment.SERVER_API_URL}/register`);
    console.log(userData);
    return this.http
      .post<User>(`${environment.SERVER_API_URL}/register`, userData, {
        headers: this.headers,
      })
      .pipe(
        map((user) => {
          // const user = new User(response);
          console.dir(user);
          this.saveUserToLocalStorage(user);
          this.currentUserSubject.next(user);
          return user;
        }),
        catchError((error: any) => {
          console.log('error:', error);
          console.log('error.message:', error.message);
          console.log('error.error.message:', error.error.message);
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
