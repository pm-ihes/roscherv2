import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

@Component({
    selector: 'app-sanitary-section',
    templateUrl: './sanitary-section.component.html',
    styleUrls: ['./sanitary-section.component.css']
})
export class SanitarySectionComponent implements OnInit{
    ngOnInit() {
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
}
