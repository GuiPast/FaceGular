import { Component, OnInit, Input } from '@angular/core';
import { StoryTales } from '../Entities/story-tales.model';
import { StoryTaleService } from '../user-story-tale/story-tale.service';
import { User } from '../Entities/user.model';
import { UserService } from '../user/user.service';
import { MyStoryTalesComponent } from '../my-story-tales/my-story-tales.component';
import { HistorietasComponent } from '../historietas/historietas.component';
@Component({
  selector: 'app-user-story-tale',
  templateUrl: './user-story-tale.component.html',
  styleUrls: ['./user-story-tale.component.css']
})

export class UserStoryTaleComponent implements OnInit {

  story:StoryTales;
  stories:StoryTales[];
  constructor(private storyService:StoryTaleService,private userService: UserService,
    private storyTales:HistorietasComponent) {
   }

   today:number = Date.now();
  ngOnInit() {
    this.story = new StoryTales();
    this.story.id=null;
    this.story.date = Date.now();
    this.story.user = new User();
  }

  addStory():void{
    this.story.user.id = this.userService.userLogged.id;
    this.story.user.name = this.userService.userLogged.name;
    this.story.user.username = this.userService.userLogged.username;
    this.story.user.img = this.userService.userLogged.img;
    this.storyService.addStory(this.story).subscribe(() => this.storyTales.getStories());
  }


}
