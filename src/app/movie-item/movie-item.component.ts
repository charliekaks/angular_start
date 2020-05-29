import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movies : Movie;
  @Output() clickMe = new EventEmitter();

  clickButton(){
    this.clickMe.emit(this.movies.name);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
