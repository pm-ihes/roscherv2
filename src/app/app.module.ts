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

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    NotFoundComponent,
    LoadingIndicatorComponent,
    HomeComponent,
    CareerComponent
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
