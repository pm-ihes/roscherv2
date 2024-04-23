import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './commons/not-found/not-found.component';
import { scrollGuard } from './services/scroll.guard';
import { HomeComponent } from './components/home/home.component';
import { CareerComponent } from './components/career/career.component';
import { AboutComponent } from './components/about/about.component';
import { ImprintComponent } from './commons/imprint/imprint.component';
import { PrivacyComponent } from './commons/privacy/privacy.component';
import { RoscherServicesComponent } from './components/roscher-services/roscher-services.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, canActivate: [scrollGuard]},
    { path: 'karriere', component: CareerComponent, canActivate: [scrollGuard]},
    { path: 'about', component: AboutComponent, canActivate: [scrollGuard]},
    { path: 'impressum', component: ImprintComponent, canActivate: [scrollGuard] },
    { path: 'datenschutz', component: PrivacyComponent, canActivate: [scrollGuard] },
    { path: 'leistungen', component: RoscherServicesComponent, canActivate: [scrollGuard] },

    { path: '404', component: NotFoundComponent, canActivate: [scrollGuard] },
    { path: '**', component: NotFoundComponent, canActivate: [scrollGuard] }
];

const routerOptions: ExtraOptions = {
    scrollPositionRestoration: 'disabled',
    anchorScrolling: 'enabled'
};
@NgModule({
    imports: [RouterModule.forRoot(routes, routerOptions)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
