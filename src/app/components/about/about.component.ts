import { Component, ElementRef, HostListener, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { HistoryItems } from 'src/app/constants/historie.constant';
import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent {
    @ViewChildren('section')
    sections?: QueryList<ElementRef>;

    @ViewChild('hSection')
    hSection?: ElementRef;

    @ViewChild('top')
    topDiv?: ElementRef;

    items = HistoryItems;
    firstOffset?: number;
    offset: number = 0;

    constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

    ngAfterViewInit() {
        this.setActiveSection();
        this.createSlider();
    }

    @HostListener('window:scroll', ['$event']) // for window scroll events
    onScroll() {
        this.setActiveSection();
    }

    createSlider() {
        var PartnerSlider = new Swiper('.partner-slider', {
            modules: [Pagination, Autoplay],
            slidesPerView: 'auto',
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true
            },
            autoplay: {
              delay: 2000,
              disableOnInteraction: false,
            },
        });
    }
    setActiveSection() {
        const filteredSection = this.sections?.filter((section) => {
            return section.nativeElement.getBoundingClientRect().bottom > (window.innerHeight * 0.4);
        });

        this.sections?.forEach((section) => {
            this.renderer.removeClass(section.nativeElement, 'active');
        });

        if (filteredSection && filteredSection?.length > 0) {
            this.renderer.addClass(filteredSection[0].nativeElement, 'active');
        } else {
            this.renderer.addClass(this.sections?.last.nativeElement, 'active');
        }
    }

    getActivePointer() {}
}
