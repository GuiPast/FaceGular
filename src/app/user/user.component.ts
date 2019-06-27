import { Component, OnInit } from '@angular/core';
import { User } from '../Entities/user.model';
import { UserService } from './user.service';
import { StoryTales } from '../Entities/story-tales.model';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  myUser: User[];

  userLogged: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getLoggedUser(); 
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers()
    .subscribe( (data: User[]) => this.myUser = data);
  }

  getLoggedUser() {
    this.userService.getLoggedUsers().subscribe((data: User) => this.userLogged = data);
  }
}
