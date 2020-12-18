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
	jokes:Joke[]=[];
	
	cont:number = 0;
	size:number = 0;;
	
	constructor(private service:JokeService) { }
	
	ngOnInit(): void { 
		this.onNext();
	}
	
	onNext() {
		this.service.getAJoke()
		.subscribe((response:any) => {
			this.joke = response;
			this.jokes.push(this.joke);
			
			console.log("joke: ", this.joke);
		});

		if( this.cont > 0) this.cont--;
	}
	
	onBack() {
		this.cont++;
		this.size = this.jokes.length;
		
		let point = this.size - this.cont;

		console.log('size: ',this.size);
		console.log ("joke_back " + this.joke);
		this.joke = this.jokes[point];
		
		if( point !== 0 ) {
			console.log('joke: ',this.joke);	
		
		} else {
			console.log("zeroooooo")
		}
	}
	
}
