import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

@Component({
    selector: 'app-air-conditioner-section',
    templateUrl: './air-conditioner-section.component.html',
    styleUrls: ['./air-conditioner-section.component.css']
})
export class AirConditionerSectionComponent implements OnInit {
    ngOnInit(): void {
        this.createSlider();
    }

    createSlider() {
        var eeSlider = new Swiper('.air-slider', {
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
}
