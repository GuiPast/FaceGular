import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistorietasComponent } from './historietas/historietas.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MyThingsComponent } from './my-things/my-things.component';
import { MyBuddiesComponent } from './my-buddies/my-buddies.component';

const routes: Routes = [
  { path: '',redirectTo: 'home',pathMatch: 'full' },
  { path: 'home', component: HistorietasComponent },
  { path:'myStuff', component:MyThingsComponent },
  { path:'myBuddies', component:MyBuddiesComponent },
  { path: '**', component: PagenotfoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
