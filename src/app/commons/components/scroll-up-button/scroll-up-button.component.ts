import { Component } from '@angular/core';
import { ScrollUpService } from 'src/app/services/scroll-up.service';

@Component({
  selector: 'scroll-up-button',
  templateUrl: './scroll-up-button.component.html',
  styleUrls: ['./scroll-up-button.component.css']
})
export class ScrollUpButtonComponent {

    constructor (private scrollService: ScrollUpService) {}

    scrollToTop(){
        this.scrollService.scrollToTop();
    }

}
