import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { User } from '../Entities/user.model';
import { Observable } from 'rxjs';


const URL_BASE:string= 'http://localhost:3000/users';

const URL_LOGGED_USER:string= 'http://localhost:3000/loggedUser';
const httpOptions={
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
@Injectable()
export class UserService {
  userLogged: User;

  constructor(private http: HttpClient){}

  getUsers(){
    return this.http.get(URL_BASE);
  }
  getLoggedUsers(){
    return this.http.get(`${URL_LOGGED_USER}/1`);
  }

  getUser(id: number) {

    return this.http.get(`${URL_BASE}/${id}`);
  }

  setUserLogged(data: User) {
    this.userLogged = data;
  }

  /* getUserLogged() {
    return this.userLogged;
  } */

}
