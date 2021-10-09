import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParametresService {

  Url = "http://localhost:2022" + "/category";
  constructor(public http: HttpClient) { }

  getCategories() {
    return this.http.get(this.Url + "/getCategories")
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
