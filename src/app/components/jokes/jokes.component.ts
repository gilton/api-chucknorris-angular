import { Joke } from './../../models/joke.model';
import { JokeService } from './../../services/joke.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-jokes',
	templateUrl: './jokes.component.html',
	styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit {
	
	joke:Joke={};

	constructor(private service:JokeService) { }
	
	ngOnInit(): void { 
		this.service.getJokes()
			.subscribe((response:any) => {
				this.joke = response;
				console.log("joke: ", this.joke);
			})
	}
	
	
	
}
