import { Component, OnInit } from '@angular/core';
import { UserService } from './user/user.service';
import { User } from './Entities/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FaceGular';

  constructor(private serviceUser: UserService){}

  ngOnInit(): void {
    this.serviceUser.getUser(1).subscribe(
      (data: User) => this.serviceUser.setUserLogged(data)
    );
  }
}
