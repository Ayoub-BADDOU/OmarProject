import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  Url = "http://localhost:2022" + "/user";
  constructor(private http: HttpClient) { }

  register(data) {
    return this.http.post(this.Url + '/register', data)
  }

  login(data) {
    return this.http.post(this.Url + '/login', data)
  }
}
