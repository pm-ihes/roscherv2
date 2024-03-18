import { Component, OnInit } from '@angular/core';
import { Swiper } from 'swiper';
import { Navigation } from 'swiper/modules';

@Component({
  selector: 'app-heating-section',
  templateUrl: './heating-section.component.html',
  styleUrls: ['./heating-section.component.css']
})
export class HeatingSectionComponent implements OnInit{

    ngOnInit() {
        this.createSlider();
    }

    //Erstellt Slider
    createSlider() {
        var heatingSlider = new Swiper('.heating-slider', {
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
