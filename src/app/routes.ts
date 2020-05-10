import { Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

export const appRoutes : Routes = [
    {path : "movies" , component : MovieListComponent},
    {path : "movies/:id" , component : MovieDetailsComponent},
    {path : '' , redirectTo : "/movies" , pathMatch : "full"}
]