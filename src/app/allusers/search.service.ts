import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';


const URL_BASE:string= 'http://localhost:3000/users';

const httpOptions={
  headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
  })
};
@Injectable()
export class SearchService {

  constructor(private http: HttpClient) { }

  searchUser(name:string){
    return this.http.get(`${URL_BASE}?name_like=${name}&id_ne=1`);
  }
}
