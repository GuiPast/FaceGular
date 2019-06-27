import { Component, OnInit, Input } from '@angular/core';
import { StoryTaleService } from '../user-story-tale/story-tale.service';
import { StoryTales } from '../Entities/story-tales.model';
@Component({
  selector: 'app-my-story-tales',
  templateUrl: './my-story-tales.component.html',
  styleUrls: ['./my-story-tales.component.css']
})
export class MyStoryTalesComponent implements OnInit {
  //Arreglar esto, poner INPUT!
  @Input() stories: StoryTales[];
  constructor(private storyService: StoryTaleService) { }

  ngOnInit() {
/*     this.getStories();
 */  }
/*   getStories(){
    this.storyService.getStory().subscribe( (data: StoryTales[]) => this.stories = data);
  } */
}
