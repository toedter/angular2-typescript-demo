import { Component, View, CORE_DIRECTIVES } from 'angular2/angular2';
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';
import { MoviesComponent } from '../movies/MoviesComponent';
import { DirectorsComponent } from '../directors/DirectorsComponent';
import { Routes, APP_ROUTES } from './RouteConfig';

@Component({
    selector: 'movie-app'
})
@View({
    template: `
    <a [router-link]="['/' + routes.movies.as]" class="router-link">{{routes.movies.caption}}</a>
    <a [router-link]="['/' + routes.directors.as]" class="router-link">{{routes.directors.caption}}</a>
    <router-outlet></router-outlet>
  `,
    styles: [`
    .router-link {padding: 5px;text-decoration: none;}
    .router-link:visited, .router-link:link {color: #444;}
    .router-link:hover {color: white; background-color: #1171a3; text-decoration: none;}
    .router-link.router-link-active {color: white; background-color: #52b9e9; text-decoration: none;}
  `],
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES]
})
@RouteConfig(APP_ROUTES)
export class AppComponent {
    public routes = Routes;
    public title = 'Tour of Heroes';
}
