import {Component, NgFor} from 'angular2/angular2';
import {DirectorService} from '../../services/DirectorService';

@Component({
    selector: 'directors',
    viewBindings: [DirectorService],
    templateUrl: 'app/components/directors/DirectorsComponent.html',
    directives: [NgFor]
})
export class DirectorsComponent {
    private directors:any[];

    constructor(private directorService:DirectorService) {
        this.directors = directorService.getDirectors();
    }
}