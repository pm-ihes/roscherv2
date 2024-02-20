import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './commons/not-found/not-found.component';
import { scrollGuard } from './services/scroll.guard';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },

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
