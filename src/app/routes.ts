import { Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieReviewsComponent } from './movie-reviews/movie-reviews.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { MovieRouteActivateService } from './movie-route-activate.service';

export const appRoutes : Routes = [
    {path : "movies/reviews" , component : MovieReviewsComponent},
    {path : "movies" , component : MovieListComponent},
    {path : "movies/:id" , component : MovieDetailsComponent, canActivate : [MovieRouteActivateService]},
    {path : "error" , component : ErrorPageComponent},
    {path : '' , redirectTo : "/movies" , pathMatch : "full"}
]