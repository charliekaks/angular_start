import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  getMovies(){
    return moviesList;
  }
  getMovie(id:number){
    return moviesList.find(movie => movie.id === id)
  }
  constructor() { }
}
const moviesList = [{
  id : 1,
  name : "Black Panther",
  duration : "2hrs 30 min",
  date: '9/12/2018',
  description: "Black Panther is a 2018 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 18th film in the Marvel Cinematic Universe (MCU).",
  image : "../assets/images/black_panther.jpg" 
},
{
  id :2,
  name : "The IrishMan",
  duration : "3hrs 15min",
  date : "27/9/2019",
  description : "In the 1950s, truck driver Frank Sheeran gets involved with Russell Bufalino and his Pennsylvania crime family. As Sheeran climbs the ranks to become a top hit man, he also goes to work for Jimmy Hoffa -- a powerful Teamster tied to organized crime.",
  image : "../assets/images/irishman.jpg"
},
{
  id : 3,
  name : "Spider-Man: Into the Spider-Verse",
  duration : " 1h 56min",
  date : "1/12/2018",
  description : "After gaining superpowers from a spider bite, Miles Morales protects the city as Spider-Man. Soon, he meets alternate versions of himself and gets embroiled in an epic battle to save the multiverse.",
  image : "../assets/images/spider.jpg"
},
{
  id : 4,
  name : "Avengers: Endgame",
  duration : "3h 2min",
  date : "22/4/2019",
  description : "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
  image : "../assets/images/avengers.jpg/"
},
{
  id : 5,
  name : "The Dark Knight",
  duration : "2h 32min",
  date : "14//2018",
  description : "After Gordon, Dent and Batman begin an assault on Gotham's organised crime, the mobs hire the Joker, a psychopathic criminal mastermind who wants to bring all the heroes down to his level.",
  image : "../assets/images/batman.jpg"
}
]