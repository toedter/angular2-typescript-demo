import {Component} from 'angular2/core';
import {DirectorService} from './DirectorService';
import {SortDirectorsPipe} from './SortDirectorsPipe';

@Component({
    selector: 'directors',
    viewBindings: [DirectorService],
    templateUrl: 'app/directors/DirectorsComponent.html',
    pipes: [SortDirectorsPipe]
})
export class DirectorsComponent {
    private directors:any[];

    constructor(private directorService:DirectorService) {
        this.directors = directorService.getDirectors();
    }
}