import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './constants/environment.constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = `${environment.apiUrl}/user`;

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<any>(this.usersUrl);
  }

  getUser(id: number) {
    return this.http.get<any>(`${this.usersUrl}/${id}`);
  }
}
