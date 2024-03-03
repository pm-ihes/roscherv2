import { Component } from '@angular/core';
import Aos from 'aos';

@Component({
    selector: 'app-career',
    templateUrl: './career.component.html',
    styleUrls: ['./career.component.css']
})
export class CareerComponent {
    overviewOpen = [false, false, false];

    ngAfterViewInit() {
        Aos.init();
    }

    toggleOverview(index: number) {
        this.overviewOpen[index] = !this.overviewOpen[index];
    }
}
