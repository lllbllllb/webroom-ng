import { Logger } from './logger.service';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

          constructor(private authService: AuthService,
                    private router: Router,
                    private logger: Logger) { }

          canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
                    const checkLogin = this.checkLogin();
                    this.logger.info('Trying for get access to: ' + state.url + '. ' + checkLogin);
                    return checkLogin;
          }

          checkLogin(): boolean {
                    const isLogged = localStorage.getItem('isLoggedToWr');

                    this.logger.info('isLoggedToWr: ' + localStorage.getItem('isLoggedToWr'));

                    if (isLogged === 'true') {
                              return true;
                    }

                    this.router.navigate(['/login']);
                    return false;
          }
}
