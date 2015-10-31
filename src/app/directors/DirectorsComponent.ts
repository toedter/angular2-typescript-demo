import {Component, NgFor} from 'angular2/angular2';
import {DirectorService} from './DirectorService';
import {SortDirectorsPipe} from './SortDirectorsPipe';

@Component({
    selector: 'directors',
    viewBindings: [DirectorService],
    templateUrl: 'app/directors/DirectorsComponent.html',
    directives: [NgFor],
    pipes: [SortDirectorsPipe]
})
export class DirectorsComponent {
    private directors:any[];

    constructor(private directorService:DirectorService) {
        this.directors = directorService.getDirectors();
    }
}