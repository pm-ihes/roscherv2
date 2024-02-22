import { Component } from '@angular/core';
import Aos from 'aos';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    ngAfterViewInit() {
        Aos.init();
    }
}
