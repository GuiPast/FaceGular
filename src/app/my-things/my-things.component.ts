import { Component, OnInit } from '@angular/core';
import { StoryTales } from '../Entities/story-tales.model';
import { StoryTaleService } from '../user-story-tale/story-tale.service';
import { Relationship } from '../Entities/userRelationship.model';
import { BuddiesService } from '../buddies/buddies.service';
import { User } from '../Entities/user.model';

@Component({
  selector: 'app-my-things',
  templateUrl: './my-things.component.html',
  styleUrls: ['./my-things.component.css']
})
export class MyThingsComponent implements OnInit {
  stories: StoryTales[];
  buddies: Relationship[];
  constructor(private storyService: StoryTaleService, private buddiesService: BuddiesService) { }

  ngOnInit() {
    this.getMyStories();
    this.getMyBuddies();
  }

  getMyStories() {
    this.storyService.getStoryByUser().subscribe((data: StoryTales[]) => this.stories = data);
  }
  getMyBuddies() {
    this.buddiesService.getFrienships().subscribe(
      (data: Relationship[]) => this.buddies=data);
  }
}
