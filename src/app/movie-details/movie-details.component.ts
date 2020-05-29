import { Component, OnInit } from '@angular/core';
import { MovieService} from '../movie.service'
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie : Movie;
  constructor(private eventService : MovieService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.movie = this.eventService.getMovie(+this.route.snapshot.params['id']);
  }

}
