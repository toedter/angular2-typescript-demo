/// <reference path="../../../typings/angular2/angular2.d.ts" />
/// <reference path="services/service.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import {ServiceComponent} from './services/service';

@Component({
    selector: 'my-app',
    appInjector: [ServiceComponent]
})
@View({
    template: '<h1>Hello {{ name }}</h1><h1>Service: {{ serviceName }}</h1>'
})
class AppComponent {
    private name: string;
    private serviceName: string;

    constructor(private service:ServiceComponent) {
        this.name = 'Kai';
        this.serviceName = service.getServiceName();
    }
}

bootstrap(AppComponent);
