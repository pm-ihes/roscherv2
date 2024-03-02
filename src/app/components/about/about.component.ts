import { Component, ElementRef, HostListener, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { HistoryItems } from 'src/app/constants/historie.constant';

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

    constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

    ngAfterViewInit() {
        this.firstOffset = this.sections?.first.nativeElement.getBoundingClientRect().top - window.innerHeight * 0.7;
        this.setActiveSection();
    }

    @HostListener('window:scroll', ['$event']) // for window scroll events
    onScroll() {
        if (this.topDiv?.nativeElement.getBoundingClientRect().top === 0) {
            this.firstOffset = this.sections?.first.nativeElement.getBoundingClientRect().top - window.innerHeight * 0.7;
        }
        this.setActiveSection();
    }

    setActiveSection() {
        const filteredSection = this.sections?.filter((section) => {
            return section.nativeElement.getBoundingClientRect().top > (this.firstOffset ?? 100);
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
