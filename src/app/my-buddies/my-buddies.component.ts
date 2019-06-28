import { Component, OnInit } from '@angular/core';
import { User } from '../Entities/user.model';
import { BuddiesService } from '../buddies/buddies.service';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-my-buddies',
  templateUrl: './my-buddies.component.html',
  styleUrls: ['./my-buddies.component.css']
})
export class MyBuddiesComponent implements OnInit {
  
  allusers: User[];
  userLogged: User;

  constructor(private buddiesService: BuddiesService,private userService: UserService) { }

  ngOnInit() {
    this.getLoggedUser();
    this.getAllUsers();
  }

  getAllUsers(){
    this.buddiesService.getAllUsers().subscribe((data: User[]) => this.allusers = data);
  }

  getLoggedUser() {
    this.userService.getLoggedUsers().subscribe((data: User) => this.userLogged = data);
  }

}
