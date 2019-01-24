import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SummonerComponent } from './summoner/summoner.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'summoner/:region/:summoner', component: SummonerComponent },
  { path: 'summoner/:region/:summoner/:template', component: SummonerComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
