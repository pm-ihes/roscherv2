import { Component, Input } from '@angular/core';
import { APPLICATION_URL } from 'src/app/constants/meta.constant';

@Component({
  selector: 'app-application-item',
  templateUrl: './application-item.component.html',
  styleUrls: ['./application-item.component.css']
})
export class ApplicationItemComponent {

    overviewOpen = false;
    applicationUrl = APPLICATION_URL;

    @Input()
    title: string = '';
    
    toggleOverview() {
        this.overviewOpen = !this.overviewOpen;
    }

}
