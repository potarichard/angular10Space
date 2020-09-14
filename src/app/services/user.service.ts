import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  URL:string = environment.baseURL + "/users";

  private headers:HttpHeaders = new HttpHeaders({ 'Content-Type':'application/json',
                                                  'Macska':'DioJojo'});

  getAll() {
    return this.http.get(this.URL, {headers: this.headers});
  }

  getOne(id:number) {
    return this.http.get(this.URL+"/"+id, {headers: this.headers});
  }

  addOne(user) {
    return this.http.post(this.URL, JSON.stringify(user), {headers: this.headers});
  }

  patchOne(user) {
    return this.http.patch(this.URL, JSON.stringify(user), {headers: this.headers});
  }

  deleteOne(id:number) {
    return this.http.delete(this.URL+"/"+id, {headers: this.headers});
  }

}
