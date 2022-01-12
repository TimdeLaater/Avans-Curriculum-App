import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudyplanService {
  headers = new HttpHeaders() 
  
  constructor(private http: HttpClient) { }

  getStudyPlansFromUser(userId: String) : Observable<any> {
    console.log(`getting products at ${environment.SERVER_API_URL}/users/${userId}/studyplans`)
    return this.http
      .get(`${environment.SERVER_API_URL}/users/${userId}/studyplans`)
  }
}
