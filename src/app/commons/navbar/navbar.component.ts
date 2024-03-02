import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CONTACT_URL } from 'src/app/constants/meta.constant';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    isMenuOpen = false;
    contactUrl: string = CONTACT_URL;

    constructor(private router: Router) {}

    ngOnInit() {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                if (this.isMenuOpen) {
                    this.onMenuOpen(undefined);
                }
            }
        });
    }

    onMenuOpen(event: Event | undefined) {
        this.isMenuOpen = !this.isMenuOpen;
        const tham = event?.currentTarget as HTMLElement;
        tham.classList.toggle('tham-active');
        document.querySelector('#menu')?.classList.toggle('open');
    }
}
