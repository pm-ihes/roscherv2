import { Component, inject } from '@angular/core';
import { DialogService } from '@ngneat/dialog';
import { APPLICATION_URL, CONTACT_URL } from 'src/app/constants/meta.constant';
import { HaverieModalComponent } from '../components/haverie-modal/haverie-modal.component';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
    private dialog = inject(DialogService);

    contactUrl: string = CONTACT_URL;
    applicationUrl: string = APPLICATION_URL;

    OnInit() {
        const dialogRef = this.dialog.open(HaverieModalComponent);
    }
}
