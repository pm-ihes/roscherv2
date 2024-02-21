import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './commons/not-found/not-found.component';
import { scrollGuard } from './services/scroll.guard';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, canActivate: [scrollGuard]},

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
