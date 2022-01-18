import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class NodeService {
    public Api_url = environment.SERVER_API_URL;
    constructor(private http: HttpClient) { }

    public register() {

    }
    public login() {

    }
}