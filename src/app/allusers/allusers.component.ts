import { Component, OnInit, Input } from '@angular/core';
import { BuddiesService } from '../buddies/buddies.service';
import { User } from '../Entities/user.model';
import { MyBuddiesComponent } from '../my-buddies/my-buddies.component';
import { SearchService } from './search.service';
import { Relationship } from '../Entities/userrelationship.model';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllUsersComponent implements OnInit {

  @Input() allusers:User[];
  @Input() userLogged:User;

  userSelected:User;
  search:string;
  friendship:Relationship;
  allFriendships:Relationship[];

  constructor(private myBuddies: MyBuddiesComponent, private searchService:SearchService,
    private friendshipService:BuddiesService) { }

  ngOnInit() {
    this.getFriends();
  }

  searchFriends(){
    if(this.search.trim().length === 0){
      this.myBuddies.getAllUsers();
    }else{
      this.searchService.searchUser(this.search).subscribe((data: User[]) => this.allusers = data);
    }
  }

  userSelectedF(user:User){
    this.userSelected=new User();
    this.userSelected.id=user.id;
    this.userSelected.name=user.name;
    this.userSelected.age=user.age;
    this.userSelected.username=user.username;
    this.userSelected.location= user.location;
    this.userSelected.img=user.img;
  }

  requestFriend(user:User){
    this.friendship = new Relationship();
    this.friendship.id=null;
    this.friendship.state=0;
    this.friendship.userreceive=user;
    this.friendship.usersent=this.userLogged;
    this.friendshipService.postFriendship(this.friendship).subscribe();
  }

  getFriends(){
    this.friendshipService.getRequestFriendship().subscribe((data :Relationship[]) => {
      this.allFriendships = data;
    });
  }
}
