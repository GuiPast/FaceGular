import { Component, OnInit, Input } from '@angular/core';
import { BuddiesService } from './buddies.service';
import { Relationship } from '../Entities/userrelationship.model';
import { User } from '../Entities/user.model';

@Component({
  selector: 'app-buddies',
  templateUrl: './buddies.component.html',
  styleUrls: ['./buddies.component.css']
})
export class BuddiesComponent implements OnInit {

  @Input() buddies:Relationship[];
  
  fBuddies:User[];
  constructor(private buddiesService: BuddiesService) { }

  ngOnInit() {
   /*  this.getBuddiesById(); */
  }

/*   getBuddiesById(){
    this.buddies.forEach(element => {
      this.buddiesService.getUserById(element.idreceive).subscribe((data: User[]) => 
      this.fBuddies = data);
    });

  } */
}
