import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StoryTales } from '../Entities/story-tales.model';

const URL_BASE:string= 'http://localhost:3000/story';
const httpOptions={
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
@Injectable()
export class StoryTaleService {

  constructor(private http: HttpClient) { }
  
  addStory(story:StoryTales){
    const url = `${URL_BASE}/`;
    return this.http.post<StoryTales>(url,story,httpOptions);
  }

  getStory(){
    return this.http.get(URL_BASE);
  }

  getStoryByUser(){
    return this.http.get(`${URL_BASE}?user.id=1`);
  }
}
