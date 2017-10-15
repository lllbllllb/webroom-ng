import { Ca } from './../shared/entities/ca';
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

          breadcrumbChange: BehaviorSubject<MenuItem[]> = new BehaviorSubject(null);
          currentPosition: MenuItem[] = [];
          currentCa: BehaviorSubject<Ca> = new BehaviorSubject(null);

          constructor(private logger: Logger,
                    private router: Router) {
          }

          getBreadCrumbsItems(): BehaviorSubject<MenuItem[]> {
                    return this.breadcrumbChange;
          }

          setBreadcrumbsItems(breadcrumbs: MenuItem[]) {
                    this.breadcrumbChange.next(breadcrumbs);
                    this.currentPosition = breadcrumbs;
          }

          getCa(): BehaviorSubject<Ca> {
                    return this.currentCa;
          }

          setCa(ca: Ca) {
                    this.currentCa.next(ca);
          }

          goBack() {
                    const a = this.currentPosition[this.currentPosition.length - 2].routerLink;
                    this.router.navigate(a);
          }
}
