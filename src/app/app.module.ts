import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { JokeService } from './services/joke.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JokesComponent } from './components/jokes/jokes.component';

@NgModule({
  declarations: [
    AppComponent,
    JokesComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [JokeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
