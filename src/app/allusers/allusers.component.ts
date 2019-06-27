import { Component, OnInit, Input } from '@angular/core';
import { BuddiesService } from '../buddies/buddies.service';
import { User } from '../Entities/user.model';
import { MyBuddiesComponent } from '../my-buddies/my-buddies.component';
import { SearchService } from './search.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllUsersComponent implements OnInit {

  @Input() allusers:User[];
  usersCopy:User[] = this.allusers;
  search:string;
  constructor(private myBuddies: MyBuddiesComponent, private searchService:SearchService) { }

  ngOnInit() {
  }

  //Busca DPM
  searchFriends(){
    if(this.search.trim().length === 0){
      this.myBuddies.getAllUsers();
    }else{
      this.searchService.searchUser(this.search).subscribe((data: User[]) => this.allusers = data);
    }
  //Funciona, pero es cutre salchichero
/*     if(this.allusers !== undefined){
      this.allusers = this.allusers.filter(
        user => user.name.toLowerCase().includes(this.search.toLowerCase()));
      this.flag=true;
    }
    if(this.flag = false){
      this.myBuddies.getAllUsers();
    } */
  }

  click(){
    alert("hola que tal");
  }
}
