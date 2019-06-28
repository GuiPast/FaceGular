import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigateComponent } from './navigate/navigate.component';
import { HistorietasComponent } from './historietas/historietas.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user/user.service';
import { UserStoryTaleComponent } from './user-story-tale/user-story-tale.component';
import { StoryTaleService } from './user-story-tale/story-tale.service';
import { MyStoryTalesComponent } from './my-story-tales/my-story-tales.component';
import { MyThingsComponent } from './my-things/my-things.component';
import { MyBuddiesComponent } from './my-buddies/my-buddies.component';
import { SearchBuddiesComponent } from './search-buddies/search-buddies.component';
import { BuddiesComponent } from './buddies/buddies.component';
import { BuddiesService } from './buddies/buddies.service';
import { AllUsersComponent } from './allusers/allusers.component';
import { SearchService } from './allusers/search.service';
import { UserSelectedComponent } from './user-selected/user-selected.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigateComponent,
    HistorietasComponent,
    PagenotfoundComponent,
    UserComponent,
    UserStoryTaleComponent,
    MyStoryTalesComponent,
    MyThingsComponent,
    MyBuddiesComponent,
    SearchBuddiesComponent,
    BuddiesComponent,
    AllUsersComponent,
    UserSelectedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserService,StoryTaleService,BuddiesService,SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
