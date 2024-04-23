import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './commons/footer/footer.component';
import { NavbarComponent } from './commons/navbar/navbar.component';
import { NotFoundComponent } from './commons/not-found/not-found.component';
import { LoadingIndicatorComponent } from './commons/loading-indicator/loading-indicator.component';
import { HomeComponent } from './components/home/home.component';
import { CareerComponent } from './components/career/career.component';
import { CountUpModule } from 'ngx-countup';
import { ServiceItemComponent } from './components/home/service-item/service-item.component';
import { OfferItemComponent } from './commons/components/offer-item/offer-item.component';
import { AboutComponent } from './components/about/about.component';
import { ApplicationItemComponent } from './components/career/application-item/application-item.component';
import { Job1Component } from './components/career/job-1/job-1.component';
import { Job2Component } from './components/career/job-2/job-2.component';
import { Job3Component } from './components/career/job-3/job-3.component';
import { ImprintComponent } from './commons/imprint/imprint.component';
import { PrivacyComponent } from './commons/privacy/privacy.component';
import { RoscherServicesComponent } from './components/roscher-services/roscher-services.component';
import { HeatingSectionComponent } from './components/roscher-services/heating-section/heating-section.component';
import { EeSectionComponent } from './components/roscher-services/ee-section/ee-section.component';
import { SanitarySectionComponent } from './components/roscher-services/sanitary-section/sanitary-section.component';
import { AirConditionerSectionComponent } from './components/roscher-services/air-conditioner-section/air-conditioner-section.component';
import { ScrollUpButtonComponent } from './commons/components/scroll-up-button/scroll-up-button.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    NotFoundComponent,
    LoadingIndicatorComponent,
    HomeComponent,
    CareerComponent,
    ServiceItemComponent,
    OfferItemComponent,
    AboutComponent,
    ApplicationItemComponent,
    Job1Component,
    Job2Component,
    Job3Component,
    ImprintComponent,
    PrivacyComponent,
    RoscherServicesComponent,
    HeatingSectionComponent,
    EeSectionComponent,
    SanitarySectionComponent,
    AirConditionerSectionComponent,
    ScrollUpButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountUpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
