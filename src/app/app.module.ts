import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSidenavModule, MatToolbarModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { WordsComponent } from './views/words/words.component';
import { JokesComponent } from './views/jokes/jokes.component';
import { MainComponent } from './views/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WordsComponent,
    JokesComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    BrowserAnimationsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
