export class ServiceComponent {

    private name: string;

    constructor() {
        this.name = 'test service';
    }

    public getServiceName(): string {
        return this.name;
    }
}