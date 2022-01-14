import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {
  headers = new HttpHeaders(); 

  constructor(private http: HttpClient) { }

  getAllModules() : Observable<any> {
    console.log(`getting products at http://localhost:3000/api/modules`)
    return this.http
      .get(`http://localhost:3000/api/modules`)
  }
}
