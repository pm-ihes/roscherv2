import { Component } from '@angular/core';
import { APPLICATION_URL, CONTACT_URL } from 'src/app/constants/meta.constant';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
    contactUrl: string = CONTACT_URL;
    applicationUrl: string = APPLICATION_URL;
}
