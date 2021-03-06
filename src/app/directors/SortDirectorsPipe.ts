import {Pipe} from 'angular2/core';
import {Director} from './Director';

@Pipe({name: 'sortDirectors'})
export class SortDirectorsPipe {
    transform(value:Director[]) {
        if (!value || !value.sort) {
            return value;
        }

        return value.sort((a:Director, b:Director) => {
            if (a.movies.length > b.movies.length) {
                return -1;
            }
            if (a.movies.length < b.movies.length) {
                return 1;
            }
            return 0;
        });
    }
}