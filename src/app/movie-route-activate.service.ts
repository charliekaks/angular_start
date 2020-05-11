import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { MovieService } from './movie.service';

@Injectable({
  providedIn: 'root'
})
export class MovieRouteActivateService implements CanActivate{

  constructor(private movie : MovieService, private router : Router) { }

  canActivate(route : ActivatedRouteSnapshot){
    const movieExists = !!this.movie.getMovie(+route.params['id']);
    if(!movieExists){
      this.router.navigate(['/error'])
    }
    return movieExists;
  }
}
