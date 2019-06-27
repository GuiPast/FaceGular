import { Component, OnInit } from '@angular/core';
import { User } from '../Entities/user.model';
import { BuddiesService } from '../buddies/buddies.service';

@Component({
  selector: 'app-my-buddies',
  templateUrl: './my-buddies.component.html',
  styleUrls: ['./my-buddies.component.css']
})
export class MyBuddiesComponent implements OnInit {
  
  allusers: User[];

  constructor(private buddiesService: BuddiesService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers(){
    this.buddiesService.getAllUsers().subscribe((data: User[]) => this.allusers = data);
  }

}
