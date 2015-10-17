import {View, Component, bootstrap} from 'angular2/angular2';
import {ServiceComponent} from '../services/service';

@Component({
    selector: 'my-app',
    viewBindings: [ServiceComponent]
})
@View({
    template: '<h1>Hello {{ name }}</h1><h1>Service: {{ serviceName }}</h1>'
})
export class AppComponent {
    private name:string;
    private serviceName:string;

    constructor(private service:ServiceComponent) {
        this.name = 'Kai';
        this.serviceName = service.getServiceName();
    }
}

bootstrap(AppComponent);