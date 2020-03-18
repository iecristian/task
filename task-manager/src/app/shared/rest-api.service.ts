import { Injectable } from '@angular/core';
import { Task } from './task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {retry, catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  apiURL = 'http://localhost:3000';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  registerTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiURL + '/task', JSON.stringify(task),this.httpOptions)
    .pipe(retry(1));
  }
}
