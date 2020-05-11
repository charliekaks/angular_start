import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-movie-reviews',
  templateUrl: './movie-reviews.component.html',
  styleUrls: ['./movie-reviews.component.css']
})
export class MovieReviewsComponent implements OnInit {
  
  constructor(private route : Router) {

   }

  cancel(){
    this.route.navigate(['/movies'])
  }

  ngOnInit(): void {
  }

}