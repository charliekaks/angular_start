import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  moviesList :any[];

  handleClickEvent(data){
    console.log("Recieved :", data);
  }
  constructor(private movieService : MovieService) {
   
   }

  ngOnInit() {
    this.moviesList = this.movieService.getMovies();
  }

}
