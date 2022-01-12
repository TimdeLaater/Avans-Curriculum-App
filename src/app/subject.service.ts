import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  headers = new HttpHeaders();


  constructor(private http: HttpClient) { }

  getSubjectById(subjectId: String){
    console.log(`getting products at ${environment.SERVER_API_URL}/subjects/${subjectId}`)
    return this.http
      .get(`${environment.SERVER_API_URL}/subjects/${subjectId}`)
  }
}
