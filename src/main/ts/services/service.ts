export class ServiceComponent {

    private name: string;

    constructor() {
        this.name = 'service name';
    }

    public getServiceName(): string {
        return this.name;
    }
}