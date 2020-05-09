import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movies : any;
  @Output() clickMe = new EventEmitter();

  clickButton(){
    this.clickMe.emit(this.movies.name);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
