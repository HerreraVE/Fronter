import { UserModel } from './../model/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  public getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>('http://localhost:8090/getUsers');
  }
  public delete(user: UserModel): void {
    this.http.post('http://localhost:8090/deleteUser', JSON.stringify(user)).subscribe();
  }
}
