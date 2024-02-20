import { CanActivateFn } from '@angular/router';

export const scrollGuard: CanActivateFn = (route, state) => {
    window.scrollTo(0, 0);
    return true;
};
