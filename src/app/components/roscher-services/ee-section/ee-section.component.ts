import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';


@Component({
  selector: 'app-ee-section',
  templateUrl: './ee-section.component.html',
  styleUrls: ['./ee-section.component.css']
})
export class EeSectionComponent implements OnInit{

    ngOnInit(): void {
        this.createSlider();
    }

    createSlider(){
        var eeSlider = new Swiper('.ee-slider', {
            modules: [Navigation, Autoplay],
            grabCursor: true,
            centeredSlides: true,
            loop: true,
            slidesPerView: 'auto',
            autoplay: {
                delay: 10000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        });
    }

}
