import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Relationship } from '../Entities/userrelationship.model';

const URL_BASE:string= 'http://localhost:3000/userrelationships';
const URL_BASE_USER:string= 'http://localhost:3000/users';

const httpOptions={
  headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class BuddiesService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(`${URL_BASE}?state=1`);
  }
  
  getUserById(id: number){
    const url = `${URL_BASE_USER}/${id}`;
    return this.http.get(url);
  }

  getAllUsers(){
    return this.http.get(`${URL_BASE_USER}?id_ne=1`);
  }

  postFriendship(friendship:Relationship){
    const url = `${URL_BASE}`;
    return this.http.post(url,friendship,httpOptions);
  }
}