import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-service-item',
    templateUrl: './service-item.component.html',
    styleUrls: ['./service-item.component.css']
})
export class ServiceItemComponent {
    @Input()
    imageSrc: string = '';

    @Input()
    title: string = '';

    @Input()
    link: string = '';

    @Input()
    fragment: string = '';
}
