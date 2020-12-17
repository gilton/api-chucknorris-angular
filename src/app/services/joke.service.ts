import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Joke } from '../models/joke.model';
import { HttpClient } from '@angular/common/http';


const apiURL = "https://api.chucknorris.io";

@Injectable()
export class JokeService {


  constructor(private http:HttpClient) { }

  getJokes(): Observable<Joke> {
    return this.http.get<Joke>(apiURL + "/jokes/random");
  }


}
