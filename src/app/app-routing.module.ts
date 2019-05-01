import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './views/login/login.component';
import {WordsComponent} from './views/words/words.component';
import {JokesComponent} from './views/jokes/jokes.component';

const routes: Routes = [

  {path: 'login', component: LoginComponent},
  {path: 'words', component: WordsComponent},
  {path: 'jokes', component: JokesComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
