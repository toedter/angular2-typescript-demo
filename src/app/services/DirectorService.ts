export class DirectorService {

    private directors: any[];

    constructor() {
        this.directors = [
            { "name":"Frank Darabont", "born":"1959" },
            { "name":"Francis Ford Coppola", "born":"1939", },
            { "name":"Christopher Nolan ", "born":"1970" },
            { "name":"Sidney Lumet", "born":"1924" }
        ];
    }

    public getDirector(): any[] {
        return this.directors;
    }
}