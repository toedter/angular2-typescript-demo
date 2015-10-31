import { Component, CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/angular2';
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';
import { MoviesComponent } from '../movies/MoviesComponent';
import { DirectorsComponent } from '../directors/DirectorsComponent';
import { Routes, APP_ROUTES } from './RouteConfig';

@Component({
    selector: 'movie-app',
    templateUrl: 'app/app/AppComponent.html',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, ROUTER_DIRECTIVES]
})
@RouteConfig(APP_ROUTES)
export class AppComponent {
    public routes = Routes;
}
