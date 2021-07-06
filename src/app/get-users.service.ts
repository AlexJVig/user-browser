import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetUsersService {

  getUsersUrl = 'http://localhost:5000/api/Users';
  
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.getUsersUrl);
  }

}
