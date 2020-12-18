import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { JokeService } from './services/joke.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JokesComponent } from './components/jokes/jokes.component';
import { CountwordsPipe } from './shared/pipe/countwords.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//MATERIAL
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    JokesComponent,
    CountwordsPipe
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatButtonToggleModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule
  ],
  
  providers: [JokeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
