import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  moviesList = {
    name : "Black Panther",
    duration : "2hrs 30 min",
    date: '9/12/2018',
    description: "Black Panther is a 2018 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 18th film in the Marvel Cinematic Universe (MCU).",
    image : "../assets/images/black_panther.jpg" 
  }

  constructor() { }

  ngOnInit(): void {
  }

}
