import { Component, OnInit } from '@angular/core';
import { MovieService} from '../movie.service'

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie : any;
  constructor(private eventService : MovieService) { }

  ngOnInit() {
    this.movie = this.eventService.getMovie(1);
  }

}
