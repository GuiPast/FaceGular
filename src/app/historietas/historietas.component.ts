import { Component, OnInit } from '@angular/core';
import { StoryTales } from '../Entities/story-tales.model';
import { StoryTaleService } from '../user-story-tale/story-tale.service';

@Component({
  selector: 'app-historietas',
  templateUrl: './historietas.component.html',
  styleUrls: ['./historietas.component.css']
})
export class HistorietasComponent implements OnInit {
  stories: StoryTales[];
  constructor(private storyService: StoryTaleService) { }

  ngOnInit() {
    this.getStories();
  }

  getStories(){
    this.storyService.getStory().subscribe( (data: StoryTales[]) => this.stories = data);
  }
}
