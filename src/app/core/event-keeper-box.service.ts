import { Router } from '@angular/router';
import { CoreModule } from './core.module';
import { Logger } from './logger.service';
import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/primeng';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/observable/of';

@Injectable()
export class EventKeeperBoxService {

          breadcrumbChange: BehaviorSubject<MenuItem[]>;
          currentPosition: MenuItem[] = [];
          showLogin: BehaviorSubject<boolean>;

          constructor(private logger: Logger,
                    private router: Router) {
                    this.breadcrumbChange = new BehaviorSubject(null);
                    this.showLogin = new BehaviorSubject(false);
          }

          getBreadCrumbsItems(): BehaviorSubject<MenuItem[]> {
                    return this.breadcrumbChange;
          }

          setBreadcrumbsItems(breadcrumbs: MenuItem[]) {
                    this.breadcrumbChange.next(breadcrumbs);
                    this.currentPosition = breadcrumbs;
          }

          goBack() {
                    const a = this.currentPosition[this.currentPosition.length - 2].routerLink;
                    this.router.navigate(a);
          }

          isShowLogin(): BehaviorSubject<boolean> {
                    return this.showLogin;
          }

          setShowLogin(showLogin: boolean) {
                    this.showLogin.next(showLogin);
          }
}
