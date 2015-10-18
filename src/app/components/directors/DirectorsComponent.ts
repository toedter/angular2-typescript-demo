import {View, Component, NgFor, bootstrap} from 'angular2/angular2';
import {DirectorService} from '../../services/DirectorService';

@Component({
    selector: 'directors',
    viewBindings: [DirectorService]
})
@View({
    templateUrl: 'app/components/directors/DirectorsComponent.html',
    directives: [NgFor]
})
export class DirectorsComponent {
    private directors:any[];

    constructor(private movieService:DirectorService) {
        this.directors = movieService.getDirector();
    }
}