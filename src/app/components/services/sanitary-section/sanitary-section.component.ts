import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { cards } from 'src/app/constants/cards.constant';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

@Component({
    selector: 'app-sanitary-section',
    templateUrl: './sanitary-section.component.html',
    styleUrls: ['./sanitary-section.component.css']
})
export class SanitarySectionComponent implements OnInit {
    cardElements?: ElementRef[];
    thamElements?: ElementRef[];
    mobileElements?: ElementRef[];

    viewLoaded: boolean = false;
    menuOpened: boolean[] = [false, false, false, false, false];
    mMenuOpened: boolean[] = [false, false, false, false, false];
    isMobile: boolean = false;
    cards = cards;

    constructor(private renderer: Renderer2, private elem: ElementRef) {}

    ngOnInit() {
        this.isMobile = this.getSize();
        this.createSlider();
    }

    //Erstellt Slider
    createSlider() {
        var heatingSlider = new Swiper('.sanitary-slider', {
            modules: [Navigation],
            grabCursor: true,
            centeredSlides: true,
            loop: true,
            slidesPerView: 'auto',
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        });
    }

    ngAfterViewInit() {
        this.refreshElements();

        if (this.cardElements) {
            this.cardElements.forEach((card) => {
                this.renderer.removeClass(card, 'active');
            });

            if (!this.isMobile) {
                this.renderer.addClass(this.cardElements[0], 'active');
            }
        }
    }

    @HostListener('window:resize')
    onResize() {
        this.isMobile = this.getSize();
        this.refreshElements();
    }

    refreshElements() {
        this.cardElements = this.elem.nativeElement.querySelectorAll('.card');
        this.thamElements = this.elem.nativeElement.querySelectorAll('.tham');
        this.mobileElements = this.elem.nativeElement.querySelectorAll('.mobile-notes');
    }

    addActive(event: Event) {
        const target = event.target as HTMLElement;

        for (let i = 0; i < this.menuOpened.length; i++) {
            this.menuOpened[i] = false;
        }

        if (this.cardElements && target) {
            this.cardElements.forEach((card) => {
                this.renderer.removeClass(card, 'active');
            });

            this.renderer.addClass(target, 'active');
        }

        if (this.thamElements) {
            this.thamElements.forEach((tham) => {
                this.renderer.removeClass(tham, 'tham-active');
            });
        }
    }

    toggleMenu(event: Event, index: number = -1) {
        const tham = event.currentTarget as HTMLElement;

        tham.classList.toggle('tham-active');

        if (this.isMobile && this.mobileElements) {
            this.mMenuOpened[index] = !this.mMenuOpened[index];

            var mobileEl = this.mobileElements[index];
            console.log(mobileEl);

            for (let i = 0; i < 5; i++) {
                if (!this.mMenuOpened[i]) {
                    this.renderer.removeClass(this.mobileElements[i], 'active');
                }
            }

            if (this.mMenuOpened[index]) {
                this.renderer.addClass(this.mobileElements[index], 'active');
            }
            return;
        }

        for (let i = 0; i < this.menuOpened.length; i++) {
            if (i === index) continue;
            this.menuOpened[i] = false;
        }
        this.menuOpened[index] = !this.menuOpened[index];
    }

    getSize() {
        if (window.innerWidth < 1001) {
            return true;
        } else {
            return false;
        }
    }
}
