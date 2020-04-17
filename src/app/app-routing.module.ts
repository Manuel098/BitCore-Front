import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component
import { HomeComponent } from './commponents/home/home.component';
import { ProfileComponent } from './commponents/profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'index', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
