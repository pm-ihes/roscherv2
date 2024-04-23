import { Component, inject } from '@angular/core';
import { Data } from '@angular/router';
import { DialogService, DialogRef } from '@ngneat/dialog';

@Component({
  selector: 'app-haverie-modal',
  templateUrl: './haverie-modal.component.html',
  styleUrls: ['./haverie-modal.component.css'],
  standalone: true
})
export class HaverieModalComponent {
    ref: DialogRef<Data, boolean> = inject(DialogRef);
}
