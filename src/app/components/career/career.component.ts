import { Component } from '@angular/core';
import Aos from 'aos';

@Component({
    selector: 'app-career',
    templateUrl: './career.component.html',
    styleUrls: ['./career.component.css']
})
export class CareerComponent {
    ngAfterViewInit() {
        Aos.init();
    }
}
