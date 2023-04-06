import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanActivateChildFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router'
import { Observable } from 'rxjs'
import { AuthService } from './auth.service'

@Injectable()
export class AuthGaurdService implements CanActivate, CanActivateChild {
    constructor(private authService: AuthService, private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | Promise<boolean> | Observable<boolean> {

        // let isLoggedIn = this.authService.isAuthenticated();
        // if (isLoggedIn) {
        //     return true;
        // } else {
        //     return this.router.navigate(['/'])
        // }

        return this.authService.isAuthenticated().then(data => {   //ajax call
            if(data) {
                return true
            }else{
                return this.router.navigate(['/'])
            }
        })
    }

    canActivateChild(
        childRoute: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
    ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.canActivate(childRoute,state);
        
    }

}